export function morphBtn() {
  document.addEventListener("DOMContentLoaded", function () {
    // Select the morphing button and the contact section
    const morphButton = document.getElementById("morphButton");
    const contactSection = document.getElementById("morphContact");
    const insulatorBackground = document.querySelector(".insulator-background");

    const closeContactSection = document.querySelector("#morphContact i");

    // Function to handle the morph and smooth scroll
    morphButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor link behavior

      // Add the morphing class to the button
      contactSection.classList.add("morphing");
      insulatorBackground.classList.add("morphing");
    });

    closeContactSection.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor link behavior

      contactSection.classList.remove("morphing");
      insulatorBackground.classList.remove("morphing");
    });

    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 27 || event.keyCode === 13) {
        // 27 is Escape, 13 is Enter
        contactSection.classList.remove("morphing");
        insulatorBackground.classList.remove("morphing");
      }
    });
  });
}
