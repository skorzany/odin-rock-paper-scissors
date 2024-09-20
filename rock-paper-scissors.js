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