"use strict"

const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

searchInput.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const user = document.querySelector("#user"),
    user2 = document.querySelector("#user2"),
    options = document.querySelector("#options"),
    option = document.querySelector("#option");

user.addEventListener("click", show);
user2.addEventListener("click", show);

function show() {
    if (options.style.display == 'none') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// let observer1 = new IntersectionObserver((e)=>{
//     e.forEach((box)=>{
//         if (box.isIntersecting){
//             box.target.style.opacity = 1;
//             box.target.style.transform = translateY('0');
//         } else {
//             box.target.style.opacity = 0;
//         }
//     })
// })

// let first = document.querySelector('.parallax-item .first')
// observer1.observe(first)

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-item .first", {
    scrollTrigger: {
        trigger: ".parallax-item .first",
        // markers: true,
        start: "top bottom",
        end: "bottom 80%",
        scrub: true,
},
    opacity: 1, y: 0, duration: 0.2
});

gsap.to(".txt2", {
    scrollTrigger: {
      trigger: ".txt2",
      // markers: true,
      start: "-50% bottom",
      end: "-30% 90%",
      scrub: true,
},
    opacity: 1, y: 0
});

gsap.from(".txt3", {
    scrollTrigger: {
      trigger: ".content3",
    //   markers: true,
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: true,
},
    opacity: 1, y: 40, fontSize: '100px'
});

gsap.from(".txt4", {
    scrollTrigger: {
      trigger: ".content4",
    //   markers: true,
      start: "60% bottom",
      end: "80% 80%",
      scrub: true,
},
    opacity: 0, y: 20
});

gsap.from(".txt5", {
    scrollTrigger: {
      trigger: ".content4",
    //   markers: true,
      start: "center bottom",
      end: "70% 80%",
      scrub: true,
},
    opacity: 0, y: 20
});

gsap.from(".txt6", {
    scrollTrigger: {
      trigger: ".content4",
    //   markers: true,
      start: "center bottom",
      end: "70% 80%",
      scrub: true,
},
    opacity: 0, y: 20
});

gsap.from(".txt7", {
    scrollTrigger: {
      trigger: ".txt7",
    //   markers: true,
      start: "center bottom",
      end: "70% 80%",
      scrub: true,
},
    opacity: 0, y: 20
});

gsap.from(".txt8", {
  scrollTrigger: {
    trigger: ".txt8",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: -20
});

gsap.to(".sec3", {
    scrollTrigger: {
      trigger: ".sec3",
    //   markers: true,
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
},
    background: 'rgb(0,0,0)'
});

gsap.from(".img--2", {
    scrollTrigger: {
      trigger: ".img--2",
      // markers: true,
      start: "-50% bottom",
      end: "-30% 80%",
      scrub: true,
},
    opacity: 0, y: -20
});

// gsap.from(".img--3", {
//     scrollTrigger: {
//       trigger: ".img--3",
//     //   markers: true,
//       start: "bottom bottom",
//       end: "bottom 80%",
//       scrub: true,
// },
//     opacity: 0, y: -20
// });

gsap.from(".img--4", {
  scrollTrigger: {
    trigger: ".img--4",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: -20
});


gsap.from(".img--7", {
    scrollTrigger: {
      trigger: ".img--7",
    //   markers: true,
      start: "center bottom",
      end: "60% bottom",
      scrub: true,
},
    opacity: 0, y: 20
});

gsap.from(".img--8", {
    scrollTrigger: {
      trigger: ".img--8",
    //   markers: true,
      start: "center bottom",
      end: "70% 80%",
      scrub: true,
},
    opacity: 0, y: 20
});

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  }
});