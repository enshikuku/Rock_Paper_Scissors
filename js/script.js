// Selectors
    // Preloader
    let load = document.querySelector(".loader")
    // Options
    const options = document.querySelectorAll(".option")
    // initialize variables 
    let playerScore = 0
    let computerScore = 0
    let compare = document.querySelector('#compare')
    let choiceYouChoosed = document.querySelector('#choiceYouChoosed')
    let choiceComputerChoosed = document.querySelector('#choiceComputerChoosed')
options.forEach((option) => {
    option.addEventListener("click", function () {
        let playerInput = this.value
        let cOptions = ["scissors", "rock", "paper"]
        let computerInput = cOptions[Math.floor(Math.random() * 3)]
        compareInputs(playerInput, computerInput)
        updateMoves(playerInput, computerInput)
        updateScore(playerScore, computerScore)
        if (playerScore === 5 || computerScore === 5) {
            winner(playerScore, computerScore)
            document.querySelector('#outcome').style.display = 'block'   
        }
    })
})

window.addEventListener("load", function(){
    load.style.display = 'none'
})

function compareInputs(playerInput, computerInput) {
    choiceYouChoosed.textContent = playerInput.toUpperCase()
    choiceComputerChoosed.textContent = computerInput.toUpperCase()
    if (playerInput === computerInput) {
        compare.textContent = 'You Draw'
        return
    }
    // If player input is rock
    if (playerInput === "rock") {
        if (computerInput === "scissors") {
            compare.textContent = 'You Win'
            playerScore++
        } else {
            compare.textContent = 'You Loose'
            computerScore++
        }
    }
    //If player input is paper
    else if (playerInput === "paper") {
        if (computerInput === "rock") {
            compare.textContent = 'You Win'
            playerScore++
        } else {
            compare.textContent = 'You Loose'
            computerScore++
        }
    }
    //If player input is scisors
    else {
        if (computerInput === "paper") {
            compare.textContent = 'You Win'
            playerScore++
        } else {
            compare.textContent = 'You Loose'
            computerScore++
        }
    }
}
function updateMoves(playerInput, computerInput) {
    document.querySelector('#choicePlayerChoosed').src = `img/${playerInput}.png`
    document.querySelector('#choiceComputerPlayed').src = `img/${computerInput}1.png`
}
function updateScore(playerScore, computerScore) {
    document.querySelector('#yourScore').textContent = playerScore
    document.querySelector('#computerScore').textContent = computerScore
}
function winner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        document.querySelector('#result').textContent = 'Draw'       
    } else if (playerScore > computerScore) {
        document.querySelector('#result').textContent = 'Player Wins'       
    } else if (playerScore < computerScore) {
        document.querySelector('#result').textContent = 'Computer Wins'       
    }
}