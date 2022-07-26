"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger, modals } from "./functions/";

//libs
import AOS from "aos";

// Components
import { formValidation } from "./components/";
import { particles } from "./components";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  modals();
  particles();
  formValidation();
  AOS.init({
    once: true,
  });
});

if (window.innerWidth >= 1200) {
  document.addEventListener("aos:in:line-desktop", ({ detail }) => {
    const path = detail.querySelector(".path");
    const circle = detail.querySelector(".circle");
    const first = document.querySelector(".statistics__item--first");
    const second = document.querySelector(".statistics__item--two");
    const third = document.querySelector(".statistics__item--three");

    if (path) {
      path.style.animationPlayState = "running";
      const circleDelay = circle?.getAttribute("data-aos-delay");

      setTimeout(() => {
        circle.style.opacity = "1";
      }, circleDelay);
    }

    if (first) {
      const firstDelay = first?.getAttribute("data-aos-delay");

      setTimeout(() => {
        first.style.opacity = "1";
        first.style.transform = "translateY(0)";
      }, firstDelay);
    }

    if (second) {
      const secondDelay = second?.getAttribute("data-aos-delay");

      setTimeout(() => {
        second.style.opacity = "1";
        second.style.transform = "translateY(0)";
      }, secondDelay);
    }

    if (third) {
      const thirdDelay = third?.getAttribute("data-aos-delay");
      setTimeout(() => {
        third.style.opacity = "1";
        third.style.transform = "translateY(0)";
      }, thirdDelay);
    }
  });
} else {
  document.addEventListener("aos:in:line-mobile", ({ detail }) => {
    const path = detail.querySelector(".path");
    const circle = detail.querySelector(".circle");
    const first = document.querySelector(".statistics__item--first");
    const second = document.querySelector(".statistics__item--two");
    const third = document.querySelector(".statistics__item--three");

    if (path) {
      path.style.animationPlayState = "running";
      const circleDelay = circle?.getAttribute("data-aos-delay");

      setTimeout(() => {
        circle.style.opacity = "1";
      }, circleDelay);
    }

    if (first) {
      const firstDelay = first?.getAttribute("data-aos-delay");

      setTimeout(() => {
        first.style.opacity = "1";
        first.style.transform = "translateY(0)";
      }, firstDelay);
    }

    if (second) {
      const secondDelay = second?.getAttribute("data-aos-delay");

      setTimeout(() => {
        second.style.opacity = "1";
        second.style.transform = "translateY(0)";
      }, secondDelay);
    }

    if (third) {
      const thirdDelay = third?.getAttribute("data-aos-delay");
      setTimeout(() => {
        third.style.opacity = "1";
        third.style.transform = "translateY(0)";
      }, thirdDelay);
    }
  });
}

document.addEventListener("aos:in:screens", ({ detail }) => {
  const lottieParent = document.querySelector(".hero__lottie");

  if (lottieParent) {
    const lottie = lottieParent.querySelector("lottie-player");

    lottieParent.style.opacity = "1";

    if (lottie) {
      lottie.play();
    }
  }
});

