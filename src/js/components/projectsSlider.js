export const projectsSlider = () => {
  let projectsSlider = new Swiper(".projects__slider", {
    spaceBetween: 15,
    slidesPerView: 1,
    navigation: {
      nextEl: ".projects__button-next",
      prevEl: ".projects__button-prev",
    },
    breakpoints: {
      1215: {
        spaceBetween: 25,
        slidesPerView: 2.6,
      },
      575: {
          spaceBetween: 20,
          slidesPerView: 2,
      }
    },
  });
}