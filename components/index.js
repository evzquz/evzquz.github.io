
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

 //Responsive Navigation menu 
 function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }
      //toggle slowly animation
  $( "#iconClick" ).click(function() {
    $( "a" ).slideToggle( "slow", function() {
      $(this).toggleClass("full_list-expanded").css('display', '');
      // Animation complete.
    });
  });

