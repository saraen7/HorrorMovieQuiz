$(document).ready(function(){

//Clicking on "Okay" after intial load brings up the first question
  $("#introButton").on("click",function(){
    $("#intro").addClass("hide");
    $("#theExorcist").removeClass("hide");
  });

$("#theExorcist > form").on("click",function(){
  if($(".correct").is(":checked")){
    $("#theExorcist p").text("That's right! The horror genre has never gotten much love from the Academy. Though there still seems to be a bias against scary movies during awards season, The Exorcist earned 10 Oscar nominations in 1974, including a Best Supporting Actress nod for Linda Blair, who was just 15 years old at the time.");
  } else {
    $("#theExorcist p").text("That's wrong! The horror genre has never gotten much love from the Academy. Though there still seems to be a bias against scary movies during awards season, The Exorcist earned 10 Oscar nominations in 1974, including a Best Supporting Actress nod for Linda Blair, who was just 15 years old at the time.");
  }
  $("#theExorcistButton").removeClass("hidden");
  $("#theExorcistButton").on("click",function(){
    $("#psycho").removeClass("hide");
    $("#theExorcist").addClass("hide");
  });

});

});
