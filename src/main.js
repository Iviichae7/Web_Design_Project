// Video speed
const video = document.getElementById('myVideo').playbackRate = 0.8;

// Selects all nav links
const navLinks = document.querySelectorAll(".md\\:flex .text-xl");

// function for mobile menu
document.getElementById('mobile-nav').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// function for cta to hide when mobile menu open
const toggleCTA = () => {
  let cta = document.getElementById('cta');

  if (cta.style.display === 'none') {
    cta.style.display = 'block';
  } else {
    cta.style.display = 'none';
  }
};
document.getElementById('mobile-nav').addEventListener('click', toggleCTA);

// Updates links on click
navLinks.forEach(link => {
  link.addEventListener('click', function () {

    // removes the class from all links in nav
    navLinks.forEach(link => link.classList.remove('active-link'));

    // When click adds the class
    this.classList.add('active-link');
  })
})