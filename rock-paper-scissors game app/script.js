let aiEl = Math.floor(Math.random()*3)
let computerMove = ""
let result = ''
let score = JSON.parse(localStorage.getItem('score'))

let button = document.querySelector('#btn')

if(!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

button.addEventListener('click', function(){
    aiEl = Math.floor(Math.random()*3) + 1
    if(aiEl === 2){
        computerMove = 'Paper'
        result = 'you lose!'
    }else if(aiEl === 3){
        computerMove = 'Scissors'
        result = 'you win!'
    }else{
        computerMove = "Rock"
        result = 'you tie!'
    }

    if(result === 'you win!'){
        score.wins += 1
    }else if(result === 'you lose!'){
        score.losses += 1
    }else{
        score.ties += 1
    }

    document.querySelector('#score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

    document.querySelector('#result').innerHTML = result
    document.querySelector('#move').innerHTML = `You <img src="rock-emoji.png">
    <img src="${computerMove}-emoji.png"> Computer`

    // alert(`you picked rock, computer picked ${computerMove}, ${result}
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
})

document.querySelector('#paper').addEventListener('click', function(){
    aiEl = Math.floor(Math.random()*3) + 1
    if(aiEl === 1){
        computerMove = 'Rock'
        result = 'you win!'
    }else if(aiEl === 3){
        computerMove = 'Scissors'
        result = 'you lose!'
    }else{
        computerMove = "Paper"
        result = 'you tie'
    }

    if(result === 'you win!'){
        score.wins += 1
    }else if(result === 'you lose!'){
        score.losses += 1
    }else{
        score.ties += 1
    }

    document.querySelector('#score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

    document.querySelector('#result').innerHTML = result
    document.querySelector('#move').innerHTML = ` You <img src="paper-emoji.png">
    <img src="${computerMove}-emoji.png"> Computer`

    
})

document.querySelector('#scissors').addEventListener('click', function(){
    aiEl = Math.floor(Math.random()*3) + 1
    if(aiEl === 1){
        computerMove = 'Rock'
        result = 'you lose!'
    }else if(aiEl === 2){
        computerMove = 'Paper'
        result = 'you win!'
    }else{
        computerMove = "Scissors"
        result = 'you tie'
    }
    if(result === 'you win!'){
        score.wins += 1
    }else if(result === 'you lose!'){
        score.losses += 1
    }else{
        score.ties += 1
    }

    

    localStorage.setItem('score',JSON.stringify(score))

    document.querySelector('#score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

    document.querySelector('#result').innerHTML = result
    document.querySelector('#move').innerHTML = `You <img src="scissors-emoji.png">
    <img src="${computerMove}-emoji.png"> Computer`
})


function displayScore(){
    document.querySelector('#score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}