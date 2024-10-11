import { currentLang } from "../modules/translatecv.js";
let alertMsg;

export function Contact() {
  // Select all forms on the page
  const forms = document.querySelectorAll("form");

  // Set the alert message based on the selected language
  document.addEventListener("localeSelected", function () {
    if (currentLang === "en") {
      alertMsg = "can't be blank";
    } else if (currentLang === "ar") {
      alertMsg = "لا يمكن أن يكون فارغًا";
    } else if (currentLang === "de") {
      alertMsg = "darf nicht leer sein";
    }
  });

  // Function to send email
  function sendEmail(form) {
    const fullName = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Message: ${message.value}`;

    Email.send({
      SecureToken: "ee1ac063-423d-48fe-a7e1-8fa45fb2acec",
      From: email.value,
      Subject: "Contact Form Submission",
      Body: bodyMessage,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        // Reset form fields after successful submission
        form.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
        });
      }
    });
  }

  // Function to check inputs
  function checkInputs(form) {
    const items = form.querySelectorAll(".item"); // Assuming inputs have the class "item"
    let isValid = true;

    items.forEach((item) => {
      if (item.value.trim() === "") {
        setError(item, `${item.placeholder} ${alertMsg}`);
        isValid = false;
      } else {
        setSuccess(item);
      }
    });

    const emailInput = form.querySelector("input[type='email']");
    if (emailInput.value !== "") {
      if (!checkEmail(emailInput.value)) {
        setError(emailInput, "Email is not valid");
        isValid = false;
      } else {
        setSuccess(emailInput);
      }
    }

    return isValid;
  }

  // Set error message
  function setError(input, message) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-txt");
    formControl.classList.add("error");
    errorDisplay.innerText = message;
  }

  // Set success state
  function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
  }

  // Check email validity
  function checkEmail(email) {
    const emailRegex =
      /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    return emailRegex.test(email);
  }

  // Attach event listeners to each form
  forms.forEach((form) => {
    const items = form.querySelectorAll(".item");

    // Add input validation on blur
    items.forEach((item) => {
      item.addEventListener("blur", () => {
        if (item.value.trim() === "") {
          setError(item, `${item.placeholder} ${alertMsg}`);
        } else {
          setSuccess(item);
        }
      });

      item.addEventListener("input", () => {
        if (item.value.trim() !== "") {
          setSuccess(item);
        }
      });
    });

    // Validate email on input
    const emailInput = form.querySelector("input[type='email']");
    emailInput.addEventListener("input", () => {
      if (emailInput.value.trim() !== "" && !checkEmail(emailInput.value)) {
        setError(emailInput, "Email is not valid");
      } else {
        setSuccess(emailInput);
      }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (checkInputs(form)) {
        sendEmail(form);
      }
    });
  });
}
