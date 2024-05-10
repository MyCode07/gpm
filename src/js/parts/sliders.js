import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (slider.closest('.products-slider') && window.innerWidth <= 768) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
                spaceBetween: 7
            })
        }
        if (slider.closest('.service-tabs')) {
            const tab = slider.closest('.tab-content')
            let prev = tab.querySelector('.prev')
            let next = tab.querySelector('.next')
            let pagination = tab.querySelector('.pagination')

            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 43,
                    },

                }
            })
        }

        if (slider.closest('.product-tabs')) {
            const tab = slider.closest('.tab-content')
            let prev = tab.querySelector('.prev')
            let next = tab.querySelector('.next')

            new Swiper(slider, {
                modules: [Navigation],
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 43,
                    },
                }
            })
        }

        if (slider.closest('.works-slider') && window.innerWidth <= 768) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView:1,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
               
            })
        }
    })
}


