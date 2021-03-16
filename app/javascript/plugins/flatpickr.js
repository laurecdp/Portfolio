import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js"

const initFlatpickr = () => {

  const chevron = document.querySelector(".fa-sort-up");
  const calendar = document.querySelector(".calendar");

  chevron.addEventListener("click", (event) => {
    calendar.classList.toggle("calendar")
    /* flatpickr(".calendar", {
      inline: true,
      altFormat: "d F Y  -  H:i",
      ariaDateFormat: "d F Y  -  H:i",
      enableTime: true,
      defaultDate: "today",
      dateFormat: "d-m-Y H:i",
      "locale": French
    }) */
  })
}

export { initFlatpickr };