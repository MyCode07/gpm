import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header nav');
const allMenuLinks = document.querySelectorAll('nav ul li a');

if (burger) {
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }

        if (searchPopup.classList.contains('_open')) {
            searchPopup.classList.remove('_open')
        }
    })
}


if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
                unLockPadding();
            }
        })
    })
}


// menu arrow buttom
const arrow = `<button><svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
<path d="M4 3.95354L7.11125 0.771484L8 1.68046L4 5.77148L1.19188e-07 1.68046L0.889379 0.771485L4 3.95354Z" fill="white"/>
</svg>
</button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            if (!item.closest('.catalog-menu')) {
                item.removeAttribute('data-open')
            }
            else {
                if (isMobile.any()) {
                    item.removeAttribute('data-open')
                }
            }
        }
    }

}


