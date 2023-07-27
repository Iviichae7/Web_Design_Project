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