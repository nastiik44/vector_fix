document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('loading-screen');
    if (!screen) return;

    // Прячем через 2.4s (после завершения анимации линии)
    setTimeout(() => {
        screen.classList.add('loading-screen--hidden');
    }, 2400);
});