export function Skills() {
  document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and skill sections
    const uiBtn = document.getElementById("ui-btn");
    const frontendBtn = document.getElementById("frontend-btn");
    const backendBtn = document.getElementById("backend-btn");

    const uiSkills = document.getElementById("ui-skills");
    const frontendSkills = document.getElementById("frontend-skills");
    const backendSkills = document.getElementById("backend-skills");

    // Function to show the correct skill section and hide others
    function showSkills(sectionToShow) {
      // Hide all skill sections
      uiSkills.classList.remove("active");
      frontendSkills.classList.remove("active");
      backendSkills.classList.remove("active");

      // Show the selected section
      sectionToShow.classList.add("active");
    }

    // Function to save the active skill section to local storage
    function saveToLocalStorage(section) {
      localStorage.setItem("activeSkillSection", section);
    }

    // Add click event listeners to the buttons
    uiBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      showSkills(uiSkills);
      saveToLocalStorage("uiSkills");
      uiBtn.classList.add("active");
      frontendBtn.classList.remove("active");
      backendBtn.classList.remove("active");
    });

    frontendBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      showSkills(frontendSkills);
      saveToLocalStorage("frontendSkills");
      uiBtn.classList.remove("active");
      frontendBtn.classList.add("active");
      backendBtn.classList.remove("active");
    });

    backendBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      showSkills(backendSkills);
      saveToLocalStorage("backendSkills");
      uiBtn.classList.remove("active");
      frontendBtn.classList.remove("active");
      backendBtn.classList.add("active");
    });

    // Initially load from local storage or default to UI/UX section
    const savedSection = localStorage.getItem("activeSkillSection");

    if (savedSection === "frontendSkills") {
      showSkills(frontendSkills);
    } else if (savedSection === "backendSkills") {
      showSkills(backendSkills);
    } else {
      // Default to UI/UX section
      showSkills(uiSkills);
    }
  });
}
