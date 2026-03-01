class Heart {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 18 + 8;
        this.speed = Math.random() * 1.5 + 0.5;
        this.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        this.opacity = Math.random() * 0.5 + 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.03 - 0.015;
        this.depth = Math.random() * 0.5 + 0.5; // efeito de profundidade
    }

    update() {
        this.y += this.speed * this.depth;
        this.angle += this.velocity;
        this.x += Math.sin(this.angle) * 0.4;

        if (this.y > canvas.height + 20) {
            this.y = -20;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.depth, this.depth);

        ctx.beginPath();
        ctx.moveTo(0, -this.size / 4);
        ctx.bezierCurveTo(0, -this.size / 2, -this.size / 2, -this.size / 2, -this.size / 2, 0);
        ctx.bezierCurveTo(-this.size / 2, this.size / 3, 0, this.size / 1.5, 0, this.size);
        ctx.bezierCurveTo(0, this.size / 1.5, this.size / 2, this.size / 3, this.size / 2, 0);
        ctx.bezierCurveTo(this.size / 2, -this.size / 2, 0, -this.size / 2, 0, -this.size / 4);

        ctx.globalAlpha = this.opacity;

        // 🌟 Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }
}