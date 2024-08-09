// Function to show the alert and start the countdown to redirect
function showAlertAndRedirect() {
    // Display the alert after 10 seconds
    setTimeout(function() {
        alert("ALERT: A VIRUS HAS WASHED OVER THIS SITE. THIS SITE WILL BE DESTROYED IN 5 SECONDS.");

        // Redirect to another page after 5 seconds
        setTimeout(function() {
            window.location.href = "./private.html"; // Replace with your desired URL
        }, 5000);
    }, 10000);
}

function showFlashing() {
    setTimeout(function() {
        document.getElementById('flashing-rectangle').classList.add('active');
    }, 9995); // Adjust delay as needed
}

// Call the function when the page loads
window.onload = function() {
    showAlertAndRedirect();
    showFlashing();
};
