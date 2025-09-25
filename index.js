let cardEl = document.getElementById("cards-el")
let scoreEl = document.getElementById("score-el")
let isAliveEl = document.getElementById("isAlive-el")
let playerEl = document.getElementById("player-el")
let cards = []
let score = 0
let isAlive = true
let hasBlcakjack = false
let player = {
    name: "hose",
    chips: 150
}
playerEl.textContent = player.name + " " + player.chips
function gameSetting(){
    if (score < 21){
        isAlive = true
        isAliveEl.textContent = "you still in the game"
    }
    else if(score == 21){
        isAlive = true
        hasBlcakjack = true
        isAliveEl.textContent = "you won the blackjack"
    }
    else{
        isAlive = false
        isAliveEl.textContent = "you lost"
    }
}
function startGame(){
    cards.push(Math.floor(Math.random() * 13 + 1))
    cards.push(Math.floor(Math.random() * 13 + 1))
    printCards()
    cardEl.textContent = "Cards  " + cards[0] + " " + cards[1] + " "
    score = cards[0] + cards[1]
    scoreEl.textContent = "Score " +   score 
    gameSetting()
    coinSystem()
}
function newCard(){
    if(isAlive ===true && hasBlcakjack ===false){
         cards.push(Math.floor(Math.random() * 13 + 1))
    printCards()
    for(let i = cards.length-1; i<cards.length; i ++){
        cardEl.textContent += cards[i] + " "
        score += cards[i]
        scoreEl.textContent = "Score " + score
    }
    gameSetting()
    coinSystem()
    }
   
    
}
function printCards(){
    for (let i = 0; i < cards.length; i++){
        if(cards[i] >= 10){
            cards[i] = 10 
        }
        else cards[i] 
    }
}
function startNewGame(){
    cards = []
    startGame()
}
function coinSystem(){
    let totalChips = player.chips
    if(score===21 && isAlive === true){
        totalChips += 10
        player.chips = totalChips
        return playerEl.textContent = player.name + " " + totalChips
    }
    else if ( score > 21 && isAlive === false){
        totalChips -= 10
        player.chips = totalChips
        return playerEl.textContent = player.name + " " + totalChips
    }
    else {
        return playerEl.textContent = player.name + " " + totalChips
    }
}
