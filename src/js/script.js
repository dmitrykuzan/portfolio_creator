"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
});
