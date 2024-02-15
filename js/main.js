/* slider */

var swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 70,
    centeredSlides: true,
    fade: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
