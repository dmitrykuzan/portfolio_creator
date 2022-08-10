"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger, modals, accordion } from "./functions/";

//libs
import AOS from "aos";

// Components
import { formValidation, particles} from "./components/";
import { projectsSlider} from "./components/projectsSlider";
import { reviewSlider} from "./components/reviewSlider";


window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  projectsSlider();
  modals();
  particles();
  formValidation();
  reviewSlider();
  accordion(".faq__list", "faq__item-title", ".faq__item", "active");
  AOS.init({
    once: true,
  });
});

