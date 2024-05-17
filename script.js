const choicesPlayer = document.querySelectorAll('.player .choice')
const choices = ['batu', 'gunting', 'kertas'];
// const refreshButton = document.getElementById('resfresh')

let playerChoice = null;

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

choicesPlayer.forEach(choicePlayer => {
  choicePlayer.addEventListener('click', function() {
  
    // menghapus player active
    document.querySelectorAll('.player .choice').forEach(choice => {
      choice.classList.remove('active');
    });
    playerChoice = this.getAttribute('data-choice');
    this.classList.add('active');

    // console.log(playerChoice);

    // Computer random select
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // console.log(computerChoice);

    // menghapus computer active
    document.querySelectorAll('.computer .choice').forEach(choice => {
      choice.classList.remove('active');
    })

    document.querySelector(`.computer .choice[data-choice="${computerChoice}"]`).classList.add('active');

    // player vs computer
    let result = '';

    if (playerChoice === computerChoice) {
      result = 'Draw!';
    } else if (
      (playerChoice === 'batu' && computerChoice === 'gunting') ||
      (playerChoice === 'gunting' && computerChoice === 'kertas') ||
      (playerChoice === 'kertas' && computerChoice === 'batu')
    ) {
      result = 'Player Win!';
    } else {
      result = 'Comp Win!';
    }

    if(result === 'Draw!') {
      document.getElementById('result').classList.add('result-draw')
    } else {
      document.getElementById('result').classList.remove('result-draw')
    }

    
    document.getElementById('result').classList.add('result');
    document.getElementById('result').textContent = result;

    if(result === 'Player Win!') {
      playerScore+=1;
    }else if (result === 'Comp Win!') {
      computerScore+=1;
    }else if(result === 'Draw!') {
      drawScore+=1;
    }

    document.querySelector('.playerScore').textContent= `Player(${playerScore})`;
    document.querySelector('.computerScore').textContent= `Computer(${computerScore})`;
      
    

    // console.log(result);
    // console.log('Player Score: ', playerScore);
    // console.log('Computer Score: ', computerScore);
    // console.log('Draw: ', drawScore);

  })
})








