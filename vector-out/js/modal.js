/* JS: Modal */

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.js-modal-open').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('modal-' + (btn.dataset.modal || 'request'));
            if (!modal) return;
            modal.classList.add('modal--open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('menu-open');
        });
    });

    document.querySelectorAll('.js-modal-close').forEach(el => {
        el.addEventListener('click', e => {
            const modal = e.target.closest('.modal');
            if (!modal) return;
            modal.classList.remove('modal--open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('menu-open');
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        document.querySelectorAll('.modal--open').forEach(modal => {
            modal.classList.remove('modal--open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('menu-open');
        });
    });
});
