export function downloadCV() {
  document
    .getElementById("downloadCVBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent any default action
      console.log("Download button clicked"); // Log click event

      // URL of the CV file
      const cvFileUrl = "../../../assets/cv/my_en_cv.pdf"; // Ensure the path is correct
      const link = document.createElement("a");
      link.href = cvFileUrl;
      link.download = "Beshoy_William_CV.pdf"; // Name for the downloaded file

      console.log(`Attempting to download from: ${link.href}`); // Log download attempt

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}

// Call the function when the document is ready
document.addEventListener("DOMContentLoaded", downloadCV);
