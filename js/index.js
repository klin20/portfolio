// Get the button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
 };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(".menuIcon").on("click", function(){
  if($(".menuIcon").hasClass("rotate")) {
    $(".menuIcon").removeClass("rotate");
    $(".menuIcon").css("transition", "all 1s ease-in-out");
  } else {
    $(".menuIcon").addClass("rotate");
  }
  // $(".menuIcon").css("transform","rotate(45deg)");
    $(".hamburgerMenu").slideToggle();
});