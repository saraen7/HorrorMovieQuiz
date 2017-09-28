$(document).ready(function(){

var score = 0;

//Clicking on "Okay" after intial load brings up the first question
  $("#introButton").on("click",function(){
    $("#intro").addClass("hide");
    $("#theExorcist").removeClass("hide");
  });

//The Exorcist
$("#theExorcist > form").on("click",function(){
  if($("#theExorcist > form > .correct").is(":checked")){
    score++;
    $("#theExorcist p").text("That's right! The horror genre has never gotten much love from the Academy. Though there still seems to be a bias against scary movies during awards season, The Exorcist earned 10 Oscar nominations in 1974, including a Best Supporting Actress nod for Linda Blair, who was just 15 years old at the time.");
  } else {
    $("#theExorcist p").text("That's wrong! The horror genre has never gotten much love from the Academy. Though there still seems to be a bias against scary movies during awards season, The Exorcist earned 10 Oscar nominations in 1974, including a Best Supporting Actress nod for Linda Blair, who was just 15 years old at the time.");
  }
  $("#theExorcistButton").removeClass("hidden");
});

$("#theExorcistButton").on("click",function(){
  $("#psycho").removeClass("hide");
  $("#theExorcist").addClass("hide");
});

//Psycho
$("#psycho > form").on("click",function(){
  if($("#psycho > form > .correct").is(":checked")){
    score++;
    $("#psycho p").text("That's right! Psycho is the first American film to show a toilet on screen. It's also the first American film in which we hear a toilet being flushed.");
  } else {
    $("#psycho p").text("That's wrong! Psycho is the first American film to show a toilet on screen. It's also the first American film in which we hear a toilet being flushed.");
  }
  $("#psychoButton").removeClass("hidden");
});

$("#psychoButton").on("click",function(){
  $("#jaws").removeClass("hide");
  $("#psycho").addClass("hide");
});

//Jaws
$("#jaws > form").on("click",function(){
  if($("#jaws > form > .correct").is(":checked")){
    score++;
    $("#jaws p").text("That's right! While the lack of shark appearances until 1 hour and 21 minutes in works to heighten the tension in <i>Jaws</i>, the real reason the shark isn’t shown in full is because the mechanical shark that was built rarely worked during filming. Director Steven Spielberg had to create inventive ways (like Quint’s yellow barrels) to shoot around the non-functional movie shark. ");
  } else {
    $("#jaws p").text("That's wrong! While the lack of shark appearances until 1 hour and 21 minutes in works to heighten the tension in <i>Jaws</i>, the real reason the shark isn’t shown in full is because the mechanical shark that was built rarely worked during filming. Director Steven Spielberg had to create inventive ways (like Quint’s yellow barrels) to shoot around the non-functional movie shark. ");
  }
  $("#jawsButton").removeClass("hidden");
});

$("#jawsButton").on("click",function(){
  $("#end").removeClass("hide");
  $("#jaws").addClass("hide");
  $("#end > p").text("Congrats! You finished with Horror Movie Trivia Quiz with a score of " + score + " out of 3.");
});


});
