var swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var swiper = new Swiper(".logo-swiper-wrap", {
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
});
