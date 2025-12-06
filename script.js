document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push(
        "Invalid username! Your username must be at least 3 characters long.",
      );
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Invalid email. Enter a valid email address.");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push(
        "Your password is short. Your password must be at least 8 characters long. Try again.",
      );
    }

    feedbackDiv.style.display = "block";

    if (isValid === true) {
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.textContent = "Registration successful!";
    } else {
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = messages.join("<br>");
    }
  });
});
