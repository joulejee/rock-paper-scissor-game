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

// function playRound (humanPick, cpuPick) {
//         // a. If Player = Paper, CPU = Rock; You WIN
//         if (humanPick === 'ROCK' && cpuPick === 'ROCK') {
//             console.log('Tie game! You both choose ROCK');
//             return 'TIE';
//          // b. If Player = Rock, CPU = Paper; You Lose
//         } else if (humanPick === 'ROCK' && cpuPick === 'PAPER') {
//             console.log("You LOSE! Computer chose PAPER. Paper beats Rock!");
//             return 'LOSE';
//          // c. If Player = Rock, CPU = Scissor, You WiN
//         } else if (humanPick === 'ROCK' && cpuPick === 'SCISSORS') {
//             console.log("You WIN! Computer chose SCISSORS. Rock beats Scissors!");
//             return 'WIN';
//          // d. If Player = Paper, CPU = Rock; You WIN 
//         } else if (humanPick === 'PAPER' && cpuPick === 'ROCK') {
//             console.log("You WIN! Computer chose ROCK. Paper beats Rock!");
//             return 'WIN';
//         // e. If Player = Paper, CPU = Paper; TIE
//         } else if (humanPick === 'PAPER' && cpuPick === 'PAPER') {
//             console.log("Tie game! You both choose PAPER");
//             return 'TIE';
//         // f. If Player = Paper, CPU = Scissor; You LOSE
//         } else if (humanPick === 'PAPER' && cpuPick === 'SCISSORS') {
//             console.log("You LOSE! Computer chose SCISSORS. Scissors beat Paper!");
//             return 'LOSE';
//         // g. If Player = Scissor, CPU = Rock; You Lose
//         } else if (humanPick === 'SCISSORS' && cpuPick === 'ROCK') {
//             console.log("You LOSE! Computer chose ROCK. Rock beats Scissors!");
//             return 'LOSE';
//         // h. If Player = Scissor, CPU = Paper; You Win
//         } else if (humanPick === 'SCISSORS' && cpuPick === 'PAPER') {
//             console.log("You WIN! Computer chose Paper. Scissors beat Paper!")
//             return 'WIN';
//         // i. If Player = Scissor, CPU = Scissor; TIE
//         } else if (humanPick === 'SCISSORS' && cpuPick === 'SCISSORS') {
//             console.log("Tie game! You both choose SCISSORS");
//             return 'TIE';
//         } else {
//             console.log('INVALID INPUT. PLEASE RELOAD');
//         }
//}


function playRound (humanPick, cpuPick) {
        if (humanPick == "ROCK") {
                switch (cpuPick) {
                        // a. If Player = Paper, CPU = Rock; You WIN
                        case ("ROCK"):
                        // console.log("Tie game! You both choose ROCK");
                        return "TIE";

                        // b. If Player = Rock, CPU = Paper; You Lose
                        case ("PAPER"):
                        // console.log("You LOSE! Computer chose PAPER. Paper beats Rock!");
                        return "LOSE";

                         // c. If Player = Rock, CPU = Scissor, You WiN
                        case ("SCISSORS"):
                        // console.log("You WIN! Computer chose SCISSORS. Rock beats Scissors!");
                        return "WIN";
                }
        } else if (humanPick == "PAPER") {
                switch (cpuPick) {
                        // a. If Player = Paper, CPU = Rock; You WIN
                        case ("ROCK"):
                        // console.log("You WIN! Computer chose ROCK. Paper beats Rock!");
                        return "WIN";

                        // b. If Player = Paper, CPU = Paper; TIE
                        case ("PAPER"):
                        // console.log("Tie game! You both choose PAPER");
                        return "TIE";

                        // c. If Player = Paper, CPU = Scissor; You LOSE
                        case ("SCISSORS"):
                        // console.log("You LOSE! Computer chose SCISSORS. Scissors beat Paper!");
                        return "LOSE";
                }
        } else if (humanPick == "SCISSORS") {
                switch (cpuPick) {
                        // a. If Player = Scissor, CPU = Rock; You Lose
                        case ("ROCK"):
                        // console.log("You LOSE! Computer chose ROCK. Rock beats Scissors!");
                        return "LOSE";

                        // b. If Player = Scissor, CPU = Paper; You Win
                        case ("PAPER"):
                        // console.log("You WIN! Computer chose Paper. Scissors beat Paper!");
                        return "WIN";

                        // c. If Player = Scissor, CPU = Scissor; TIE
                        case ("SCISSORS"):
                        // console.log("Tie game! You both choose PAPER");
                        return "TIE";
                }
        }
}
      
// playRound(playerSelection, computerSelection);
        
//4. Play the game with Best-of-Five series. Show the Game #, Score for each round.

// function game() {
//         //a. One round is equivalent to one playRound().
//         // playRound(playerSelection, computerSelection)
        
//         // //b. Create a scoreboard for player and computer.
//         // let humanScore = 0;
//         // let computerScore = 0;
       
//         // let scoreBoard = `SCOREBOARD = YOU: ${humanScore} | COMPUTER: ${computerScore}`;
        
// //         b. For every round, winner and loser will be displayed, and accumulated scores will be shown.
// //                 - if function returns WIN, +1 to the PLAYER.
//         if (playRound(playerSelection, computerSelection) === 'WIN') {
//                 // ++humanScore;
//                 console.log(`You WIN! ${playerSelection} beats ${computerSelection}.`);
//                 // - if function returns LOSE, +1 to the COMPUTER.
//         } else if (playRound(playerSelection, computerSelection) === 'LOSE') {
//                 console.log(`You LOSE! ${computerSelection} beats ${playerSelection}.`);
//                 // - if function returns TIE, do nothing.
//         } else {
//                 console.log('not working');
//                 // console.log(scoreBoard);
//                 // console.log(scoreBoard);
//                 // console.log('NOT WORKING');
//         }

// }
        
        //c. Repeat playRound() five times.

// game();
//5. First player to score 3 wins the GAME.


function game() {

        let humanScore = 0;
        let computerScore = 0;

        let i = 1;

        for (; i <=5; i++) {
            if (playRound(playerSelection, computerSelection) === 'WIN') {
                console.log(`GAME ${i}: You WIN! ${playerSelection} beats ${computerSelection}.`);
                return ++humanScore;
            } else if (playRound(playerSelection, computerSelection) === 'LOSE') {
                console.log(`Game ${i}: You LOSE! ${computerSelection} beats ${playerSelection}.`);
                return ++computerScore;
            } else {
                console.log('not working');
            }
        }   

        console.log(`SCOREBOARD: YOU: ${humanScore} | COMPUTER: ${computerScore}`)
}

game();



              