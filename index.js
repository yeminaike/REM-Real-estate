document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});




const searchInput = document.querySelector(".searching");
const houseContainer = document.getElementById("houseContainer");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();

    cards.forEach((card) => {
        const location = card.querySelector(".location").textContent.toLowerCase();
        if (location.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

