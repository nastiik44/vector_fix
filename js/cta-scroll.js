document.addEventListener('DOMContentLoaded', () => {

    // Все кнопки которые раньше открывали модалку — теперь скроллят к форме
    document.querySelectorAll('.js-modal-open[data-modal="request"]').forEach(btn => {
        btn.classList.remove('js-modal-open');
        btn.addEventListener('click', () => {
            // Закрыть мобайл-меню если открыто
            document.querySelector('.nav__drawer')?.classList.remove('nav__drawer--open');
            document.querySelector('.burger')?.classList.remove('burger--active');
            document.body.classList.remove('menu-open');

            document.getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // FAQ кнопка «Напишите нам» — тоже к форме
    document.querySelectorAll('.js-modal-open').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});