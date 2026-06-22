/* JS: FAQ Accordion */

document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
        const trigger = item.querySelector('.faq-item__trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('faq-item--open');

            // Закрыть все
            items.forEach(el => {
                el.classList.remove('faq-item--open');
                el.querySelector('.faq-item__trigger')?.setAttribute('aria-expanded', 'false');
            });

            // Открыть текущий (если был закрыт)
            if (!isOpen) {
                item.classList.add('faq-item--open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
