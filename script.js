const form = document.querySelector("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const dob = document.getElementById("dob");
const termsCheckbox = document.getElementById("terms_conditions");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    document.querySelectorAll(".error").forEach(el => el.remove());

    let isValid = true;

    function showError(input, message) {
        isValid = false;
        const error = document.createElement("p");
        error.className = "error";
        error.style.color = "red";
        error.style.fontSize = "0.8em";
        error.innerText = message;
        input.parentElement.appendChild(error);
    }

    // Validation 
    if (firstName.value.trim() === "") {
        showError(firstName, "First name is required.");
    }

    if (lastName.value.trim() === "") {
        showError(lastName, "Last name is required.");
    }

    if (email.value.trim() === "") {
        showError(email, "Email is required.");
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        showError(email, "Enter a valid email address.");
    }

    if (dob.value === "") {
        showError(dob, "Date of birth is required.");
    }

    if (password.value.trim() === "") {
        showError(password, "Password is required.");
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters long.");
    }

    if (confirmPassword.value.trim() === "") {
        showError(confirmPassword, "Please confirm your password.");
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match.");
    }

    if (!termsCheckbox.checked) {
        showError(termsCheckbox, "You must agree to the Terms & Conditions.");
    }

    // Submit the form if valid
    if (isValid) {
        alert("Form submitted successfully!");
        form.submit();
    }
});
