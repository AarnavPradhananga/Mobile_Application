$(document).ready(function () {

  // 1. GET & SET

  $("#show-name").click(function () {
    $("#output").text($("#student-name").text());
  });

  $("#change-name").click(function () {
    $("#student-name").text("Aarnav");
  });

  $("#show-bio").click(function () {
    $("#output").text($("#student-bio").html());
  });

  $("#get-input").click(function () {
    $("#output").text($("#nickname-input").val());
  });

  $("#set-input").click(function () {
    $("#nickname-input").val("student w3 assignment");
  });


  // 2. CSS CLASSES

  $("#highlight-card").click(function () {
    $("#profile-card").addClass("highlighted");
  });

  $("#remove-highlight").click(function () {
    $("#profile-card").removeClass("highlighted");
  });

  $("#toggle-dark").click(function () {
    $("#profile-card").toggleClass("dark-mode");
  });

  $("#toggle-rounded").click(function () {
    $("#profile-photo").toggleClass("rounded");
  });


  // 3. CSS METHOD (FIXED)

  $("#red-bg").click(function () {

    $("#profile-card").css({
      "background-color": "#e74c3c",
      "color": "white"
    });

  });

  $("#reset-bg").click(function () {

    $("#profile-card").css({
      "background-color": "white",
      "color": "#333"
    });

  });


  // 4. HIDE & SHOW

  $("#hide-photo").click(function () {
    $("#profile-photo").hide("slow");
  });

  $("#show-photo").click(function () {
    $("#profile-photo").show("slow");
  });

  $("#toggle-bio").click(function () {
    $("#student-bio").toggle();
  });


  // 5. FADE

  $("#fade-out").click(function () {
    $("#profile-card").fadeOut();
  });

  $("#fade-in").click(function () {
    $("#profile-card").fadeIn();
  });

  $("#fade-half").click(function () {
    $("#profile-card").fadeTo("slow", 0.5);
  });


  // 6. SLIDE

  $("#slide-up").click(function () {
    $("#skills-list").slideUp();
  });

  $("#slide-down").click(function () {
    $("#skills-list").slideDown();
  });

  $("#slide-toggle").click(function () {
    $("#skills-list").slideToggle();
  });


  // 7. ANIMATE

  $("#animate-card").click(function () {

    $("#profile-card")
      .animate({ marginLeft: "200px" }, 1000)
      .animate({ marginLeft: "0px" }, 1000);

  });


  // 8. EVENTS

  $("#profile-photo").mouseenter(function () {
    $(this).addClass("shadow");
  });

  $("#profile-photo").mouseleave(function () {
    $(this).removeClass("shadow");
  });

  $("#nickname-input").keypress(function (event) {
    $("#output").text("Pressed key: " + event.key);
  });

});