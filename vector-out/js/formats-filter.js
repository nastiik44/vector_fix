document.addEventListener('DOMContentLoaded', () => {

    const tabs  = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.format-card');

    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Переключаем активный таб
            tabs.forEach(t => { 
                t.classList.remove('tab--active'); 
                t.setAttribute('aria-selected', 'false'); 
            });
            tab.classList.add('tab--active');
            tab.setAttribute('aria-selected', 'true');

            const filter = tab.dataset.filter;

            cards.forEach(card => {
                // Получаем строку категорий, разбиваем её по пробелу в массив 
                // (добавлена проверка на случай, если атрибут пустой или отсутствует)
                const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
                
                // Проверяем: либо выбран 'all', либо массив категорий содержит текущий фильтр
                const match = filter === 'all' || categories.includes(filter);
                
                card.classList.toggle('format-card--hidden', !match);
            });
        });
    });
});