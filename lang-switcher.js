const langSwitcher = document.querySelector('.lang-switcher img');
let currentLang = localStorage.getItem('lang') || 'en';

// Загрузка JSON перевода
async function loadLanguage(lang) {
    const res = await fetch(`lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.textContent = data[key];
    });

    localStorage.setItem('lang', lang);
    updateFlag(lang);
}

// Обновление флага на кнопке
function updateFlag(lang) {
    langSwitcher.src = lang === 'ru' ? 'images/flag_ru.png' : 'images/flag_en.png';
    langSwitcher.alt = lang.toUpperCase();
}

// Переключение языка по клику
document.querySelector('.lang-switcher').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    loadLanguage(currentLang);
});

// Загрузка языка при старте страницы
loadLanguage(currentLang);
