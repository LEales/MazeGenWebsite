// get the stars container
const starsContainer = document.querySelector('.stars');

// create stars
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  starsContainer.appendChild(star);
}

// make a star fall randomly every 10 seconds
setInterval(() => {
  const stars = document.querySelectorAll('.star');
  const randomIndex = Math.floor(Math.random() * stars.length);
  stars[randomIndex].classList.add('fall');
  setTimeout(() => {
    stars[randomIndex].classList.remove('fall');
  }, 3000); // adjust the animation duration in CSS if needed
}, 10000);