//Algorithm for ROCK-PAPER-SCISSORS
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


function game() {
    
//Make a placeholder for scores
    let humanScore = 0;
    let computerScore = 0;

//Insert for loop for a Best-of-Five Series
    for (let i = 1; i <=5; i++) {
        function getComputerChoice () { //Make the computer chose its weapon (rock, paper, scissor)
                const weaponArray = ["ROCK", "PAPER", "SCISSORS"];
                        let randomIndex = Math.floor(Math.random() * weaponArray.length);
                        let randomWeapon = weaponArray[randomIndex];
                return randomWeapon;
        }
    
    const computerSelection = getComputerChoice(); //Assign computer's weapon function in a variable
    
    console.log(`ROUND ${i}`); //Console log a line declaring the current round/match
    console.log(`Computer selected: ${computerSelection}`);

    //Ask the player his/her weapon of choice (rock paper scissors)
    const playerInput = prompt("Please choose your weapon:\nROCK, PAPER, or SCISSORS?"); 
        if (playerInput === null || playerInput === undefined) {
                alert('Match canceled. Please reload the game.')
                break;
        } else if (playerInput === '') {
                alert(`Option can't be blank. Please reload the game.`);
                break;
        }

    const playerSelection = playerInput.toUpperCase()
        // if (playerSelection !== 'ROCK' || playerSelection !== 'PAPER' || playerSelection !== 'SCISSORS') {
        //         alert(`You picked an invalid item. Please choose between ROCK, PAPER, SCISSORS only.`)
        //         playerInput;
        // }
        

    console.log(`You selected: ${playerSelection}`);
    //Make sure that player's choice (spelling/word choice) is correct. Otherwise, make the round invalid.

        //Invokation of playRound(),     
    if (playRound(playerSelection, computerSelection) === 'WIN') {
        console.log(`RESULT: You WIN! ${playerSelection} beats ${computerSelection}.`);
        ++humanScore; // Add +1 to humanScore;
        } else if (playRound(playerSelection, computerSelection) === 'LOSE') {
        console.log(`RESULT: You LOSE! ${computerSelection} beats ${playerSelection}.`);
        ++computerScore; // Add +1 to computerScore;
        } else if (playRound(playerSelection, computerSelection) === 'TIE'){
        console.log(`RESULT: TIE GAME. You both chose ${playerSelection}`); //Tie Game. Do Nothing.
        } else {
        console.log('INVALID INPUT. ROUND INVALID.')
        }
    
console.log(`SCOREBOARD: YOU: ${humanScore} | COMPUTER: ${computerScore}\n `);

        //SCORING CONDITIONALS (WINNER / LOSER)
   if (humanScore === 3) {
                console.log('CONGRATULATIONS! YOU WIN THE GAME');
                break;
        } else if (computerScore === 3) {
                console.log('YOU LOSE. PLEASE TRY AGAIN.');
                break;
        } else if (i === 5 && humanScore > computerScore) {
                console.log('CONGRATULATIONS! YOU WIN THE GAME');
        } else if (i === 5 && humanScore < computerScore) {
                console.log('YOU LOSE. PLEASE TRY AGAIN.')
        } else if (i === 5 && humanScore === computerScore) {
                console.log('GAME RESULTED TO DRAW. RELOAD TO REMATCH')
        }
    }
}

game();