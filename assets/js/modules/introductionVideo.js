let activeLang;
let ActiveVideo;
let lightbox;

function introductionVideo() {
  let href = {
    en: "https://www.youtube.com/watch?v=SUusaixCBl0&list=LL&index=1&t=169s",
    ar: "https://www.youtube.com/watch?v=0fYi8SGA20k",
    de: "https://www.youtube.com/watch?v=2zUrmjJgeec",
  };

  // Check for the selected language in localStorage or set it to 'en' by default
  if (!localStorage.getItem("selectedLanguage")) {
    localStorage.setItem("selectedLanguage", "en");
    activeLang = "en"; // Set activeLang to "en" as the default
  } else {
    activeLang = localStorage
      .getItem("selectedLanguage")
      .split("-")
      .splice(0, 1)
      .toString()
      .trim();
  }

  console.log("Active Language is: ", activeLang);

  // Set ActiveVideo based on the active language
  ActiveVideo = href[activeLang];
  console.log("Selected video: ", ActiveVideo);

  // Dynamically update the lightbox video source without reinitializing it
  if (lightbox) {
    lightbox.setElements([
      {
        href: ActiveVideo, // Update the video source in the lightbox
        type: "video",
        source: "youtube", // vimeo, youtube or local
        width: 900,
        autoplay: true,
      },
    ]);
  }
}

// Create the lightbox instance once when the page loads
document.addEventListener("DOMContentLoaded", () => {
  lightbox = GLightbox({
    touchNavigation: true,
    autoplayVideos: true,
  });
});

// Get the button element by its ID
const openVideo = document.getElementById("profileVideo");

// Add a click event listener to the button
openVideo.addEventListener("click", () => {
  // Call the function to update the active video based on language
  introductionVideo();
  console.log("Button clicked");

  // Open the lightbox with the updated video
  lightbox.open();
});
