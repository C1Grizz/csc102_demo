// Retrieve the audio element from the HTML DOM and store it in a constant variable
const casinoAudio = document.getElementById('chipSound');

// Retrieve the clickable 'Push All-In' button from the HTML DOM and store it
const actionButton = document.getElementById('allInButton');

// Retrieve the visual pot status badge element and store it in a constant
const statusBanner = document.getElementById('potTracker');

// Ensure the chip sound effect plays at 100% full volume for maximum punch
casinoAudio.volume = 1.0;

// Attach click handler directly to the button property (STRICTLY avoids 'addEventListener')
actionButton.onclick = function() {
    
    // Reset the audio track's playhead back to 0 seconds in case they double-click
    casinoAudio.currentTime = 0;
    
    // Command the browser's audio engine to fire the sound effect
    casinoAudio.play();
    
    // Update the visual tracker text to show the high-stakes move was executed
    statusBanner.innerText = "🚨 PLAYER GOES ALL-IN! ($250,000)";
    
    // Change the status badge text color to an intense glowing crimson
    statusBanner.style.color = "#ff3b3b";
    
    // Change the status badge border color to match the crimson text
    statusBanner.style.borderColor = "#ff3b3b";
    
    // Transform the button text to confirm the chips are sliding forward
    actionButton.innerText = "CHIPS IN THE POT!";
    
    // Briefly disable the button so the user is forced to watch the action unfold
    actionButton.disabled = true;

    // Set a timer to automatically reset the table back to normal after 3.5 seconds
    setTimeout(function() {
        
        // Revert the status badge text back to the waiting prompt
        statusBanner.innerText = "ACTION: WAITING ON YOU";
        
        // Re-apply the original warm amber CSS text color
        statusBanner.style.color = "#ffc107";
        
        // Re-apply the original warm amber CSS border color
        statusBanner.style.borderColor = "#ffc107";
        
        // Restore the button's original call-to-action text
        actionButton.innerText = "PUSH ALL-IN";
        
        // Re-enable the button so the professor can click it and test it again
        actionButton.disabled = false;

    }, 3500); // 3500 milliseconds equals exactly 3.5 seconds
};
