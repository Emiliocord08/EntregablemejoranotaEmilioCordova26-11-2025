document.addEventListener('DOMContentLoaded', () => {
  const planningBtn = document.getElementById('planningBtn');
  const researchBtn = document.getElementById('researchBtn');
  const homeBtn = document.getElementById('homeBtn');

  if (planningBtn) {
    planningBtn.addEventListener('click', () => {
      window.location.href = 'planning EFCR.html';
    });
  }

  if (researchBtn) {
    researchBtn.addEventListener('click', () => {
      window.location.href = 'investigacion EFCR.html';
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = 'index EFCR.html';
    });
  }
});