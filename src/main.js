// Video speed
const video = document.getElementById('myVideo').playbackRate = 0.8;

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

