// script.js
const menuIcon = document.querySelector('.menu-icon');
const menu = document.getElementById('menu');

// Toggle the menu when the icon is clicked
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('show');
});
