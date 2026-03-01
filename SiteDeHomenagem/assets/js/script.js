document.addEventListener('DOMContentLoaded', function () {

    const startButton = document.getElementById('startButton');

    if (!startButton) return;

    startButton.addEventListener('click', function () {

        // 🔥 Animação de saída suave
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "0";

        // 💖 Pequeno delay para efeito cinematográfico
        setTimeout(() => {
            window.location.href = 'amor.html';
        }, 800);

    });

});