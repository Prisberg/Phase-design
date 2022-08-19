window.onload = function () {
    form();
    swiperInit();
}

function swiperInit() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

function form() {
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener('submit', handleForm);
}

function handleForm(event) { event.preventDefault(); }