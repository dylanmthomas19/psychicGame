var gameState = 1;//sets initial gameState to true 
var lives = 10;//player has 10 guesses
var wins = 0;//player starts with no wins
var loss = 0;//player starts with no losses
console.log(lives)
        var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
        var computerGuess = letters[Math.floor(Math.random()*letters.length)]
        console.log(computerGuess)
        document.addEventListener("keydown", (event) => {
            var playerGuess = event.key;
            document.getElementById("guesses").innerText+=playerGuess
            console.log(playerGuess)
          
        if (playerGuess == computerGuess){
            document.getElementById("para1").innerText = "Good job! I've thought of another letter..."
            wins ++;
            lives=10;
            document.getElementById("wins").innerText = wins
            console.log(wins)
            computerGuess = letters[Math.floor(Math.random()*letters.length)]
            console.log(computerGuess)
            document.getElementById("guesses").innerText=""
        }
        else if (playerGuess != computerGuess) {
            lives--
            document.getElementById("para1").innerText="Not that one! You have "+lives+" guesses left..."
        
        
        if (lives == 0){
            loss++
            document.getElementById("lose").innerText=loss;
            document.getElementById("para1").innerText="You lost! Press Spacebar to try again"
            return;
        }}
        })
