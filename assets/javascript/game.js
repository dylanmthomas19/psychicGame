var gameState = 1;//sets initial gameState to true 
var lives = 10;//player has 10 guesses
    if (gameState == 1){
        var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        var computerGuess = Math.floor(Math.random()*letters.length)
        console.log(computerGuess)
    }
    if (lives == 0){
        gameState = 0
    }
    else {
        document.getElementById("para1").innerHTML = "Press Spacebar to try again";
        var x = event.keyCode;
        if(x==32)
    }