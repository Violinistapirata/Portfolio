const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const navList = document.querySelectorAll("#nav-menu li");

menuButton.addEventListener("click", () => {
    navMenu.classList.replace("hidden", "flex");
    navMenu.classList.add("animate-slide-in");
});

navList.forEach((liElement) => {
    liElement.addEventListener("click", () => {    
        navMenu.classList.replace("animate-slide-in", "animate-slide-out");
    });
});

navMenu.addEventListener("animationend", (event) => {
    if (event.animationName !== "slide-out") return;
    navMenu.classList.replace("flex", "hidden");
    navMenu.classList.remove("animate-slide-out");
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) navMenu.classList.remove("animate-slide-in", "animate-slide-out")
})