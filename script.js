function Hello()
{
    console.log("Hello, World!");
}

function mod(n, d) 
{
  return ((n % d) + d) % d;
}

function playGame()
{
    let humanChoice = "";
    let humanValue = 0;

    let computerChoice = "";
    let computerValue = 0;

    let humanScore = 0;
    let computerScore = 0;

    let roundNumber = 1;

    function getHumanChoice()
    {
        humanChoice = prompt("Round " + roundNumber + ": " + "Rock, Paper or Scissors?", "")

        if(humanChoice == null)
        {
            humanChoice = "rock";
        }

        humanChoice = humanChoice.toUpperCase();

        if(humanChoice == "ROCK")
        {
            humanValue = 0;
        }
        else if(humanChoice == "PAPER")
        {
            humanValue = 1;
        }
        else if(humanChoice == "SCISSORS")
        {
            humanValue = 2;
        }
        else
        {
            humanChoice = "ROCK";
            humanValue = 0;
        }
    }

    function getComputerChoice()
    {
        computerValue = Math.floor(3 * Math.random());
        
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

    function playRound()
    {
        getHumanChoice();
        getComputerChoice();
        //alert("Human: " + humanChoice + " Computer: " + computerChoice);

        console.log("Human: " + humanChoice + " Computer: " + computerChoice);

        getScore();

        console.log("Human: " + humanScore + " Computer: " + computerScore);

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

    while(roundNumber <= 5)
    {
        let difference = Math.abs(humanScore - computerScore);
        if(difference > 6 - roundNumber)
        {
            break;
        }

        playRound();
    }

    if(humanScore > computerScore)
    {
        alert("Human Wins!");
    }
    else if(humanScore < computerScore)
    {
        alert("Computer Wins!");
    }
    else
    {
        alert("Tie!");
    }
}

playGame();