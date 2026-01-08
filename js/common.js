document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('show');
        });
    }

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
