// Functionality to control the overflow property of the body tag
// when the offcanvas button is clicked, hiding the scrollbar,
// and restoring it when the close button is clicked.

let bodytag = document.querySelector('body');
let closeBtn = document.querySelector('.close-offcanvas');
let offcanvasBtn = document.querySelector('.open-offcanvas');
if (offcanvasBtn) {
  offcanvasBtn.addEventListener('click', () => {
    bodytag.style.overflow = "auto"
    if (bodytag.style.overflow = "auto") {
      bodytag.style.overflow = "hidden"
    }
  })
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bodytag.style.overflow = "auto"
    })
  }
}



// offcanvas 3 js code -------------------------------------
function showCanvas3() {
  var canvas3 = gsap.timeline();

  canvas3.to(".offcanvas-3__area", {
    left: 0,
    visibility: "visible",
    duration: 0.8,
    opacity: 1,
    rotationY: 0,
    perspective: 0,
  });

  // Menu Item
  canvas3.to(
    ".offcanvas-3__menu ul li",
    {
      opacity: 1,
      top: 0,
      stagger: 0.05,
      duration: 1,
      rotationX: 0,
    },
    "-=0.1"
  );
  // Meta
  canvas3.to(
    ".offcanvas-3__meta",
    {
      top: 0,
      visibility: "visible",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );

  // Social
  canvas3.to(
    ".offcanvas-3__social",
    {
      top: 0,
      visibility: "visible",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );
}

// offcanvas 3 Hide  -------------------------------------
function hideCanvas3() {
  var canvas3 = gsap.timeline();

  canvas3.to(".offcanvas-3__area", {
    duration: 0.8,
    rotationY: -90,
    opacity: 0,
  });
  canvas3.to(".offcanvas-3__area", {
    visibility: "hidden",
    duration: 0.1,
    rotationY: 50,
    left: 0,
    rotationX: 0,
  });

  // Menu Item
  canvas3.to(".offcanvas-3__menu ul li", {
    opacity: 0,
    top: -100,
    stagger: 0.01,
    duration: 0.1,
    rotationX: 50,
  });

  // Meta
  canvas3.to(
    ".offcanvas-3__meta",
    {
      top: -30,
      visibility: "hidden",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );

  // Social
  canvas3.to(
    ".offcanvas-3__social",
    {
      top: -30,
      visibility: "hidden",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );
}


