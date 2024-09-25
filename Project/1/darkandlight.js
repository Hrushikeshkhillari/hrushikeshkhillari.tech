// Get the icons
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Get the root element to change the theme
const rootElement = document.documentElement;

// Function to enable dark mode
function enableDarkMode() {
  rootElement.setAttribute('data-theme', 'dark');
  sunIcon.classList.remove('hidden');
  moonIcon.classList.add('hidden');
  localStorage.setItem('theme', 'dark');
}

// Function to enable light mode
function enableLightMode() {
  rootElement.setAttribute('data-theme', 'light');
  moonIcon.classList.remove('hidden');
  sunIcon.classList.add('hidden');
  localStorage.setItem('theme', 'light');
}

// Event listeners to toggle modes
sunIcon.addEventListener('click', enableLightMode);
moonIcon.addEventListener('click', enableDarkMode);

// Apply the saved theme from localStorage on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  enableDarkMode();
} else {
  enableLightMode();
}
