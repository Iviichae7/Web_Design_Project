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
  const mobile = document.getElementById('mobile');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
    mobile.classList.toggle('hidden');
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

// Guessing game
const secretNumber = Math.floor(Math.random() * 10) + 1;
let tries = 0;

const guessButton = document.getElementById('guessButton');
const userGuess = document.getElementById('userGuess');
const statusMessage = document.getElementById('statusMessage');
const discountCode = document.getElementById('discountCode');
const discountMessage = document.getElementById('discountMessage');

// Start the game when the guess button is clicked
guessButton.addEventListener('click', () => {
  tries += 1;
  let guessedNumber = parseInt(userGuess.value);

  // Validation if its not a number or less than 1 or greater than 10
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
    statusMessage.innerText = 'Please enter a valid number between 1 and 10!';
    return;
  }

  // If the user guess the secret number
  if (guessedNumber === secretNumber) {
    // Rrandom discount between 5 and 25 percent
    let discounts = [5, 10, 15, 25];
    // Select a random index in the array
    let index = Math.floor(Math.random() * discounts.length);
    let discount = discounts[index];
    // Generating a unique code 100000 inclusive and 900000 exclusive
    let uniqueCode = Math.floor(100000 + Math.random() * 900000);
    let discountMessageText = 'Redeem this code ' + uniqueCode + ' over the phone for ' + discount + '% off!';
    discountCode.innerText = discountMessageText;
    discountMessage.style.display = 'block';
    statusMessage.innerText = 'You got it right!';
    guessButton.disabled = true;
  } else if (tries >= 3) {
    statusMessage.innerText = 'Sorry, you did not guess the right number. Thanks for playing!';
    guessButton.disabled = true;
  } else {
    if (guessedNumber > secretNumber) {
      statusMessage.innerText = 'Your guess was too high! Try again.';
    } else {
      statusMessage.innerText = 'Your guess was too low! Try again.';
    }
  }
});



//scroll to see menu button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let button = document.getElementsByClassName("scrollButton")[0];
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollDown() {
  let secondPage = document.getElementById("Second_Page");
  window.scrollTo({
    top: secondPage.offsetTop,
    behavior: 'smooth'
  });
}

/*Breda's code*/



//Script to display image text in Gallery

function showText(text) {

  var choiceText = document.getElementById("choiceText");

  choiceText.textContent = text;
}

//Contact Page Code - Breda



function validateInput(){

  const contactName = document.getElementById("name");

  if(contactName.value.length<4){
      alert("Please enter a valid name");
      return false;
  }

  const contactEmail = document.getElementById("email");
  if(contactEmail.value==""){
      alert("Please enter your email address");
      return false;
  }

  const contactNumber = document.getElementById("mobileNumber");
  if(contactNumber.value.length!=7){
      alert("Please enter a valid mobile number");
      return false;
  }

  const eventAddress = document.getElementById("address");
  if(eventAddress.value.length<10){
      alert("Please enter the full address of the event");
      return false;
  }

  const eventEircode = document.getElementById("eircode");
  if(eventEircode.value.length<7 || eventEircode.value.length>8){
      alert("Please enter a valid 7 character eircode")
      return false;
  }

  const eventDate = document.getElementById("date");

  if(eventDate.value==""){
      alert("Please enter the date of your event")
      return false;
  }


  const form = document.getElementById("contactForm");
  form.style.display="none";

  const returnMessage = document.getElementById("returnMessage");
  returnMessage.style.display="block";
      
}