"use strict";

// Mobile Dropdown Menu

function mobileDropdownMenu() {
    let sbdropdown = document.querySelectorAll('.vorix-dd').length;

    if (sbdropdown > 0) {
        let navUrl = document.querySelectorAll('.navbar-nav li ul');
        let navUrlLen = navUrl.length;

        for (let i = 0; i < navUrlLen; i++) {
            navUrl[i].insertAdjacentHTML('beforebegin', '<div class="dropdown-toggler"><i class="bi bi-caret-down-fill"></i></div>');
        }

        let ddtroggler = document.querySelectorAll('.dropdown-toggler');
        let ddtrogglerlen = ddtroggler.length;

        for (let i = 0; i < ddtrogglerlen; i++) {
            ddtroggler[i].addEventListener('click', function () {
                let ddNext = ddtroggler[i].nextElementSibling;
                slideToggle(ddNext, 300);
            });
        }
    }
}

window.addEventListener('load', mobileDropdownMenu);

// Sticky Header

let navarToggler = document.querySelector('.navbar-toggler');
let header = document.querySelector('.header-area');

if (navarToggler) {
    navarToggler.addEventListener('click', function () {
        header.classList.toggle('mobile-menu-open');
    });
}

if (header) {
    function stickyNavigation() {
        if (window.pageYOffset > 10) {
            header.classList.add('sticky-on');
        } else {
            header.classList.remove('sticky-on');
        }
    }

    window.addEventListener('load', stickyNavigation);
    window.addEventListener('scroll', stickyNavigation);
}

// Anchor Prevent Default

let anchor = document.querySelectorAll('a[href="#"]');

if (anchor.length > 0) {
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
}

// Search Form

const searchButton = document.getElementById('searchButton');
const searchClose = document.getElementById('searchClose');
const searchFormPopup = document.querySelector('.search-form-popup');
const searchOverlay = document.getElementById('searchOverlay');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchFormPopup.classList.add('open');
        searchOverlay.classList.add('open');
    });
    searchClose.addEventListener('click', () => {
        searchFormPopup.classList.remove('open');
        searchOverlay.classList.remove('open');
    });
}

// Service Slide
const serviceSwiper = document.querySelector('.service-swiper')

