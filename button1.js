const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');

openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
