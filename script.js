// Get input fields and output elements
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email-address");
const nameDisplay = document.getElementById("name-display");
const emailDisplay = document.getElementById("email-display");
const outputImage = document.getElementById("output-image");
const outputSection = document.getElementById("output-section");

// Define a function to update the displayed name and email
function updateDisplay() {
    if (nameDisplay) {
        const firstName = firstNameInput ? firstNameInput.value : "";
        const lastName = lastNameInput ? lastNameInput.value : "";
        nameDisplay.textContent = `${firstName} ${lastName}`;
    }

    if (emailDisplay && emailInput) {
        emailDisplay.textContent = emailInput.value;
    }
}

// Set up input event listeners to update display on changes
if (firstNameInput) {
    firstNameInput.addEventListener("input", updateDisplay);
}

if (lastNameInput) {
    lastNameInput.addEventListener("input", updateDisplay);
}

if (emailInput) {
    emailInput.addEventListener("input", updateDisplay);
}

// Function to handle profile image display
function handleProfileImageDisplay() {
    const profileImageInput = document.getElementById("profile-image");
    const profileImage = profileImageInput?.files?.[0];

    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function (event) {
            if (outputImage && event.target?.result) {
                outputImage.src = event.target.result;
                outputImage.style.display = "block";
            }
        };
        reader.readAsDataURL(profileImage);
    }
}

// Set up change event listener for the profile image input
const profileImageInput = document.getElementById("profile-image");
if (profileImageInput) {
    profileImageInput.addEventListener("change", handleProfileImageDisplay);
}

// Make sure the output section is visible
if (outputSection) {
    outputSection.style.display = "block";
}
