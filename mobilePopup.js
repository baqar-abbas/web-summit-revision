/*eslint-disable*/

const navMenu = document.querySelector(".nav-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cross = document.querySelector("#cross");
const hamburger = document.querySelector(".imageone");

hamburger.addEventListener("click", (event) => {
    mobileMenu.style.display = "flex";
    navMenu.style.display = "none";
    event.preventDefault();
})

const menuClose = () => {
    navMenu.style.display = "block";
    mobileMenu.style.display = "none";
}

cross.addEventListener("click", menuClose);
mobileMenu.addEventListener("click", menuClose);