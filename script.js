// 1. Make the computer chose it weapon (rock, paper, scissor)

function getComputerChoice () {
        const weaponArray = ["ROCK", "PAPER", "SCISSORS"];
                let randomIndex = Math.floor(Math.random() * weaponArray.length);
                let randomWeapon = weaponArray[randomIndex];
        return randomWeapon;
}

const computerSelection = getComputerChoice();

console.log(`Computer selected: ${computerSelection}`);


// 2. Ask the player his/her weapon of choice (rock paper scissor)

const playerSelection = prompt("Please choose your weapon:\nROCK, PAPER, or SCISSORS?").toUpperCase();
console.log(`You selected: ${playerSelection}`);

// 3. Actual Game

function playRound (humanPick, cpuPick) {
        if (humanPick == "ROCK") {
                switch (cpuPick) {
                        // a. If Player = Rock, CPU = Rock; TIE
                        case ("ROCK"):
                        console.log("Tie game! You both choose ROCK");
                        return "TIE";
                        break;

                        // b. If Player = Rock, CPU = Paper; You Lose
                        case ("PAPER"):
                        console.log("You LOSE! Computer chose PAPER. Paper beats Rock!");
                        return "LOSE";
                        break;

                         // c. If Player = Rock, CPU = Scissor, You WiN
                        case ("SCISSORS"):
                        console.log("You WIN! Computer chose SCISSORS. Rock beats Scissors!");
                        return "WIN";
                        break;
                }
        } else if (humanPick == "PAPER") {
                switch (cpuPick) {
                        // a. If Player = Paper, CPU = Rock; You WIN
                        case ("ROCK"):
                        console.log("You WIN! Computer chose ROCK. Paper beats Rock!");
                        return "WIN";
                        break;

                        // b. If Player = Paper, CPU = Paper; TIE
                        case ("PAPER"):
                        console.log("Tie game! You both choose PAPER");
                        return "TIE";
                        break;

                        // c. If Player = Paper, CPU = Scissor; You LOSE
                        case ("SCISSORS"):
                        console.log("You LOSE! Computer chose SCISSORS. Scissors beat Paper!");
                        return "LOSE";
                        break;
                }
        } else if (humanPick == "SCISSORS") {
                switch (cpuPick) {
                        // a. If Player = Scissor, CPU = Rock; You Lose
                        case ("ROCK"):
                        console.log("You LOSE! Computer chose ROCK. Rock beats Scissors!");
                        return "LOSE";
                        break;

                        // b. If Player = Scissor, CPU = Paper; You Win
                        case ("PAPER"):
                        console.log("You WIN! Computer chose Paper. Scissors beat Paper!");
                        return "WIN";
                        break;

                        // c. If Player = Scissor, CPU = Scissor; TIE
                        case ("SCISSORS"):
                        console.log("Tie game! You both choose PAPER");
                        return "TIE";
                        break;
                }
        }
}
      
playRound(playerSelection, computerSelection);
        
//4. Play the game with Best-of-Five series. Show the Game #, Score for each round.

function game() {
        //a. One round is equivalent to one playRound().
        playRound(playerSelection, computerSelection)
        
        //b. Create a scoreboard for player and computer.
        let 
        
        //b. For every round, winner and loser will be displayed, and accumulated scores will be shown.
        // - if function returns WIN, +1 to the PLAYER.
        if (playRound() == 'WIN')
                // - if function returns TIE, do nothing.
                // - if function returns LOSE, +1 to the COMPUTER.
        //c. Repeat playRound() five times.

}

//5. First player to score 3 wins the GAME.

              