document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper.main-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        scrollbar:{
            el:'.swiper-scrollbar.main-swiper-scrollbar'
        }
    });
});
