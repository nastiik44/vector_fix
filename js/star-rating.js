document.addEventListener('DOMContentLoaded', () => {

    // 1. Логика звездного рейтинга
    const starInputs = document.querySelectorAll('.star-rating__input');
    const starLabels = document.querySelectorAll('.star-rating__label');
    const starsContainer = document.querySelector('.star-rating');
    let currentRating = 0;

    starInputs.forEach(input => {
        input.addEventListener('change', () => {
            currentRating = parseInt(input.value);
            
            // Если пользователь кликнул на звезду, убираем красную рамку ошибки
            if (starsContainer) {
                starsContainer.classList.remove('input--error');
            }

            // Обновляем прозрачность (закрашиваем все звезды до выбранной включительно)
            starLabels.forEach(label => {
                const labelInputId = label.getAttribute('for');
                const labelInput = document.querySelector(`#${labelInputId}`);
                const labelVal = parseInt(labelInput?.value || 0);
                
                label.style.opacity = labelVal <= currentRating ? '1' : '0.3'; 
            });
        });
    });

    // 2. Валидация и отправка формы
    const submitBtn = document.getElementById('feedback-submit-btn');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Останавливаем стандартную перезагрузку страницы

        const nameInput = document.getElementById('fb-name');
        const contactInput = document.getElementById('fb-contact');
        const textInput = document.getElementById('fb-text');
        
        const name = nameInput?.value.trim() || '';
        const contact = contactInput?.value.trim() || '';
        const text = textInput?.value.trim() || '';

        let isValid = true;

        // Сбрасываем старые ошибки перед новой проверкой
        nameInput?.classList.remove('input--error');
        contactInput?.classList.remove('input--error');
        textInput?.classList.remove('input--error');
        if (starsContainer) starsContainer.classList.remove('input--error');

        // Проверка 1: Имя (обязательное, минимум 2 символа)
        if (name.length < 2) {
            nameInput?.classList.add('input--error');
            isValid = false;
        }

        // Проверка 2: Рейтинг (обязательный, минимум 1 звезда)
        if (currentRating === 0) {
            if (starsContainer) starsContainer.classList.add('input--error');
            isValid = false;
        }

        // Проверка 3: Отзыв (обязательный, минимум 10 символов)
        if (text.length < 10) {
            textInput?.classList.add('input--error');
            isValid = false;
        }

        // Проверка 4: Контакты (необязательное, но если ввели — проверяем формат)
        if (contact.length > 0) {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
            const isTelegram = /^@?[a-zA-Z0-9_]{5,}$/.test(contact);
            const isPhone = /^[\d\+\-\(\)\s]{10,20}$/.test(contact);

            if (!isEmail && !isTelegram && !isPhone) {
                contactInput?.classList.add('input--error');
                isValid = false;
            }
        }

        // Если форма не прошла проверку — показываем ошибку и останавливаем функцию
        if (!isValid) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Проверьте поля';
            submitBtn.style.backgroundColor = '#8b3a0a'; 
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
            }, 2000);
            return; 
        }

        // 3. Успешная отправка (имитация)
        submitBtn.textContent = '✓ Отзыв отправлен!';
        submitBtn.style.backgroundColor = '#2d5a2d';

        setTimeout(() => {
            // Закрываем модальное окно
            const modal = document.getElementById('modal-feedback');
            if (modal) {
                modal.classList.remove('modal--open');
                modal.setAttribute('aria-hidden', 'true');
            }
            document.body.classList.remove('menu-open');
            
            // Очищаем текстовые поля
            if (nameInput) nameInput.value = '';
            if (contactInput) contactInput.value = '';
            if (textInput) textInput.value = '';
            
            // Сбрасываем звезды в исходное состояние
            currentRating = 0;
            starInputs.forEach(input => input.checked = false);
            starLabels.forEach(label => label.style.opacity = '0.3');

            // Возвращаем кнопку в исходное состояние для следующих отзывов
            submitBtn.textContent = 'Отправить отзыв';
            submitBtn.style.backgroundColor = '';
        }, 1500);
    });
});