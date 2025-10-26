const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        mobileNavToggle.classList.toggle('active');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const langSwitcher = document.querySelector('.lang-switcher');
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        'site.title': 'CubeNet',
        'nav.home': 'Home',
        'nav.status': 'Server status',
        'nav.support': 'Support',
        'nav.news': 'News',
        'nav.personal_area': 'Personal area',
        'hero.title': 'Reliable hosting without limits',
        'hero.subtitle': 'Hosting that grows with you',
        'hero.cta': 'Go to services',
        'features.title': 'Why we?',
        'features.easy_management': 'Easy Management',
        'features.easy_management_desc': 'With our user-friendly control panel, you can install mods, plugins, and manage your server effortlessly in just a few clicks.',
        'features.fast_servers': 'Fast Servers',
        'features.fast_servers_desc': 'We use the most modern high-frequency processors that guarantee maximum performance for your server.',
        'features.ddos_protection': 'Advanced DDoS Protection',
        'features.ddos_protection_desc': 'We provide enterprise-grade protection against attacks, keeping your Minecraft worlds safe and online 24/7.',
        'features.support': '24/7 Support',
        'features.support_desc': 'Our team is always ready to help, whether it\'s configuring plugins, troubleshooting issues, or optimizing your server.',
        'features.pricing': 'Affordable Pricing',
        'features.pricing_desc': 'Premium performance at fair prices — the perfect balance between quality and cost.',
        'features.ping': 'Minimal Ping',
        'features.ping_desc': 'Our nodes are located in Germany, which contributes to low ping and latency during gameplay.',
        'services.title': 'Supported services',
        'services.subtitle': 'In the future, we plan to expand this list',
        'services.nodejs.discord': 'Discord bot',
        'services.nodejs.telegram': 'Telegram bot',
        'services.minecraft.vanilla': 'Vanilla',
        'services.minecraft.spigot': 'Spigot',
        'services.minecraft.sponge': 'Sponge',
        'services.minecraft.forge': 'Forge',
        'services.python.discord': 'Discord bot',
        'services.python.telegram': 'Telegram bot',
        'pricing.title': 'Our services',
        'pricing.germany': 'Germany',
        'pricing.soon': 'Soon',
        'pricing.free': 'Free',
        'pricing.cpu': '0% cpu',
        'pricing.ram': '0mb ram',
        'pricing.ssd': '0gb ssd',
        'pricing.buy': 'Buy',
        'footer.disclaimer': 'We are not affiliated with Minecraft®, Mojang Studios® or Microsoft® in any way.',
        'footer.documents': 'Documents',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.contacts': 'Contacts',
        'footer.telegram': 'We are on telegram',
        'footer.discord': 'We are on discord'
    },
    ru: {
        'site.title': 'CubeNet',
        'nav.home': 'Главная',
        'nav.status': 'Статус серверов',
        'nav.support': 'Поддержка',
        'nav.news': 'Новости',
        'nav.personal_area': 'Личный кабинет',
        'hero.title': 'Надежный хостинг без ограничений',
        'hero.subtitle': 'Хостинг, который растет вместе с вами',
        'hero.cta': 'Перейти к услугам',
        'features.title': 'Почему мы?',
        'features.easy_management': 'Простое управление',
        'features.easy_management_desc': 'С нашей удобной панелью управления вы можете устанавливать моды, плагины и управлять сервером легко в несколько кликов.',
        'features.fast_servers': 'Быстрые серверы',
        'features.fast_servers_desc': 'Мы используем самые современные высокочастотные процессоры, которые гарантируют максимальную производительность для вашего сервера.',
        'features.ddos_protection': 'Продвинутая защита от DDoS',
        'features.ddos_protection_desc': 'Мы обеспечиваем защиту корпоративного уровня от атак, сохраняя ваши миры Minecraft в безопасности и онлайн 24/7.',
        'features.support': 'Поддержка 24/7',
        'features.support_desc': 'Наша команда всегда готова помочь, будь то настройка плагинов, решение проблем или оптимизация вашего сервера.',
        'features.pricing': 'Доступные цены',
        'features.pricing_desc': 'Премиальная производительность по справедливым ценам — идеальный баланс между качеством и стоимостью.',
        'features.ping': 'Минимальный пинг',
        'features.ping_desc': 'Наши узлы расположены в Германии, что способствует низкому пингу и задержкам во время игры.',
        'services.title': 'Поддерживаемые сервисы',
        'services.subtitle': 'В будущем мы планируем расширить этот список',
        'services.nodejs.discord': 'Discord бот',
        'services.nodejs.telegram': 'Telegram бот',
        'services.minecraft.vanilla': 'Vanilla',
        'services.minecraft.spigot': 'Spigot',
        'services.minecraft.sponge': 'Sponge',
        'services.minecraft.forge': 'Forge',
        'services.python.discord': 'Discord бот',
        'services.python.telegram': 'Telegram бот',
        'pricing.title': 'Наши услуги',
        'pricing.germany': 'Германия',
        'pricing.soon': 'Скоро',
        'pricing.free': 'Бесплатно',
        'pricing.cpu': '0% процессор',
        'pricing.ram': '0мб оперативной',
        'pricing.ssd': '0гб ssd',
        'pricing.buy': 'Купить',
        'footer.disclaimer': 'Мы никак не связаны с Minecraft®, Mojang Studios® или Microsoft®.',
        'footer.documents': 'Документы',
        'footer.privacy': 'Политика конфиденциальности',
        'footer.terms': 'Условия обслуживания',
        'footer.contacts': 'Контакты',
        'footer.telegram': 'Мы в телеграме',
        'footer.discord': 'Мы в дискорде'
    }
};

function loadLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.title = data['site.title'] || 'CubeNet';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.textContent = data[key];
        }
    });

    localStorage.setItem('lang', lang);
    currentLang = lang;
    updateFlag(lang);
}

function updateFlag(lang) {
    const flagImg = langSwitcher.querySelector('img');
    if (flagImg) {
        flagImg.src = lang === 'ru' ? 'images/flag_ru.png' : 'images/flag_en.png';
        flagImg.alt = lang.toUpperCase();
    }
}

if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ru' : 'en';
        loadLanguage(newLang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLang);
});

document.addEventListener('DOMContentLoaded', function() {
    const pricingData = [
        {
            name: "Free",
            prices: { rub: 3, eur: 5 },
            specs: { cpu: "0%", ram: "0MB", ssd: "0GB" }
        },
        {
            name: "Free", 
            prices: { rub: 0, eur: 0 },
            specs: { cpu: "0%", ram: "0MB", ssd: "0GB" }
        },
        {
            name: "Free",
            prices: { rub: 0, eur: 0 },
            specs: { cpu: "0%", ram: "0MB", ssd: "0GB" }
        },
        {
            name: "Free",
            prices: { rub: 0, eur: 0 },
            specs: { cpu: "0%", ram: "0MB", ssd: "0GB" }
        },
        {
            name: "Free",
            prices: { rub: 0, eur: 0 },
            specs: { cpu: "0%", ram: "0MB", ssd: "0GB" }
        },
        {
            name: "Free",
            prices: { rub: 0, eur: 0 },
            specs: { cpu: "0%", ram: "0MB", ssd: "0GB" }
        }
    ];

    let currentCurrency = 'eur';

    function updateAllPrices() {
        const pricingCards = document.querySelectorAll('.pricing-card');
        
        pricingCards.forEach((card, index) => {
            if (pricingData[index]) {
                const planData = pricingData[index];
                const price = planData.prices[currentCurrency];
                
                const priceContainer = card.querySelector('.plan-price');
                const priceElement = priceContainer.querySelector('span:last-child');
                
                if (priceElement) {
                    priceElement.textContent = price;
                }
                
                let symbolElement = priceContainer.querySelector('.currency-symbol');
                
                if (!symbolElement) {
                    symbolElement = document.createElement('span');
                    symbolElement.className = 'currency-symbol';
                    symbolElement.style.marginRight = '5px';
                    symbolElement.style.fontSize = '34px';
                    symbolElement.style.fontWeight = '600';
                    symbolElement.style.fontFamily = 'Montserrat, sans-serif';
                    
                    const priceSpan = priceContainer.querySelector('span:last-child');
                    priceContainer.insertBefore(symbolElement, priceSpan);
                    
                    const originalImg = priceContainer.querySelector('img');
                    if (originalImg) {
                        originalImg.style.display = 'none';
                    }
                }
                
                symbolElement.textContent = currentCurrency === 'eur' ? '€' : '₽';
            }
        });
    }

    function setupCurrencySwitcher() {
        const currencyButtons = document.querySelectorAll('.btn-currency');
        
        currencyButtons.forEach(button => {
            button.addEventListener('click', function() {
                currencyButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const currencyText = this.textContent.trim();
                if (currencyText === '₽') {
                    currentCurrency = 'rub';
                } else if (currencyText === '€') {
                    currentCurrency = 'eur';
                }
                
                updateAllPrices();
            });
        });
    }

    function setupLocationSwitcher() {
        const locationButtons = document.querySelectorAll('.btn-location');
        locationButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (!this.classList.contains('active') && this.textContent.includes('Germany')) {
                    locationButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    }

    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
        updateAllPrices();
        setupCurrencySwitcher();
        setupLocationSwitcher();
    }
});