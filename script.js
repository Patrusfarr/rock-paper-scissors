const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const body = document.querySelector("body");

rockButton.addEventListener("click", () => playRound(0));
paperButton.addEventListener("click", () => playRound(1));
scissorsButton.addEventListener("click", () => playRound(2));

let humanChoice = "";
let humanValue = 0;

let computerChoice = "";
let computerValue = 0;

let humanScore = 0;
let computerScore = 0;

let roundNumber = 1;

function mod(n, d) 
{
  return ((n % d) + d) % d;
}

function getHumanChoice()
{
    if(humanValue == 0)
    {
        humanChoice = "Rock";
    }
    else if(humanValue == 1)
    {
        humanChoice = "Paper";
    } 
    else
    {
        humanChoice = "Scissors";
    }

    humanChoice = humanChoice.toUpperCase();
}

function humanChoose(choice)
{
    humanChoice = choice;
}

function getComputerChoice()
{
    if(computerValue == 0)
    {
        computerChoice = "Rock";
    }
    else if(computerValue == 1)
    {
        computerChoice = "Paper";
    } 
    else
    {
        computerChoice = "Scissors";
    }

    computerChoice = computerChoice.toUpperCase();
}

function playRound(value)
{
    humanValue = value;
    getHumanChoice();

    computerValue = Math.floor(3 * Math.random());
    getComputerChoice();

    let choices = document.createElement("div");
    choices.textContent = "Human: " + humanChoice + " Computer: " + computerChoice;
    body.appendChild(choices);

    getScore();

    let scores = document.createElement("div");
    scores.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    body.appendChild(scores);

    gameEndCheck();

    roundNumber += 1;
}

function getScore()
{
    let modulo = mod(humanValue - computerValue, 3);

    if(modulo == 1)
    {
        humanScore += 1;
    } 
    else if(modulo == 2)
    {
        computerScore += 1;
    }
}

function gameEndCheck()
{
    let difference = Math.abs(humanScore - computerScore);
    if(difference > 6 - roundNumber || roundNumber >= 5)
    {
        let endDiv = document.createElement("div");

        if(humanScore > computerScore)
        {
            endDiv.textContent = "Human Wins!";
        }
        else if(humanScore < computerScore)
        {
            endDiv.textContent = "Computer Wins!";
        }
        else
        {
            endDiv.textContent = "Tie!" ;
        }

        body.appendChild(endDiv);

        roundNumber = 1;
        humanScore = 0;
        computerScore = 0;
    }
}