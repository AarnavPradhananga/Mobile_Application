$(document).ready(function () {

    function moveBox() {
  
      $(".box").animate({
        top: "420px",
        opacity: 0.3
      }, 1000, function () {
  
        $(".box").css("background", "blue");
  
        $(".box").animate({
          left: "420px",
          opacity: 1
        }, 1000, function () {
  
          $(".box").css("background", "green");
  
          $(".box").animate({
            top: "0px",
            opacity: 0.4
          }, 1000, function () {
  
            $(".box").css("background", "orange");
  
            $(".box").animate({
              left: "0px",
              opacity: 1
            }, 1000, function () {
  
              $(".box").css("background", "purple");
  
              moveBox();
  
            });
  
          });
  
        });
  
      });
  
    }
  
    // START ANIMATION
    moveBox();
  
  });