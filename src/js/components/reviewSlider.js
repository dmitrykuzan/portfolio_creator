export const reviewSlider = () => {
  let reviewSlider = new Swiper(".testimonials__slider", {
    spaceBetween: 15,
    slidesPerView: 1,
    navigation: {
      nextEl: ".testimonials__button-next",
      prevEl: ".testimonials__button-prev",
    }
  });
}