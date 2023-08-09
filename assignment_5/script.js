// @ts-nocheck
//  Updating Current Page
const pageTitle = document.title;
const navbarTitle = document.querySelector("#update-title");
navbarTitle.textContent = pageTitle;

// Navigation Bar
const navToggle = document.getElementById("nav-toggle");
const navInfo = document.querySelector(".hidden-links");

let isNavOpen = false;

navToggle.addEventListener("click", () => {
  if (!isNavOpen) {
    navInfo.classList = "open hidden-links";
    isNavOpen = true;
  } else {
    navInfo.classList = "close hidden-links";
    isNavOpen = false;
  }
});

const hiddenLinks = document.querySelector("#hidden-links");
const childCount = hiddenLinks.children.length;
document.documentElement.style.setProperty("--child-count", childCount);

// Create a comment that clear divided different sections of code

function setupIntervalAnimation(slider) {
  // set up minimum number of images displayed
  if (slider.children.length === 1) {
    slider.appendChild(slider.firstElementChild.cloneNode(true));
    slider.appendChild(slider.firstElementChild.cloneNode(true));
    slider.appendChild(slider.firstElementChild.cloneNode(true));
  } else if (slider.children.length === 2) {
    slider.appendChild(slider.firstElementChild.cloneNode(true));
    slider.appendChild(slider.firstElementChild.cloneNode(true));
  } else if (slider.children.length === 3) {
    slider.appendChild(slider.firstElementChild.cloneNode(true));
  }

  setInterval(() => {
    slider.animate(
      [
        {
          // move back width of image
          transform: `translateX(-${slider.firstElementChild.clientWidth}px)`,
        },
      ],
      {
        duration: 2500,
        easing: "ease",
      }
    ).onfinish = () => {
      const firstChild = slider.firstElementChild;
      firstChild.remove();
      slider.appendChild(firstChild.cloneNode(true));
    };
  }, 3000);
}

setupIntervalAnimation(carouselSlider);

// Interactive spinner
let spinner = document.getElementById("under");
let play = document.getElementById("interactive");
let gameOn = true;

spinner.addEventListener("click", () => {
  if (!gameOn) {
    // remove stop class and add start.
    play.classList = "start";
    gameOn = true;
  } else {
    play.classList = "stop";
    gameOn = false;
  }
});
