/* eslint-disable */
const navMenu = document.querySelector('.nav-menu-about');
const hamMenu = document.querySelector('.imageone-about');
const cross = document.getElementById('cross');
const mobileMenu = document.querySelector('.mobile-menu');

hamMenu.addEventListener('click', show);
cross.addEventListener('click', hide);

function show() {
    // mobileMenu.style.display = 'flex';
    mobileMenu.style.width = '100vw';
    navMenu.style.display = 'none';
    cross.style.cursor = 'pointer';
}

function hide() {
    // mobileMenu.style.display = 'none';
    mobileMenu.style.width = '0vw';
    navMenu.style.display = 'block';
}