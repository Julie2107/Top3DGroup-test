const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 1.9,
    },
  },
});
