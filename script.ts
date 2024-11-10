// Get input fields and output elements
const firstNameInput = document.getElementById("first-name") as HTMLInputElement | null;
const lastNameInput = document.getElementById("last-name") as HTMLInputElement | null;
const emailInput = document.getElementById("email-address") as HTMLInputElement | null;

const nameDisplay = document.getElementById("name-display") as HTMLElement | null;
const emailDisplay = document.getElementById("email-display") as HTMLElement | null;
const outputImage = document.getElementById("output-image") as HTMLImageElement | null;
const outputSection = document.getElementById("output-section") as HTMLElement | null;

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
    const profileImageInput = document.getElementById("profile-image") as HTMLInputElement | null;
    const profileImage = profileImageInput?.files?.[0];

    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function (event: ProgressEvent<FileReader>) {
            if (outputImage && event.target?.result) {
                outputImage.src = event.target.result as string;
                outputImage.style.display = "block";
            }
        };
        reader.readAsDataURL(profileImage);
    }
}

// Set up change event listener for the profile image input
const profileImageInput = document.getElementById("profile-image") as HTMLInputElement | null;
if (profileImageInput) {
    profileImageInput.addEventListener("change", handleProfileImageDisplay);
}

// Make sure the output section is visible
if (outputSection) {
    outputSection.style.display = "block";
}
