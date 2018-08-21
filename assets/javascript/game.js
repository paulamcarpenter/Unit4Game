$(document).ready(function() { 

  var wins = 0;
  var losses = 0;
  var crystalOptions = Array(4);
  var numberOptions = getRandomInt(19, 120);
  var counter = 0;  
  for (var i = 0; i < crystalOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr('id', 'number-'+i);
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    $("#crystals").append(imageCrystal);
  }
  
    $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;  
    console.log("New score: " + counter);
    if (counter === targetNumber) {
      wins++;
      console.log("You win!");
      newGame();
    }

    else if (counter >= targetNumber) {
      losses++;
      console.log("You lose!!");
      newGame();
    }

    $('#total-score').html(counter);
    $('#wins').html(wins);
    $('#losses').html(losses);
    }); 

  newGame(); 

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(getRandomInt);
  }  

  function newGame() {
    counter = 0;
    targetNumber = getRandomInt(19, 120);
    $("#number-to-guess").text(targetNumber);
    $('.crystal-image').each(function(i){
      numberOptions = getRandomInt(1, 12); 
    $(this).attr("data-crystalvalue", numberOptions);
    });

  };

});