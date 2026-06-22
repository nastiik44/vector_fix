/* JS: Burger Menu */

document.addEventListener('DOMContentLoaded', () => {

    const burger  = document.querySelector('.nav__burger');
    const drawer  = document.querySelector('.nav__drawer');
    const links   = drawer ? drawer.querySelectorAll('.nav__drawer-link') : [];

    if (!burger || !drawer) return;

    function open() {
        burger.classList.add('burger--active');
        burger.setAttribute('aria-expanded', 'true');
        drawer.classList.add('nav__drawer--open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    }

    function close() {
        burger.classList.remove('burger--active');
        burger.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('nav__drawer--open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
    }

    burger.addEventListener('click', () =>
        drawer.classList.contains('nav__drawer--open') ? close() : open()
    );

    links.forEach(link => link.addEventListener('click', close));

    window.addEventListener('resize', () => { if (window.innerWidth > 768) close(); });

    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
});
