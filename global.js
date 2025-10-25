const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');

mobileNavToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    mobileNavToggle.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
