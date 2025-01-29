const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form submission

    // Get input values
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const termsChecked = document.getElementById("terms_conditions").checked;

    // Error message container
    let errorMessage = "";
    
    // Validate input
    if (firstName === "") errorMessage += "First name is required.\n";
    if (lastName === "") errorMessage += "Last name is required.\n";
    if (email === "" || !email.includes("@")) errorMessage += "Enter a valid email.\n";
    if (dob === "") errorMessage += "Date of birth is required.\n";
    if (password.length < 6) errorMessage += "Password must be at least 6 characters long.\n";
    if (password !== confirmPassword) errorMessage += "Passwords do not match.\n";
    if (!termsChecked) errorMessage += "You must agree to the Terms & Conditions.\n";

    // Show error message or submit form
    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Form submitted successfully!");
        form.submit(); 
    }
});
