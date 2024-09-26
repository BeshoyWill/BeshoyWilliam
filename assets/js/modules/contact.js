export function Contact() {
  const form = document.querySelector("form");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;

    Email.send({
      SecureToken: "ee1ac063-423d-48fe-a7e1-8fa45fb2acec",
      From: email.value,
      Subject: subject.value,
      Body: bodyMessage,
    }).then((message) => {
      if (message == "OK") {
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

  function checkInputs() {
    const items = document.querySelectorAll(".item");
    let isValid = true;

    items.forEach((item) => {
      if (item.value.trim() === "") {
        setError(item, `${item.placeholder} can't be blank`);
        isValid = false;
      } else {
        setSuccess(item);
      }
    });

    if (email.value !== "") {
      if (!checkEmail(email.value)) {
        setError(email, "Email is not valid");
        isValid = false;
      } else {
        setSuccess(email);
      }
    }

    return isValid;
  }

  function setError(input, message) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-txt");
    formControl.classList.add("error");
    errorDisplay.innerText = message;
  }

  function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
  }

  function checkEmail(email) {
    const emailRegex =
      /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    return emailRegex.test(email);
  }

  // Add event listeners for real-time validation
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("blur", () => {
      if (item.value.trim() === "") {
        setError(item, `${item.placeholder} can't be blank`);
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

  email.addEventListener("input", () => {
    if (email.value.trim() !== "" && !checkEmail(email.value)) {
      setError(email, "Email is not valid");
    } else {
      setSuccess(email);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputs()) {
      sendEmail();
    }
  });
}
