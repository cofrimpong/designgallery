/* Mobile menu toggle */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

/* Dark mode toggle */
const modeBtn = document.querySelector("#mode-toggle");

if (modeBtn) {
    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}