if (serviceSwiper) {
    new Swiper('.service-swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.service-button-next',
            prevEl: '.service-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}

// Service Slide

const serviceSwiperTwo = document.querySelector('.service-two-swiper');

if (serviceSwiperTwo) {
    new Swiper('.service-two-swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination-2",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

// Portfolio Swiper

const portfolioSwiper = document.querySelector('.portfolio-swiper');

if (portfolioSwiper) {
    new Swiper('.portfolio-swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 60,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.portfolio-button-next',
            prevEl: '.portfolio-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
    });
}

// Testimonial Slide

const testimonialSwiper = document.querySelector('.testimonial-swiper');

if (testimonialSwiper) {
    new Swiper('.testimonial-swiper', {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// Service Card

const cards = document.querySelectorAll('.service-slide-card');

if (cards.length > 0) {
    cards.forEach((card) => {
        const heading = card.querySelector('h2');
        const paragraph = card.querySelector('p');
        paragraph.style.bottom = `-${paragraph.offsetHeight + 200}px`;

        card.addEventListener('mouseenter', () => {
            const paragraphHeight = paragraph.offsetHeight;
            heading.style.bottom = `${paragraphHeight + 50}px`;
            paragraph.style.bottom = '45px';

            cards.forEach((c) => c.classList.remove('active'));
            card.classList.add('active');
        });

        card.addEventListener('mouseleave', () => {
            heading.style.bottom = '38px';
            paragraph.style.bottom = `-${paragraph.offsetHeight + 200}px`;
        });
    });
}

// Catagory Slide

const catagorySlide = document.getElementById('catagorySlide');

if (catagorySlide) {
    Marquee3k.init();
}

// Counter Up

let counterlen = document.querySelectorAll(".counter").length;

if (counterlen > 0) {
    let counterUp = window.counterUp.default;

    let callback = entries => {
        entries.forEach(entry => {
            let counterElement = entry.target
            if (entry.isIntersecting && !counterElement.classList.contains('is-visible')) {
                counterUp(counterElement, {
                    duration: 2000,
                    delay: 20
                });
                counterElement.classList.add('is-visible');
            }
        });
    }

    let IO = new IntersectionObserver(callback, {
        threshold: 1
    });

    let counterUpClass = document.querySelectorAll('.counter');
    let counterUpClasslen = counterUpClass.length;

    for (let i = 0; i < counterUpClasslen; i++) {
        IO.observe(counterUpClass[i]);
    }
}

// Password Visibility

let cratePassword = document.getElementById('cratePassword');
let passwordButton = document.querySelector('.create-password-label');

if (cratePassword) {
    function passwordHideShow() {
        if (cratePassword.type === 'password') {
            cratePassword.type = 'text';
            passwordButton.innerHTML = 'visibility_off';
        } else {
            cratePassword.type = 'password';
            passwordButton.innerHTML = 'visibility';
        }
    }
    passwordButton.addEventListener('click', passwordHideShow);
}

// Scroll to Top

let scrollButton = document.getElementById('scrollTopButton');
let topdistance = 600;

if (scrollButton) {
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
            scrollButton.classList.add('scrolltop-show');
            scrollButton.classList.remove('scrolltop-hide');
        } else {
            scrollButton.classList.add('scrolltop-hide');
            scrollButton.classList.remove('scrolltop-show');
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

// Video Popup

const videoPopup = document.getElementById("videoPopup");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.getElementById("videoCloseButton");

if (videoPopup) {
    document.querySelectorAll(".video-btn").forEach(button => {
        button.addEventListener("click", function () {
            let videoUrl = this.getAttribute("data-video");
            if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
                videoUrl += "?autoplay=1";
            } else if (videoUrl.includes("vimeo.com")) {
                videoUrl += "?autoplay=1";
            }
            videoFrame.src = videoUrl;
            videoPopup.style.display = "flex";
        });
    });

    closeBtn.onclick = function () {
        videoPopup.style.display = "none";
        videoFrame.src = "";
    }

    window.onclick = function (event) {
        if (event.target == videoPopup) {
            videoPopup.style.display = "none";
            videoFrame.src = "";
        }
    }
}

// Isotope

let grid = document.querySelector('.vorix-filter');

if (grid) {
    imagesLoaded(grid, function () {
        let iso = new Isotope(grid, {
            itemSelector: '.filter-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.filter-item'
            }
        });

        let filtersElem = document.querySelector('.vorix-filter-nav');

        if (filtersElem) {
            filtersElem.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                let filterValue = event.target.getAttribute('data-filter');
                iso.arrange({
                    filter: filterValue
                });
            });
        }

        let buttonGroups = document.querySelectorAll('.vorix-filter-nav');
        let buttonGroupslen = buttonGroups.length;

        for (let i = 0; i < buttonGroupslen; i++) {
            let buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                buttonGroup.querySelector('.active').classList.remove('active');
                event.target.classList.add('active');
            });
        }
    });
}

// Tooltip Activation

let vorixTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = vorixTooltip.map(function (sbTooltip) {
    return new bootstrap.Tooltip(sbTooltip);
});

// Toast Activation

let vorixToast = [].slice.call(document.querySelectorAll('.toast'));
let toastList = vorixToast.map(function (sbToast) {
    return new bootstrap.Toast(sbToast);
});
toastList.forEach(toast => toast.show());

// Popover Activation

let vorixPopover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = vorixPopover.map(function (sbPopover) {
    return new bootstrap.Popover(sbPopover);
});

// Copyright Year

const year = document.getElementById("year");
if (year) {
    const currentYear = new Date().getFullYear();
    year.textContent = currentYear;
}

// Dark/Light Toggle

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    function applyTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);

        if (theme === 'dark-mode') {
            themeToggleBtn.classList.remove('light-mode-active');
        } else {
            themeToggleBtn.classList.add('light-mode-active');
        }
    }

    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark-mode';
        applyTheme(savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.className;
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
    });

    initializeTheme();
}

// WOW JS
const wowjs = document.querySelectorAll('.wow').length;

if(wowjs > 0) {
    new WOW().init();
}

// Preloader

let preloader = document.getElementById('preloader');

if (preloader) {
    window.addEventListener('load', function () {
        let fadeOut = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                preloader.remove();
            }
        }, 100);
    });
}