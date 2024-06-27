import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.hasAttribute('data-open-popup')) {
        e.preventDefault();
        const id = targetEl.getAttribute('data-id');
        const popup = document.querySelector(`.popup#${id}`);

        if (popup) {
            popup.classList.add('_open')
            lockPadding();
            document.body.classList.add('_noscroll');
        }
    }

    if (targetEl.classList.contains('popup')) {
        closePopup(targetEl)
        document.body.classList.remove('_noscroll');

    }

    if (targetEl.classList.contains('popup__close') || targetEl.hasAttribute('data-close-popup')) {
        const popup = targetEl.closest('.popup');
        closePopup(popup)
        document.body.classList.remove('_noscroll');
    }
})


function closePopup(popup) {
    popup.classList.remove('_open')
    unLockPadding();
    document.body.classList.remove('_noscroll');
}