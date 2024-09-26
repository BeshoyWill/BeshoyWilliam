// ^=================> Dark Light Theme & Toggle Switch saved in local storage
export function handleToggleSwitch() {
  let check = document.querySelector("#check");
  let box = document.querySelector(".box");
  let ball = document.querySelector(".ball");

  // Apply saved theme when the page loads
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    check.checked = true;
    box.setAttribute("style", "background-color: white");
    ball.setAttribute("style", "transform: translateX(100%)");
  } else {
    document.body.classList.remove("light-theme");
    check.checked = false;
    box.setAttribute("style", "background-color: black");
    ball.setAttribute("style", "transform: translateX(0%)");
  }

  // Listen for theme toggle
  check.addEventListener("change", function () {
    document.body.classList.toggle("light-theme");

    if (this.checked) {
      box.setAttribute("style", "background-color: white");
      ball.setAttribute("style", "transform: translateX(100%)");
      localStorage.setItem("theme", "light");
    } else {
      box.setAttribute("style", "background-color: black");
      ball.setAttribute("style", "transform: translateX(0%)");
      localStorage.setItem("theme", "dark");
    }
  });
}
