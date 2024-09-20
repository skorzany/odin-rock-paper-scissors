function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random()*choices.length);

    return choices[choice];
}

for (let i = 0; i < 3; i++){
    console.log(getComputerChoice());
}