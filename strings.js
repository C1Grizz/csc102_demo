// =================================================================
// CONCEPT 1: CLASSES AND OBJECTS
// =================================================================

// Define a class blueprint to handle string analysis and data storage
class StringAnalyzer {
    // Constructor method initializes new objects with user input
    constructor(rawInput) {
        // Store the original unmodified input string
        this.originalText = rawInput;
        // CONCEPT 2: STRING MANIPULATION
        // Convert to lowercase and remove all spaces/punctuation using Regex
        this.cleanText = rawInput.toLowerCase().replace(/[^a-z0-9]/g, "");
    }

    // Method to verify if the cleaned string reads the same backwards
    checkPalindrome() {
        // CONCEPT 3: DECISION LOGIC (IF/ELSE)
        // If string contains no alphanumeric characters, it is not a valid palindrome
        if (this.cleanText.length === 0) {
            // Return false early
            return false;
        }

        // Initialize an empty string variable to build our reversed text
        let reversed = "";

        // CONCEPT 4: LOOPS
        // Loop backwards starting from the very last character index
        for (let i = this.cleanText.length - 1; i >= 0; i--) {
            // Append the current character onto our reversed string
            reversed += this.cleanText[i];
        }

        // Decision logic: compare forward cleaned text to reversed text
        if (this.cleanText === reversed) {
            // Return true if they match exactly
            return true;
        } else {
            // Return false if they do not match
            return false;
        }
    }

    // Method to calculate the total character count ignoring whitespace
    getCharacterCount() {
        // Return the numerical length of the cleaned alphanumeric string
        return this.cleanText.length;
    }
}

// =================================================================
// CONCEPT 5: FUNCTIONS & VALIDATION
// =================================================================

// Main function executed when the HTML form is submitted
function processFormSubmit(event) {
    // Prevent the default browser form submission page reload
    event.preventDefault();

    // Retrieve the HTML input element by its specific ID
    const inputField = document.getElementById("userInput");
    // Retrieve the HTML output container div by its specific ID
    const outputDiv = document.getElementById("outputArea");

    // Grab the raw value from input and trim leading/trailing spaces
    const userString = inputField.value.trim();

    // STRING VALIDATION REQUIREMENT
    // Decision logic: check if the user submitted an empty string
    if (userString === "") {
        // REQUIREMENT: Must use innerHTML for validation messages (NO alerts!)
        outputDiv.innerHTML = "<span style='color: #f43f5e; font-weight: bold;'>⚠️ Please enter some text before analyzing!</span>";
        // Exit the function immediately so processing stops
        return;
    }

    // Instantiate a new object instance of our StringAnalyzer class
    const analyzerObject = new StringAnalyzer(userString);

    // Call the object method to evaluate palindrome status
    const isPalindrome = analyzerObject.checkPalindrome();
    // Call the object method to get total character count
    const charCount = analyzerObject.getCharacterCount();

    // Initialize an empty string to accumulate our formatted HTML response
    let responseHTML = "";

    // Decision logic: format the output message based on palindrome boolean
    if (isPalindrome === true) {
        // REQUIREMENT: Must use innerHTML for palindrome messages
        responseHTML += "<h2 style='color: #34d399;'>✨ Yes! It is a Palindrome! ✨</h2>";
    } else {
        // Output formatted failure message
        responseHTML += "<h2 style='color: #f43f5e;'>❌ Not a Palindrome.</h2>";
    }

    // Append the original submitted text to the HTML response
    responseHTML += "<p>Original: <em>\"" + userString + "\"</em></p>";
    // Append the calculated alphanumeric character length to the HTML response
    responseHTML += "<p>Alphanumeric Length: <strong>" + charCount + " characters</strong></p>";

    // Assign the fully constructed HTML string directly to innerHTML
    outputDiv.innerHTML = responseHTML;
}

// =================================================================
// REQUIREMENT: NO inline JS in HTML, NO ActionListeners used below!
// =================================================================

// Attach an anonymous function to the window onload event handler
window.onload = function() {
    // Locate the HTML form element inside the document DOM
    const stringForm = document.getElementById("analyzerForm");
    // Assign our custom handler function directly to the native onsubmit property
    stringForm.onsubmit = processFormSubmit;
};
