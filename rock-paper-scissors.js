function getComputerChoice() {
    const choices = new Map([
        [0, "rock"],
        [1, "paper"],
        [2, "scissors"],
    ]);
    const choice = Math.floor(Math.random()*choices.size);

    return choices.get(choice);
}

// // test for getComputerChoice
// for (let i = 0; i < 3; i++){
//     console.log(getComputerChoice());
// }


function getHumanChoice() {
    const choices = new Set(["rock", "paper", "scissors"]);
    const choice = prompt("Enter your choice [rock, paper, scissors]").toLowerCase();

    return choices.has(choice) ? choice : null;
}

// // test for getHumanChoice
// for (let i = 0; i < 3; i++){
//     console.log(getHumanChoice());
// }


function calculateResult(humanChoice, computerChoice, ruleset) {
    return ruleset.get(humanChoice).indexOf(computerChoice[0]) - 1;
}


// //tests for calculateResult
// const rules = new Map([
//     ["rock", "prs"],
//     ["paper", "spr"],
//     ["scissors", "rsp"],
// ]);

// console.assert(calculateResult("rock", "rock", rules) === 0, "ROCK tie error");
// console.assert(calculateResult("paper", "paper", rules) === 0, "PAPER tie error");
// console.assert(calculateResult("scissors", "scissors", rules) === 0, "SCISSORS tie error");
// console.assert(calculateResult("rock", "paper", rules) === -1, "ROCK lose error");
// console.assert(calculateResult("paper", "scissors", rules) === -1, "PAPER lose error");
// console.assert(calculateResult("scissors", "rock", rules) === -1, "SCISSORS lose error");
// console.assert(calculateResult("rock", "scissors", rules) === 1, "ROCK win error");
// console.assert(calculateResult("paper", "rock", rules) === 1, "PAPER win error");
// console.assert(calculateResult("scissors", "paper", rules) === 1, "SCISSORS win error");


const wordCase = word => word[0].toUpperCase() + word.substr(1);

function playRound(humanChoice, computerChoice) {
    while (humanChoice === null) {
        alert("Your choice was invalid! Try again.");
        humanChoice = getHumanChoice();
    }

    const rules = new Map([
        ["rock", "prs"],
        ["paper", "spr"],
        ["scissors", "rsp"],
    ]);

    const result = calculateResult(humanChoice, computerChoice, rules);
    switch (result) {
        case -1:
            msg = `You lose! ${wordCase(computerChoice)} beats ${humanChoice}.`;
            break;
        case 0:
            msg = `It's a tie! You both chose ${humanChoice}.`;
            break;
        case 1:
            msg = `You win! ${wordCase(humanChoice)} beats ${computerChoice}.`;
            break;
    }

    return msg;
}

// tests for playRound
console.assert(playRound("paper", "paper") === "It's a tie! You both chose paper.", "paper tie error");
console.assert(playRound("rock", "rock") === "It's a tie! You both chose rock.", "rock tie error");
console.assert(playRound("scissors", "scissors") === "It's a tie! You both chose scissors.", "scissors tie error");

console.log(playRound(getHumanChoice(), getComputerChoice()));