import Swiper, { Navigation } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    prevEl: '.button-prev',
    nextEl: '.button-next',
  },
  spaceBetween: 32,
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

swiper.init()
