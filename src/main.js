// Selects all nav links
const navLinks = document.querySelectorAll(".md\\:flex .text-xl");

// Selects logo
const logo = document.querySelector('.w-20 a');

// Function to set video speed and check the if current page has a video
const setVideoSpeed = () => {
  const video = document.getElementById('myVideo');
  if (video) {
    video.playbackRate = 0.8;
  }
}

// Function for mobile menu and if mobile menu is open
const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// Function for cta to hide when mobile menu open
const toggleCTA = () => {
  const cta = document.getElementById('cta');
  if (cta) {
    if (cta.style.display === 'none') {
      cta.style.display = 'block';
    } else {
      cta.style.display = 'none';
    }
  }
}

// Function to handle logo click
const logoClick = () => {
  // Deselect all links 
  navLinks.forEach(link => link.classList.remove('active-link'));

  // Forgets about the last active link
  sessionStorage.removeItem('activeLink');

  // Head to the home page
  window.location.href = logo.href;
}

// Updates links on click and when the page loads
const updateActiveLink = () => {
  navLinks.forEach(link => {
    link.classList.remove('active-link');

    link.addEventListener('click', function (e) {
      // Prevent the default action of the link
      e.preventDefault();

      // Removes the active-link class from all links in nav
      navLinks.forEach(link => link.classList.remove('active-link'));

      // Add active-link class to the clicked link
      this.classList.add('active-link');

      // Save the active link to session storage
      sessionStorage.setItem('activeLink', this.href);

      // Navigate to the new page
      window.location.href = this.href;
    });

    // Check the session storage and set the active link
    if (link.href === sessionStorage.getItem('activeLink')) {
      link.classList.add('active-link');
    }
  });

  // If there is no current active links in storage
  if (!sessionStorage.getItem('activeLink')) {
    const homeLink = document.querySelector('.md\\:flex a[href="/src/index.html"]');
    // If the home link is found add the active link and store it in the session storage as active
    if (homeLink) {
      homeLink.classList.add('active-link');
      sessionStorage.setItem('activeLink', homeLink.href);
    }
  }
}

// On DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  setVideoSpeed();
  document.getElementById('mobile-nav').addEventListener('click', toggleMobileMenu);
  document.getElementById('mobile-nav').addEventListener('click', toggleCTA);
  logo.addEventListener('click', function (e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Invoke the logo function
    logoClick();
  });
  updateActiveLink();
});


//Script to display image text in Gallery

function showText(text) {

  var choiceText = document.getElementById("choiceText");

  choiceText.textContent = text;
  }