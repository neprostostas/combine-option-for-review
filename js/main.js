document.addEventListener("DOMContentLoaded", (event) => {

    /* ======== Swiper ======== */
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        spaceBetween: 30,
        breakpoints: {
            10: {
                slidesPerView: 1.2,
            },
            1015: {
                slidesPerView: 3.2,
            },
        },
    });

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

    const mobileTableContents = document.querySelector('.table-contents.mobile');
    const navbarButton = document.querySelector('.navbar-table-button');

    navbarButton.addEventListener('click', (e) => {
        mobileTableContents.classList.toggle('active');
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!mobileTableContents.contains(e.target) && mobileTableContents.classList.contains('active')) {
            mobileTableContents.classList.remove('active');
        }
    });

    mobileTableContents.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    function updateScrollIndicator(sections, listItems, indicator) {
        let currentSectionIndex = sections.findIndex(section => section.getBoundingClientRect().top > window.innerHeight) - 1;

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

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        indicator.style.height = `${scrollPercent}%`;
    }

    const sectionsMobile = [...document.querySelectorAll('.table-content')];
    const listItemsMobile = [...document.querySelectorAll('.table-content-point-mobile')];
    const indicatorMobile = document.querySelector('.indicator.mobile');
    if (listItemsMobile.length > 0) listItemsMobile[0].classList.add('pass');

    const sectionsDesktop = [...document.querySelectorAll('.table-content')];
    const listItemsDesktop = [...document.querySelectorAll('.table-content-point')];
    const indicatorDesktop = document.querySelector('.indicator:not(.mobile)');
    if (listItemsDesktop.length > 0) listItemsDesktop[0].classList.add('pass');

    document.addEventListener('scroll', () => {
        updateScrollIndicator(sectionsMobile, listItemsMobile, indicatorMobile);
        updateScrollIndicator(sectionsDesktop, listItemsDesktop, indicatorDesktop);
    });


});
