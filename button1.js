// Handle multiple popup buttons
const openBtns = document.querySelectorAll('[id^="openPopup"]');
const closeBtns = document.querySelectorAll('[id^="closePopup"]');
const overlays = document.querySelectorAll('[id^="popupOverlay"]');

// Add event listeners for all open buttons
openBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (overlays[index]) {
            overlays[index].style.display = 'flex';
        }
    });
});

// Add event listeners for all close buttons
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (overlays[index]) {
            overlays[index].style.display = 'none';
        }
    });
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    overlays.forEach(overlay => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlays.forEach(overlay => {
            if (overlay.style.display === 'flex') {
                overlay.style.display = 'none';
            }
        });
    }
});

