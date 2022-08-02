"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger, modals } from "./functions/";

//libs
import AOS from "aos";

// Components
import { formValidation, particles} from "./components/";
import { projectsSlider } from "./components/projectsSlider";


window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  projectsSlider();
  modals();
  particles();
  formValidation();
  AOS.init({
    once: true,
  });
});

