export function Projects() {
  async function loadProjects() {
    try {
      // Update the path to your actual JSON file
      const response = await fetch("/assets/js/core/projects.json");

      const projects = await response.json();

      // Parent container where project cards will go
      const projectsContainer = document.querySelector(".projects-content");

      // Loop through each project in the JSON file and create HTML
      projects.forEach((project) => {
        // Create a new div for each project card
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("parent");

        // Construct the HTML for the card
        parentDiv.innerHTML = `
                <div class="card">
                  <div class="content-box">
                    <h1 class="card-title">${project.title}</h1>
                    <p class="card-content">${project.description}</p>
                    <a href="${project.link}" target="_blank">
                      <span class="see-more">Visit Website</span>
                    </a>
                  </div>
                  <div class="date-box">
                    <img src="${project.image}" alt="${project.title}">
                  </div>
                </div>
              `;

        // Append the newly created project card to the container
        projectsContainer.appendChild(parentDiv);
      });
    } catch (error) {
      console.log("Error loading projects:", error);
    }
  }

  // Call the function to load the projects when the page loads
  window.onload = loadProjects;
}
