document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper.products-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        scrollbar:{
            el:'.swiper-scrollbar.products-swiper-scrollbar'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });
});
