var gameState = 1;//sets initial gameState to true 
var lives = 10;//player has 10 guesses
var wins = 0;
    if (gameState == 1){
        var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        var computerGuess = letters[Math.floor(Math.random()*letters.length)]
        console.log(computerGuess)
        document.addEventListener("keydown", (event) => {
            var playerGuess = event.key;
            document.getElementById("guesses").innerText = playerGuess
            console.log(playerGuess)
          
        if (playerGuess == computerGuess){
            document.getElementById("para1").innerText = "Good job! I've thought of another letter..."
            wins ++;
            document.getElementById("wins").innerText = wins
            console.log(wins)
            computerGuess = letters[Math.floor(Math.random()*letters.length)]
            console.log(computerGuess)
        }
        else {

        }
        })
    }
    if (lives == 0){
        gameState = 0
    }
    // else {
    //     document.getElementById("para1").innerHTML = "Press Spacebar to try again";
    //     var x = event.keyCode;
    //     if(x==32);
    // }