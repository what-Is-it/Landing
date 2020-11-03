const slider = document.querySelector('.examples__pages');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
      704: {
          slidesPerView:2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
      },
      1025: {
          slidesPerView:3,
          spaceBetween: 27,
          navigation: {
            nextEl: '.arrow2',
            prevEl: '.arrow',
          },
      }
  }
})