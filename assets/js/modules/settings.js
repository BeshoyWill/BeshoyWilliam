import { changeActive, setStorage, getStorage } from "../utils/helper.js";

// *=======> Open Settings
export function openSettings() {
  const settingsBox = document.querySelector(".settings-box");
  const toggleIcon = document.querySelector(".icon-toggle");

  const navbar = document.querySelector(".header .navbar");
  const sideBullets = document.querySelector(".nav-bullets");

  const fixedNav = document.querySelectorAll(".nav-option [data-nav]");

  const bullets = document.querySelectorAll(".nav-bull [data-bull]");

  toggleIcon.addEventListener("click", () => {
    settingsBox.classList.toggle("open");
  });

  function handleClick(e) {
    fixedNav.forEach((button) => {
      button.classList.remove("active");
    });

    e.target.classList.add("active");

    if (e.target.classList[0] === "Yes") {
      navbar.style.position = "fixed";
    } else if (e.target.classList[0] === "No") {
      navbar.style.position = "absolute";
    }

    setStorage("nav-option", e.target.classList[0]);
  }

  function handleBullets(e) {
    bullets.forEach((bullet) => {
      bullet.classList.remove("active");
    });

    e.target.classList.add("active");

    if (e.target.classList[0] === "Yes") {
      sideBullets.style.display = "block";
    } else if (e.target.classList[0] === "No") {
      sideBullets.style.display = "none";
    }

    setStorage("side-bullets", e.target.classList[0]);
  }

  fixedNav.forEach((button) => {
    if (button.getAttribute("data-nav") === "true") {
      button.classList.add("active");
      navbar.style.position = "fixed";
    }

    button.addEventListener("click", handleClick);
  });

  bullets.forEach((bullet) => {
    if (bullet.getAttribute("data-bull") === "true") {
      bullet.classList.add("active");
      sideBullets.style.display = "block";
    }

    bullet.addEventListener("click", handleBullets);
  });

  // Apply settings on load
  const savedNavOption = getStorage("nav-option");
  const savedBulletsOption = getStorage("side-bullets");

  // Apply the saved navbar position if it exists
  if (savedNavOption) {
    const activeNavButton = Array.from(fixedNav).find((button) =>
      button.classList.contains(savedNavOption)
    );
    if (activeNavButton) {
      changeActive(fixedNav, activeNavButton);
      navbar.style.position = savedNavOption === "Yes" ? "fixed" : "absolute";
    }
  }

  // Apply the saved bullets display if it exists
  if (savedBulletsOption) {
    const activeBullet = Array.from(bullets).find((bullet) =>
      bullet.classList.contains(savedBulletsOption)
    );
    if (activeBullet) {
      changeActive(bullets, activeBullet);
      sideBullets.style.display =
        savedBulletsOption === "Yes" ? "block" : "none";
    }
  }
}

/* 
// *=======> Select Color & save it in local storage
export function selectColor() {
  const colorOption = Array.from(
    document.querySelectorAll(".colors-option li")
  ); // color option

  let colorData;

  let setColor = (e) => {
    colorData = e.target.dataset.color;
    document.documentElement.style.setProperty("--main-color", colorData); // Set Color On Root
  };

  colorOption.forEach((color) => {
    color.addEventListener("click", (e) => {
      changeActive(colorOption, color);
      setColor(e);
      setStorage("main color", colorData);
    });
  });

  // --- set Color When Start
  function setColorStart() {
    colorData = getStorage("main color");
    document.documentElement.style.setProperty("--main-color", colorData); //Set Color On Root
    changeActive(
      colorOption,
      colorOption.find((item) => {
        if (item.dataset.color == colorData) {
          return item;
        }
      })
    );
  }
  // set color when start
  if (getStorage("main color") != null) {
    setColorStart();
  }
}
 */

// *=======> Select Color & save it in local storage
// *=======> Select Color & save it in local storage
export function selectColor() {
  const colorOption = Array.from(
    document.querySelectorAll(".colors-option li")
  ); // color option

  let colorData;

  // Function to convert a hex color code to HSLA
  function hexToHsla(hex, alpha = 1) {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length == 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    s = s * 100;
    l = l * 100;
    h = Math.round(h * 360);
    s = Math.round(s);
    l = Math.round(l);
    return { hsla: `hsla(${h}, ${s}%, ${l}%, ${alpha})`, hue: h }; // Return both HSLA and the hue
  }

  // Function to set the color
  let setColor = (e) => {
    const hexColor = e.target.dataset.color; // Assuming it's a hex color
    const hslaColor = hexToHsla(hexColor, 1); // Convert to HSLA
    colorData = hslaColor.hsla;
    const hue = hslaColor.hue; // Get the hue value

    // Update --main-color-hue dynamically
    document.documentElement.style.setProperty("--main-color-hue", hue);

    // Set main color based on the new hue
    document.documentElement.style.setProperty("--main-color", colorData);

    // Optionally save the hue in local storage
    setStorage("main-color-hue", hue);
  };

  colorOption.forEach((color) => {
    color.addEventListener("click", (e) => {
      changeActive(colorOption, color);
      setColor(e);
      setStorage("main color", colorData); // Save HSLA color in local storage
    });
  });

  // --- set Color When Start
  function setColorStart() {
    const savedHue = getStorage("main-color-hue");
    if (savedHue) {
      document.documentElement.style.setProperty("--main-color-hue", savedHue); // Set saved hue
    }

    colorData = getStorage("main color");
    document.documentElement.style.setProperty("--main-color", colorData); // Set Color On Root
    changeActive(
      colorOption,
      colorOption.find((item) => {
        if (hexToHsla(item.dataset.color, 1).hsla == colorData) {
          return item;
        }
      })
    );
  }

  // Set color when start
  if (getStorage("main color") != null) {
    setColorStart();
  }
}
