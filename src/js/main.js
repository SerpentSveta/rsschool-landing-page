import '../style.css';

const heroVideo = document.querySelector('.hero__video');
if (heroVideo) {
  heroVideo.play();
}

const themeSwitch = document.querySelector('.theme-switch');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.dataset.theme = 'dark';
}

if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    }
  });
}