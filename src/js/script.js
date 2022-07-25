"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger } from "./functions/";

//libs
import AOS from "aos";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  AOS.init({
    once: true,
  });
});

