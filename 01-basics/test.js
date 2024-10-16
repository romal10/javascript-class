document.addEventListener("DOMContentLoaded", function() {
    const fills = document.querySelectorAll('.progress-container .fill');

    fills.forEach(fill => {
        const percentage = fill.style.width;
        fill.style.width = '0'; // Reset width
        setTimeout(() => {
            fill.style.width = percentage; // Animate to target width
        }, 100); // Delay to allow transition to be visible
    });
});
