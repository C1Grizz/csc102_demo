// Locate and bind the form element layout tree using unique ID tag markers
const authForm = document.getElementById('authForm');
// Reference the warning message container layout elements to handle dynamic innerHTML text streams
const warningMessage = document.getElementById('warningMessage');
// Isolate hidden secret notification elements to allow dynamic reveal state changes
const secretMessage = document.getElementById('secretMessage');

// Core functional computation script evaluating submitted user strings securely
function handleFormSubmit(event) {
    // Stop standard page processing behavior pathways immediately to block automated query refreshes
    event.preventDefault();

    // Reset innerHTML states to blank strings before processing validations anew
    warningMessage.innerHTML = "";
    // Hide the classified details compartment box securely upon every execution submission loop
    secretMessage.style.display = "none";

    // Extract textual data input parameters tracking customer first name nodes
    const firstName = document.getElementById('firstName').value.trim();
    // Extract textual data input parameters tracking customer last name nodes
    const lastName = document.getElementById('lastName').value.trim();
    // Extract textual data input parameters tracking customer zip code nodes
    const zipCode = document.getElementById('zipCode').value.trim();

    // Requirement: Combine the first name + space + last name into a single designated variable container
    const fullName = firstName + " " + lastName;

    // Edge-case check: Verify that input lines were not left completely empty by users
    if (firstName === "" || lastName === "") {
        // Handle warning displays cleanly via standard innerHTML injection rules
        warningMessage.innerHTML = "Access Denied: First and Last name inputs cannot be blank.";
        // Exit tracking operations blocks completely
        return;
    }

    // Requirement: Check if the string length variable records more than 20 characters total
    if (fullName.length > 20) {
        // Requirement: Inject explicit system security warning tags directly inside innerHTML nodes
        warningMessage.innerHTML = "Access Denied: Full name space cannot exceed 20 characters! Current count: " + fullName.length;
        // Break program execution sequences outright to enforce secure validation boundaries
        return;
    }

    // Requirement: Validate that zip codes align to an exact 5 character length tracking format
    if (zipCode.length !== 5) {
        // Requirement: Populate targeted error warning notifications into views via innerHTML rules
        warningMessage.innerHTML = "Access Denied: Zip code must be exactly 5 characters long.";
        // Terminate program steps avoiding subsequent data operations loops
        return;
    }

    // Requirement: Enforce numeric character verification tests verifying strings evaluate strictly as valid numbers
    if (isNaN(zipCode)) {
        // Render detailed feedback notifying strings are invalid digits data types via innerHTML
        warningMessage.innerHTML = "Access Denied: Zip code must contain numeric digits only.";
        // Halt remaining program paths securely
        return;
    }

    // Success Block: If data arrays successfully navigate validation checkpoints, display confidential message logs
    secretMessage.style.display = "block";
}

// Requirement: Assign operations directly to the DOM form onsubmit property entirely bypassing actionListeners
authForm.onsubmit = handleFormSubmit;
