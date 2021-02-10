import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const videoSlider = document.querySelector('.swiper-container');

let videoSwiper = new Swiper(videoSlider, {
  direction: 'horizontal',
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
