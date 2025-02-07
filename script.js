function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
}

// Update the time when the page loads
updateUTCTime();

// Refresh the UTC time every second
setInterval(updateUTCTime, 1000);
