document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeButton');
    const icon = themeButton ? themeButton.querySelector('.icon') : null;
    const currentTheme = localStorage.getItem('theme');
  
    // Terapkan tema saat halaman dimuat
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  
    // Jika tombol tersedia, tambahkan event listener
    if (themeButton) {
      themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
  
        if (document.body.classList.contains('dark-mode')) {
          if (icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
          }
          localStorage.setItem('theme', 'dark');
        } else {
          if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
          }
          localStorage.setItem('theme', 'light');
        }
      });
    }
  });
  