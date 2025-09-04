
// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');     // show/hide menu
  menuToggle.classList.toggle('hide'); // hide button when menu is open
});
