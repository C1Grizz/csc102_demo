function validateForm(event) {
    event.preventDefault(); 
    
    const first = document.getElementById("fName").value.trim();
    const last = document.getElementById("lName").value.trim();
    const badge = parseInt(document.getElementById("badge").value);
    const output = document.getElementById("valOutput");
    
    const fullName = first + " " + last;
    
    if (fullName.length > 20) {
        output.innerHTML = `<span style="color: #f87171;">Denied: Full name (${fullName.length} chars) exceeds 20 character limit.</span>`;
        return false;
    }
    
    if (badge < 100 || badge > 999 || isNaN(badge)) {
        output.innerHTML = `<span style="color: #f87171;">Denied: Badge must be an integer between 100 and 999.</span>`;
        return false;
    }
    
    output.innerHTML = `<span style="color: #4ade80;">Access Granted. Welcome to the lab, ${fullName}.</span>`;
    return false;
}
