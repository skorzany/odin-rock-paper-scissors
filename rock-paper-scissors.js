function getComputerChoice() {
    const choices = new Map([
        [0, "rock"],
        [1, "paper"],
        [2, "scissors"],
    ]);
    const choice = Math.floor(Math.random() * choices.size);
    return choices.get(choice);
}

function calculateResult(humanChoice, computerChoice, ruleset) {
    return ruleset.get(humanChoice).indexOf(computerChoice[0]) - 1;
}

const setCase = word => word[0].toUpperCase() + word.substr(1);

function playRound(humanChoice, computerChoice) {
    const RULES = new Map([
        ["rock", "prs"],
        ["paper", "spr"],
        ["scissors", "rsp"],
    ]);

    if (!(RULES.has(humanChoice))) return;

    let msg;
    const result = calculateResult(humanChoice, computerChoice, RULES);
    switch (result) {
        case -1:
            msg = `You lose! ${setCase(computerChoice)} beats ${humanChoice}.`;
            break;
        case 0:
            msg = `It's a tie! You both chose ${humanChoice}.`;
            break;
        case 1:
            msg = `You win! ${setCase(humanChoice)} beats ${computerChoice}.`;
            break;
    }

    return [result, msg];
}

function main() {
    document.body.setAttribute("style", "text-align: center;")

    const controls = document.querySelector("div");
    controls.setAttribute("style", "font-weight: bold;");

    const spans = document.querySelectorAll("span");
    const [roundNumber, roundResult, myScore, cpuScore] = [...spans];

    const playGame = (event) => {
        const WINCONDITION = 5;     //how many points are required to win the game, positive int ONLY
        const target = event.target;
        const roundOutcome = playRound(target.id, getComputerChoice());

        if (roundOutcome) {
            const [winner, message] = [...roundOutcome];
            roundNumber.textContent = +roundNumber.textContent + 1;
            roundResult.textContent = message;
            switch (winner) {
                case -1:
                    cpuScore.textContent = +cpuScore.textContent + 1;
                    break;
                case 1:
                    myScore.textContent = +myScore.textContent + 1;
                    break;
            }
        }
        if (Math.max(+myScore.textContent, +cpuScore.textContent) === WINCONDITION) {
            const prompt = document.createElement("p");
            prompt.innerHTML = "Thank you for playing! Game made by <b>Skorzany</b>.";
            document.body.appendChild(prompt);

            const finalControls = document.createElement("div");

            const finalMsg = document.createElement("p");
            finalMsg.setAttribute("style", "font-weight: bold; color: red;");
            finalMsg.textContent = "GAME OVER.";

            const finalButton = document.createElement("button");
            finalButton.textContent = "Play again";

            finalControls.appendChild(finalMsg);
            finalControls.appendChild(finalButton);
            controls.replaceWith(finalControls);
            document.removeEventListener("click", playGame);
            finalButton.addEventListener("click", () => location.reload());
        }
    }
    document.addEventListener("click", playGame);
}

main();