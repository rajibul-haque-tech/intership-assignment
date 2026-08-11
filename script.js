// Interactive JavaScript for Multi-Page Portal
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link based on current URL path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Table Search Filter (for students.html)
  const searchInput = document.getElementById('studentSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const tableRows = document.querySelectorAll('.custom-table tbody tr');

      tableRows.forEach(row => {
        const textContent = row.textContent.toLowerCase();
        if (textContent.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  // Registration Form Handling (for register.html)
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('fullName');
      const studentName = nameInput ? nameInput.value : 'Student';

      showToast(`Registration Successful! Welcome, ${studentName}.`);
      registrationForm.reset();
    });
  }
});

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="font-size: 1.2rem; color: #10b981;">✓</span>
      <span id="toastMsg">${message}</span>
    `;
    document.body.appendChild(toast);
  } else {
    document.getElementById('toastMsg').textContent = message;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
