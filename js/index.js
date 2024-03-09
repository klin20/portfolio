// Get the button:
let mybutton = document.getElementById("backToTop");
let mybutton2 = document.getElementById("explore");

// When the user scrolls down 20px from the top of the document, show the back to top button and hide the explore motion
window.onscroll = function () {
  scrollFunction();
 };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('.flexNav').css({'background-color':"white", "box-shadow":"0 0.25rem 0.5rem -0.5rem #333333"});
    mybutton.style.display = "block";
    // mybutton2.style.display = "none";
  } else {
    $('.flexNav').css({'background-color':"rgba(255, 255, 255, 0.5)","box-shadow":"none"});
    mybutton.style.display = "none";
    // mybutton2.style.display = "flex";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// mobile menu
$("#mobileMenu").on("click", function(){
  if($(".menuIcon").hasClass("rotate")) {
    $(".menuIcon").removeClass("rotate");
    $(".menuIcon").css("transition", "all 1s ease-in-out");
  } else {
    $(".menuIcon").addClass("rotate");
  }
  // $(".menuIcon").css("transform","rotate(45deg)");
    $(".hamburgerMenu").slideToggle();
});