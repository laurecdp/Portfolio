import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// External imports
import "bootstrap";

// Internal imports
import { toggleButtons } from '../components/toggle_buttons';
import { initFlatpickr } from "../plugins/flatpickr";
import { clock } from "../components/clock";
import { loadingPage} from "../components/loading_page";

document.addEventListener('turbolinks:before-cache', () => {
  if (document.querySelector('.container-cards')) {
    document.querySelector('.container-cards').outerHTML = '';
  }
})

/* document.addEventListener('turbolinks:before-cache', () => {
  if (document.querySelector('.flatpickr-calendar')) {
    document.querySelector('.flatpickr-calendar').outerHTML = '';
  }
}) */

document.addEventListener('turbolinks:load', () => {
  clock();
  toggleButtons();
  initFlatpickr();
  loadingPage();
});
