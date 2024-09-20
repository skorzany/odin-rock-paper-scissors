function getComputerChoice() {
    const choices = new Map([
        [0, "rock"],
        [1, "paper"],
        [2, "scissors"],
    ]);
    const choice = Math.floor(Math.random()*choices.size);

    return choices.get(choice);
}

// test for getComputerChoice
for (let i = 0; i < 3; i++){
    console.log(getComputerChoice());
}


function getHumanChoice() {
    const choices = new Set(["rock", "paper", "scissors"]);
    const choice = prompt("Enter your choice [rock, paper, scissors]").toLowerCase();

    return choices.has(choice) ? choice : null;
}

// test for getHumanChoice
for (let i = 0; i < 3; i++){
    console.log(getHumanChoice());
}