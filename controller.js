/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  
// JavaScript
function getNextSaturday() {
  var today = new Date();
  var day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  var nextSaturday = new Date();

  if (day === 6) {
    // Today is Saturday, so set next Saturday as the current date
    nextSaturday.setDate(today.getDate());
  } else {
    // Calculate the days until next Saturday
    var daysUntilNextSaturday = 6 - day;
    nextSaturday.setDate(today.getDate() + daysUntilNextSaturday);
  }

  // Set the time to 12:30:00
  nextSaturday.setHours(12);
  nextSaturday.setMinutes(30);
  nextSaturday.setSeconds(0);
  nextSaturday.setMilliseconds(0);

  return nextSaturday;
}

function updateCountdown() {
  var countDownDate = getNextSaturday().getTime();

  var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Call the function to start the countdown immediately
updateCountdown();

// Schedule the next countdown to start on the next Saturday at 12:30:00
setInterval(function() {
  updateCountdown();
}, 7 * 24 * 60 * 60 * 1000); // Repeat every 7 days




  


  