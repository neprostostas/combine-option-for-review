document.addEventListener("DOMContentLoaded", (event) => {

    const stars = document.querySelectorAll(".star-img");

    const toggleHighlight = (index) => {
        stars.forEach((star, i) => star.classList.toggle("hovered", i <= index));
    };

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => toggleHighlight(index));
        star.addEventListener("mouseout", () => toggleHighlight(-1));
    });

});
