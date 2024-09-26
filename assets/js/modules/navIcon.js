export function navIcon() {
  const navLinks = document.querySelectorAll(".navlinks a");

  document.querySelector(".menuicon").addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      navLinks.forEach((link) => {
        link.classList.add("show-nav");
      });
    } else {
      navLinks.forEach((link) => {
        link.classList.remove("show-nav");
      });
    }
    // navLinks.classList.toggle("show-nav");
  });
}
