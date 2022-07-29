// Functions
import { validateForms } from "../functions/validate-forms";

export const formValidation = () => {
  validateForms(
    ".form-request",
    [
      {
        ruleSelector: ".input__name",
        rules: [
          {
            rule: "required",
            errorMessage: "Name is required",
          },
        ],
      },
      {
        ruleSelector: ".input__mail",
        rules: [
          {
            rule: "email",
            errorMessage: "Email is not valid",
          },
          {
            rule: "required",
            errorMessage: "Email is required",
          },
        ],
      },
      // {
      //   ruleSelector: ".input__tell",
      //   rules: [
      //     {
      //       rule: "tel",
      //       errorMessage: "Phone is not valid",
      //     },
      //     {
      //       rule: "required",
      //       errorMessage: "Phone is required",
      //     },
      //   ],
      // },
    ],
    null,
    null,
    null,
    [
      {
        key: "Name is required",
        dict: {
          ru: "Введите имя",
        },
      },
      {
        key: "Email is not valid",
        dict: {
          ru: "Почта некорректна",
        },
      },
      {
        key: "Email is required",
        dict: {
          ru: "Введите почту",
        },
      },
    ],
    "ru"
  );
};
