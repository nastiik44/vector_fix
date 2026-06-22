/* JS: Drag-scroll для горизонтальных треков */

document.addEventListener('DOMContentLoaded', () => {

    const scrollables = document.querySelectorAll('.hero__gallery, .reviews__scroll-wrap');

    scrollables.forEach(el => {
        let isDown = false;
        let startX;
        let scrollLeft;

        el.addEventListener('mousedown', e => {
            isDown = true;
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        });

        el.addEventListener('mouseleave', () => { isDown = false; });
        el.addEventListener('mouseup',    () => { isDown = false; });

        el.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX) * 1.2;
        });
    });
});
