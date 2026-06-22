/* JS: Валидация формы заявки (#contact) */

document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('contact-submit-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {

        const nameInput    = document.getElementById('f-name');
        const contactInput = document.getElementById('f-contact');
        const goalInput    = document.getElementById('f-goal');

        const name    = nameInput?.value.trim()    || '';
        const contact = contactInput?.value.trim() || '';
        const goal    = goalInput?.value.trim()    || '';

        let isValid = true;

        // Сбросить ошибки
        [nameInput, contactInput, goalInput].forEach(el => {
            el?.classList.remove('input--error');
        });

        // Имя — минимум 2 символа
        if (name.length < 2) {
            nameInput?.classList.add('input--error');
            isValid = false;
        }

        // Контакт — обязательно + формат
        if (!contact) {
            contactInput?.classList.add('input--error');
            isValid = false;
        } else {
            const isEmail    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
            const isTelegram = /^@?[a-zA-Z0-9_]{4,}$/.test(contact);
            const isPhone    = /^[\d\+\-\(\)\s]{7,20}$/.test(contact);
            if (!isEmail && !isTelegram && !isPhone) {
                contactInput?.classList.add('input--error');
                isValid = false;
            }
        }

        // Цель — минимум 5 символов
        if (goal.length < 5) {
            goalInput?.classList.add('input--error');
            isValid = false;
        }

        if (!isValid) {
            const orig = btn.textContent;
            btn.textContent = 'Проверьте поля';
            btn.style.backgroundColor = 'var(--color-error, #8b3a0a)';
            setTimeout(() => {
                btn.textContent = orig;
                btn.style.backgroundColor = '';
            }, 2000);
            return;
        }

        // Успех
        btn.textContent = '✓ Заявка отправлена!';
        btn.style.backgroundColor = 'var(--color-success, #2d5a2d)';

        setTimeout(() => {
            ['f-name', 'f-role', 'f-company', 'f-contact', 'f-goal'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            btn.textContent = 'Отправить';
            btn.style.backgroundColor = '';
        }, 3000);
    });
});
