// 1. Make the computer chose it weapon (rock, paper, scissor)

function getComputerChoice () {
        const weaponArray = ["ROCK", "PAPER", "SCISSORS"];
                let randomIndex = Math.floor(Math.random() * weaponArray.length);
                let randomWeapon = weaponArray[randomIndex];
        return randomWeapon;
}

let computerSelection = getComputerChoice();

console.log(computerSelection)

// 2. Ask the player his/her weapon of choice (rock paper scissor)

let playerSelection = prompt("Please choose your weapon:\nROCK, PAPER, or SCISSORS?").toUpperCase();
console.log(playerSelection);

// 3. Actual Game

function playRound (playerSelection, computerSelection) {
       //PLAYER PICKS ROCK
        if (playerSelection == "ROCK") {
                switch (computerSelection) {
                        // a. If Player = Rock, CPU = Rock; TIE
                        case ("ROCK"):
                        alert("TIE GAME! You both chose ROCK.");
                        break;

                        // b. If Player = Rock, CPU = Paper; You Lose
                        case ("PAPER"):
                        alert("You LOSE! Computer chose PAPER. Paper beats Rock!");
                        break;

                         // c. If Player = Rock, CPU = Scissor, You WiN
                        case ("SCISSORS"):
                        alert("You WIN! Computer chose SCISSORS. Rock beats Scissors!");
                        break;
                }                
        } else {
                console.log('Stop!');
        }
        }
        
        
       
        //PLAYER PICKS PAPER
        // a. If Player = Paper, CPU = Rock; You WIN
        // b. If Player = Paper, CPU = Paper; TIE
        // c. If Player = Paper, CPU = Scissor; You LOSE
        //PLAYER PICKKS SCISSOR
        // a. If Player = Scissor, CPU = Rock; You Lose
        // b. If Player = Scissor, CPU = Paper; You Win
        // c. If Player = Scissor, CPU = Scissor; TIE  
        
//4. Play the game with Best-of-Five series. Show the Game #, Score for each round.
//5. First player to score 3 wins the GAME.