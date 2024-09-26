// navbar.js
import { setStorage, getStorage } from "../utils/helper.js";

export function navbarActiveLinks() {
  const navLinks = document.querySelectorAll(".navlinks a");
  const sections = Array.from(document.querySelectorAll("section"));

  // Prevent automatic scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function updateActiveNavLink() {
    let index = -1;

    // Find the index of the section currently in view
    for (let i = 0; i < sections.length; i++) {
      // Check if the current section is in the viewport
      if (window.scrollY + window.innerHeight / 2 >= sections[i].offsetTop) {
        index = i;
      }
    }

    // Remove 'active' class from all nav links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the nav link corresponding to the current section
    if (index >= 0 && index <= navLinks.length) {
      navLinks[index - 1].classList.add("active");
    }
  }

  // Retrieve the active section index from local storage on page load
  const savedIndex = getStorage("activeSectionIndex");

  if (savedIndex !== null && savedIndex >= 0 && savedIndex < sections.length) {
    // Scroll to the saved section after the page is loaded
    window.addEventListener("load", () => {
      sections[savedIndex].scrollIntoView({
        behavior: "smooth", // Optional smooth scroll
        block: "start",
      });

      // Set the corresponding nav link to active
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[savedIndex].classList.add("active");
    });
  }

  // Update the active nav link initially and on scroll
  updateActiveNavLink();
  window.addEventListener("scroll", updateActiveNavLink);

  // Handle nav link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Scroll to the corresponding section smoothly
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start", // Align the section at the start of the viewport
      });

      // Remove 'active' class from all nav links and add to the clicked one
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Update local storage with the clicked section index
      const clickedIndex = Array.from(navLinks).indexOf(link);
      setStorage("activeSectionIndex", clickedIndex);
    });
  });
}
