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
                breakpoints: {
                    320: {
                        spaceBetween: 0,
                        slideToClickedSlide: true,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slideToClickedSlide: true,
                    }
                }
            })
        }
        if (slider.closest('.service-slider-0')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                navigation: {
                    nextEl: '.service-slider-0 .next',
                    prevEl: '.service-slider-0 .prev',
                },
                pagination: {
                    el: '.service-slider-0 .pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
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
        if (slider.closest('.service-slider-1')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                navigation: {
                    nextEl: '.service-slider-1 .next',
                    prevEl: '.service-slider-1 .prev',
                },
                pagination: {
                    el: '.service-slider-1 .pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
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
        if (slider.closest('.service-slider-2')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                navigation: {
                    nextEl: '.service-slider-2 .next',
                    prevEl: '.service-slider-2 .prev',
                },
                pagination: {
                    el: '.service-slider-2 .pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
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


