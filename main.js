const options = document.querySelectorAll(".options");
let playerScore = 0
let computerScore = 0
let draw = 0
let button = document.querySelector('button')
let scoreTab = document.querySelector('.scores')
let h1 = document.createElement('h1')
let closebtn = document.querySelector('#close')
let afterClick = document.querySelector('#afterClick')
const load = document.querySelector('.loader')
window.addEventListener("load", function(){
    load.style.display = 'none'
})
options.forEach((option) => {
  option.addEventListener("click", function () {
    const playerInput = this.value
    const cOptions = ["Scissors", "Rock", "Paper"]
    const computerInput = cOptions[Math.floor(Math.random() * 3)]
    compareInputs(playerInput, computerInput)
    updateMoves(playerInput, computerInput)
    updateScore(playerScore, computerScore, draw)
    afterClick.style.display = 'block'
  })
})


function compareInputs(playerInput, computerInput) {
  const currentMatch = `${playerInput} vs ${computerInput}`;
  if (playerInput === computerInput) {
    alert(`${currentMatch} is a Draw`)
    draw++
    return
  }
  // If player input is rock
  if (playerInput === "Rock") {
    if (computerInput === "Scissors") {
      alert(`${currentMatch} = You Win`)
      playerScore++
    } else {
      alert(`${currentMatch} = Computer Wins`)
      computerScore++
    }
  }
  //If player input is Paper
  else if (playerInput === "Paper") {
    if (computerInput === "Rock") {
      alert(`${currentMatch} = You Win`)
      playerScore++
    } else {
      alert(`${currentMatch} = Computer Wins`)
      computerScore++
    }
  }
  //If player input is scisors
  else {
    if (computerInput === "Paper") {
      alert(`${currentMatch} = You Win`)
      playerScore++
    } else {
      alert(`${currentMatch} = Computer Wins`)
      computerScore++
    }
  }
}
function updateMoves(playerInput, computerInput) {
  document.querySelector('#playerMove').src = `img/${playerInput}.png`
  document.querySelector('#computerMove').src = `img/${computerInput}.png`
}
function updateScore(playerScore, computerScore, draw) {
  document.querySelector('#playerScore').textContent = playerScore
  document.querySelector('#computerScore').textContent = computerScore
  document.querySelector('#draw').textContent = draw  
}

button.addEventListener("click", function () {
  closebtn.style.display = 'block'
    if (playerScore > computerScore) {
      h1.textContent = `Congratulations!!! You have won ${playerScore} times`    
    } else if (computerScore > playerScore ) {
      h1.textContent = `You lost!!! Computer has won ${computerScore} times`
    } else if (computerScore === playerScore) {
      h1.textContent = `It's a tie`
    }
    scoreTab.appendChild(h1)
    scoreTab.style.display = 'block'
  
})
closebtn.addEventListener("click", function () {
  scoreTab.style.display = 'none'
  closebtn.style.display = 'none'
})
