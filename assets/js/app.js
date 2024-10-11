import { handleToggleSwitch } from "./modules/toggleSwitch.js";
import { selectLanguage } from "./modules/languageSelector.js";
import { navIcon } from "./modules/navIcon.js";
import { openSettings } from "./modules/settings.js";
import { selectColor } from "./modules/settings.js";
import { navbarActiveLinks } from "./modules/navbar.js";
import { ChangeLanguage, currentLang } from "./modules/translatecv.js";
import { cardAnimation } from "./modules/cardAnimation.js";
import { Projects } from "./modules/projects.js";
import { Skills } from "./modules/skills.js";
import { Contact } from "./modules/contact.js";
import { downloadCV } from "./modules/downloadcv.js";
import { morphBtn } from "./modules/buttonMorph.js";

// Call the function that responsible for the language selector
selectLanguage();

// Call the function that responsible for the dark-theme toggle switch
handleToggleSwitch();

// Call the function that responsible for ChangeLanguage
ChangeLanguage();

// Call the function that responsible for nav icon
navIcon();

// Call the function that responsible for navbarActiveLinks
navbarActiveLinks();

// Call the function that responsible for open settings
openSettings();

// Call the function that responsible for selecting Color from Settings
selectColor();

// Call the function that responsible for Morphing the button
morphBtn();

// Call the function that responsible for downloading cv
downloadCV();

// Call the function that responsible for the card animation
cardAnimation();

// --- wow anaimation
new WOW().init();

// Call the function that responsible for projects
Projects();

// Call the function that responsible for skills
Skills();

// Call the function that responsible for Contact
Contact();

// skill chart section
$(`.circlechart`).circlechart();
$(`data-percentage`).css("color", "white");

// owl carousel in testimonials section
$(".testimonial_slider_area").owlCarousel({
  autoPlay: true, //Set AutoPlay to 3 seconds
  slideSpeed: 3000,
  nav: true,
  navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>',
  ],
  loop: true,
  margin: 30,
  dots: false,
  handleToggleSwitch: true,
  rtl: true,
  responsive: {
    320: {
      items: 1,
    },
    767: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

// --- loader
const loader = document.querySelector(".loader");
const html = document.querySelector("html");
html.style.overflow = `hidden`;
addEventListener("load", () => {
  loader.style.opacity = `0`;
  console.log("html: ", HTMLBodyElement);
  setTimeout(() => {
    html.style.overflow = `auto`;
    loader.style.display = `none`;
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const turbulence = document.querySelector("feTurbulence");

  let baseFrequency = 0.02; // Starting value
  const minFrequency = 0.005;
  const maxFrequency = 0.02;
  const duration = 60000; // 60 seconds animation duration
  const scaleFactor = 0.005; // How much frequency changes

  let startTime = null;

  function animateTurbulence(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;

    // Adjust frequency over time
    baseFrequency =
      minFrequency +
      ((maxFrequency - minFrequency) * (elapsed % duration)) / duration;

    // Update the filter's `baseFrequency` attribute
    turbulence.setAttribute("baseFrequency", baseFrequency);

    // Continue the animation with `requestAnimationFrame` for smoother updates
    requestAnimationFrame(animateTurbulence);
  }

  // Start the animation loop
  requestAnimationFrame(animateTurbulence);
});

// Changing the language from the language toggle button
document.addEventListener("localeSelected", function () {
  // Call the function that responsible for nav icon
  navIcon();

  // Call the function that responsible for navbarActiveLinks
  navbarActiveLinks();

  // Call the function that responsible for Contact
  Contact();
  // Call the function that responsible for Morphing the button
  morphBtn();

  setInterval(navIcon(), 100000);
  setInterval(morphBtn(), 100000);
});
