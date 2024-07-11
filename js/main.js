document.addEventListener("DOMContentLoaded", (event) => {

    /* ======== stars hovering ======== */
    const stars = document.querySelectorAll(".star-img");

    const toggleHighlight = (index) => {
        stars.forEach((star, i) => star.classList.toggle("hovered", i <= index));
    };

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => toggleHighlight(index));
        star.addEventListener("mouseout", () => toggleHighlight(-1));
    });

    /* ======== scrolling table-content ======== */
    const sections = [...document.querySelectorAll('.table-content')];
    const listItems = [...document.querySelectorAll('.table-content-point')];
    // Завжди додаємо клас .pass до першого пункту
    listItems[0].classList.add('pass');


    document.addEventListener('scroll', () => {

        // Знайти поточний індекс секції
        let currentSectionIndex = sections.findIndex(section => section.getBoundingClientRect().top > window.innerHeight) - 1;

        // Якщо вікно прокручено до кінця сторінки або останній елемент видно, встановити currentSectionIndex на останній елемент
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight ||
            sections[sections.length - 1].getBoundingClientRect().top <= window.innerHeight) {
            currentSectionIndex = sections.length - 1;
        }

        listItems.forEach((item, index) => {
            if (index <= currentSectionIndex) {
                item.classList.add('pass');
            } else {
                item.classList.remove('pass');
            }
        });
    });






});
