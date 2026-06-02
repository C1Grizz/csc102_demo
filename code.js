// Tracks the active window interval runtime identifier for clean lifecycle clearing
let movementIntervalId = null;

// Tracks the current horizontal pixel displacement value of the target asset boundary
let currentLeftX = 0;
// Tracks the current vertical pixel displacement value of the target asset boundary
let currentTopY = 250;

// Defines the step distance multiplier for horizontal change velocity per individual frame refresh
let speedX = 5;
// Defines the step distance multiplier for vertical change velocity per individual frame refresh
let speedY = 4;

// Cache references to the vital document nodes to maintain system performance metrics
const startButtonElement = document.getElementById("startBtn");
const stopButtonElement = document.getElementById("stopBtn");
const validationStatusText = document.getElementById("validationStatus");
const movingMemeElement = document.getElementById("memeImg");

// Function bound directly to the HTML start button onclick execution pipeline
function handleStartClick() {
    // Passes structural control state parameters to change interactive interface layouts
    setControlDeckState(true);
    // Initializes runtime animation routines tracking frame displacement loops
    startMemeAnimationLoop();
}

// Function bound directly to the HTML stop button onclick execution pipeline
function handleStopClick() {
    // Passes structural control state parameters to restore baseline interface layouts
    setControlDeckState(false);
    // Directs global engine to sever interval executions instantly
    stopMemeAnimationLoop();
}

// Central processing function to enable/disable button arrays safely to prevent interval duplication
function setControlDeckState(isAnimating) {
    // Sets the exact structural disabled properties based on current systemic runtime states
    startButtonElement.disabled = isAnimating;
    // Evaluates inverse Boolean operations to activate structural stop buttons correctly
    stopButtonElement.disabled = !isAnimating;

    // Evaluates conditional parameters to fulfill strict innerHTML user validation messages
    if (isAnimating) {
        // Injects dynamic confirmation updates into validation components using innerHTML
        validationStatusText.innerHTML = "System Tracking Status: <span style='color: #4ade80; font-weight: bold;'>Meme Vector Motion Active!</span>";
    } else {
        // Injected alternative string notification detailing precise terminal status confirmations
        validationStatusText.innerHTML = "System Tracking Status: <span style='color: #f87171;'>Motion Successfully Terminated.</span>";
    }
}

// Instantiates active polling loops shifting target variables within target constraints
function startMemeAnimationLoop() {
    // Allocates ongoing frame callback loops tracking updates at roughly 60 updates a second
    movementIntervalId = setInterval(computeNextCoordinateFrame, 16);
}

// Severs functional window references to freeze tracking vectors instantly
function stopMemeAnimationLoop() {
    // Invokes native clearing methods using cached identity reference handles
    clearInterval(movementIntervalId);
}

// Vector calculation script updating target element positioning layout variables 
function computeNextCoordinateFrame() {
    // Advances horizontal tracker layout parameters by active speed constants
    currentLeftX += speedX;
    // Advances vertical tracker layout parameters by active speed constants
    currentTopY += speedY;

    // Determines if horizontal boundary hits or exceeds client frame viewport widths
    if (currentLeftX + movingMemeElement.clientWidth >= window.innerWidth || currentLeftX < 0) {
        // Reverses structural acceleration vectors along horizontal bounds upon wall collision
        speedX *= -1;
    }

    // Determines if vertical boundary hits or exceeds client frame viewport heights
    if (currentTopY + movingMemeElement.clientHeight >= window.innerHeight || currentTopY < 0) {
        // Reverses structural acceleration vectors along vertical bounds upon wall collision
        speedY *= -1;
    }

    // Assigns translated coordinate positions directly to baseline document element styles
    movingMemeElement.style.left = currentLeftX + "px";
    // Assigns translated coordinate positions directly to baseline document element styles
    movingMemeElement.style.top = currentTopY + "px";
}
