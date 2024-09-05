// Show or hide the scroll button based on scroll position
window.onscroll = function() {
  let scrollBtn = document.getElementById("scrollBtn");
  let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

  // Show the button after scrolling down at least 10%
  if (scrolledPercentage > 10) {
    scrollBtn.classList.remove('hidden'); // Show the button
    scrollBtn.classList.add('filled'); // Apply the fill effect
    document.querySelector('.scroll-ring').style.transform = `scale(${1 + (scrolledPercentage / 100)})`; // Scale the ring
  } else {
    scrollBtn.classList.add('hidden'); // Hide the button when at the top
    scrollBtn.classList.remove('filled'); // Remove the fill effect
    document.querySelector('.scroll-ring').style.transform = 'scale(1)';
  }
};

// Scroll to the top when the button is clicked
document.getElementById("scrollBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

