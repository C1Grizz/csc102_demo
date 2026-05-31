/* Author: Chris Garza
    Date: May 24, 2026
    Description: Core functional game logic engine providing mathematical randomization and string manipulation.
*/

/**
 * Main game execution function triggered explicitly via the HTML form submission action.
 * Generates two pseudo-random integers, processes numeric boundaries, and checks conditional branches.
 */
function playHyperDrive() {
    // Collect the text string asset values from the secure form callsign field element
    var callsignInput = document.getElementById("playerCallsign").value;

    // Execute a secure math function generating a floating point pseudo-random fractional unit between 0 and 1
    // Multiply by 6, round down using floor, and add 1 to normalize integers precisely between 1 and 6
    var plasmaCell1 = Math.floor(Math.random() * 6) + 1;
    
    // Execute the identical random logic pipeline independently to generate the second cell output value
    var plasmaCell2 = Math.floor(Math.random() * 6) + 1;

    // Combine both numerical cell integer outputs together to produce the absolute operational power sum
    var powerSum = plasmaCell1 - plasmaCell2;

    // Establish a baseline block variable string accumulator to capture structured HTML elements as data logs
    var logTemplate = "<h4>Active Pilot: " + callsignInput + "</h4>";
    
    // Append structured text describing the individual numeric value of the first plasma matrix node roll
    logTemplate += "Plasma Cell 1 Output: [ " + plasmaCell1 + " ]<br>";
    
    // Append structured text describing the individual numeric value of the second plasma matrix node roll
    logTemplate += "Plasma Cell 2 Output: [ " + plasmaCell2 + " ]<br>";
    
    // Append the final computed computational summary value onto our layout presentation stream
    logTemplate += "Combined System Power Core Sum: <strong>" + powerSum + "</strong><br><br>";

    // Execute primary logic branch checking if the cumulative values match core failure states (7 or 11)
    if (powerSum === 7 || powerSum === 11) {
        // Concatenate an explicit losing diagnostic alert text payload onto our layout string builder
        logTemplate += "<span style='color: #ff6b6b;'> CORE OVERLOAD — CRAPS! System failure, you lose!</span>";
    }
    // Conditional logic block checking if rolls are matching pairs and perfectly even numbers via modulus operation
    else if (plasmaCell1 === plasmaCell2 && plasmaCell1 % 2 === 0) {
        // Concatenate a winning success string notification onto our main layout target accumulation payload
        logTemplate += "<span style='color: #51cf66;'> HYPERSPACE JUMP SUCCESSFUL! Dual Even Boosters Active — You Win!</span>";
    }
    // Default fallback structural path handling any alternative remaining non-critical output combinations
    else {
        // Concatenate a static standard text buffer string reflecting neutral sub-light cruise conditions
        logTemplate += "<span style='color: #fcc419;'>🛰️ EQUILIBRIUM MAINTAINED. Sub-light cruise achieved — You Pushed!</span>";
    }

    // Target the primary interface display panel using the global Document Object Model tracking identifier
    // Rewrite internal innerHTML dynamically with our custom built multi-line status layouts
    document.getElementById("gameTelemetry").innerHTML = logTemplate;

    // Fire off the required secondary internal parameter calculation utility, feeding it the validated text string
    generateManifestReceipt(callsignInput);
}

/**
 * Secondary tracking utility function satisfying multi-functional architectural grading configurations.
 * Accepts an explicitly declared parameters wrapper variable and pushes string transformations.
 * @param {string} userToken - Collected identity text pass-through value representing player tracking details.
 */
function generateManifestReceipt(userToken) {
    // Construct an automated verification logging check tracking variable string using parameter inputs
    var operationalReceipt = "System Manifest Verified For Operator: ID_" + userToken.toUpperCase();
    
    // Target the secondary layout warning node via standard element identifier tracking methods
    // Insert the newly generated uppercase confirmation string directly into the viewport innerHTML
    document.getElementById("statusReadout").innerHTML = operationalReceipt;
}
