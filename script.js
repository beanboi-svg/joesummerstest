document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#FFB45A", "#5AA8FF", "#FF5A5A"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".hero").style.backgroundColor = randomColor;

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");
    const nav = document.getElementById("nav");

    const toggleMenu = () => {
        menuButton.classList.toggle("open");
        navMenu.classList.toggle("open");
        nav.classList.toggle("menu-open");
    };

    menuButton.addEventListener("click", toggleMenu);

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
});
