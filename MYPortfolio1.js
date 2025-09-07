// Personalization
const YOUR_NAME = "Krutika Chincholkar";
document.getElementById('brandName').textContent = YOUR_NAME;
document.getElementById('aboutName').textContent = YOUR_NAME;
document.getElementById('footerName').textContent = YOUR_NAME;
document.getElementById('year').textContent = new Date().getFullYear();

// Handle recommendation form
const form = document.getElementById('recForm');
const recList = document.getElementById('recList');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('recName').value.trim();
  const text = document.getElementById('recText').value.trim();
  if (!text) return;

  const block = document.createElement('blockquote');
  block.className = 'card rec';
  block.innerHTML = `<p>“${text}”</p><small>${name ? `— ${name}` : '— Anonymous'}</small>`;
  recList.prepend(block);

  form.reset();
  modal.style.display = 'flex';
  closeModal.focus();
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'flex') modal.style.display = 'none'; });
