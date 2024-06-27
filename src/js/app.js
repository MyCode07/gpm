import { maskInputs } from "./static/inputmask.js";
import { accorden } from "./static/accordeon.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/filters.js";
import "./parts/sliders.js";
import "./parts/tabs.js";
import "./parts/more-click.js";
import "./static/accordeon.js";
import { playVideoAction } from "./parts/video.js";
import { stickyWhatsApp } from "./parts/header.js";

playVideoAction();
accorden();
maskInputs('+7 (999) 999-99-99', '._mask-phone')
stickyWhatsApp();

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});

// const inputItems = [...document.querySelectorAll('input ')].concat([...document.querySelectorAll('textarea ')])
// if (inputItems.length) {
//     inputItems.forEach(input => {
//         if (input.closest('.form__item')) {
//             input.addEventListener('input', () => {
//                 console.log(input.value);
//                 if (input.value != '') {
//                     input.classList.add('_active')
//                 }
//                 else {
//                     input.classList.remove('_active')
//                 }
//             })
//         }
//     })
// }


document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})