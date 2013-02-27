<div id='button-container'></div>

<script>
  var numberOfButtons = 100;
      var x = numberOfButtons;
  
  while(x > 0) {
    var button = $("<button>");
    
    button.html(x);
      
    button.click(function() {
        var buttonNumber = $(this).html();
      $(this).hide();
      checkGuess(buttonNumber);
    });

    $("#button-container").append(button);
    x = x - 1;
  }
  
   function generateRandomNumber() {
     return Math.round(Math.random()*numberOfButtons);
   }

   function checkGuess(guess) {
     if(guess == num) {
       alert("You got it right! Guess the next number!");
       num = generateRandomNumber();
       $("button").show();
     } else {
       if(guess > num) {
          alert("Wrong! Guess lower!");
       } else if(guess < num) {
          alert("Wrong! Guess higher!");
       }
     }
   }

   var num = generateRandomNumber();
  
</script>