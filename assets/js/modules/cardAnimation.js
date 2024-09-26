//^=================> Projects Card Animation with Mouse Move ====================>

export function cardAnimation() {
  // Select all card elements
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const xAxis = (e.clientX - rect.left - rect.width / 2) / 15;
      const yAxis = (e.clientY - rect.top - rect.height / 2) / 15;

      // Apply the transformation to the hovered card
      card.style.transform =
        "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
    });

    card.addEventListener("mouseenter", () => {
      // Remove transition for smooth movement
      card.style.transition = "none";
    });

    card.addEventListener("mouseleave", () => {
      // Reset card position when mouse leaves and add back the transition
      card.style.transition = "all 0.5s ease-in-out";
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });
}
