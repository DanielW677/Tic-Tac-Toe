let gameState = {
    gameBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    player1: undefined,
    player2: undefined,
 
}
const gridDiv = document.getElementById("fullGrid");
const nameInput = document.getElementById('name')
const submitButton = document.getElementById('submit')
const displayName = document.getElementById('yourName')
const displayName2 = document.getElementById('yourName2')
const nameInput2 = document.getElementById('name2')
const submitButton2 = document.getElementById('submit2')
const winningText = document.getElementById('winningMessage')
const resetGamebttn = document.getElementById('resetbttn')
const botButton = document.getElementById('cpu')

function ticTacToe() {
    for (let numOfRowsMade = 0; numOfRowsMade < gameState.gameBoard.length; numOfRowsMade++) {
        let newRowElement = document.createElement("div");
        newRowElement.classList.add("gridItem");
        let currentJSRow = gameState.gameBoard[numOfRowsMade]; 

        for (let numOfCellsMade = 0; numOfCellsMade < currentJSRow.length; numOfCellsMade++) {
            let newCellElement = document.createElement("div");
            newCellElement.classList.add("gridItem"); 
            newCellElement.id = `${numOfRowsMade}${numOfCellsMade}`

            if (currentJSRow[numOfCellsMade] != null) {
                newCellElement.textContent = currentJSRow[numOfCellsMade]; 
            } else {
                newCellElement.textContent = 'e'
            }

            newRowElement.appendChild(newCellElement)
        }

            gridDiv.appendChild(newRowElement); 
    }
    
};
let win = null
let turn = 1;
function playersTurn(evt){
    const target = evt.target
    console.log(target)
    if(turn == 1 && target.textContent == 'e'){
        target.textContent= 'x'
        gameState.gameBoard[target.id[0]][target.id[1]] = 'x'
        turn =2;
    }else if(turn == 2 && target.textContent =='e'){
        target.textContent = 'o'
        gameState.gameBoard[target.id[0]][target.id[1]] = 'o'
        turn = 1;
    }
    for(i = 0; i < gameState.gameBoard.length; i++){
        //row check
        if(gameState.gameBoard[i][0] == gameState.gameBoard[i][1] && gameState.gameBoard[i][1] == gameState.gameBoard[i][2]){
            win = gameState.gameBoard[i][0]
            console.log(win)
            break
        }
        //col check
        if(gameState.gameBoard[0][i] == gameState.gameBoard[1][i] && gameState.gameBoard[1][i] == gameState.gameBoard[2][i]){
            win = gameState.gameBoard[0][i]
        }
      
    }
    //diag 
    if(gameState.gameBoard[0][0] == gameState.gameBoard[1][1] && gameState.gameBoard[2][2] == gameState.gameBoard[1][1]);
    if(gameState.gameBoard[0][2] == gameState.gameBoard[1][1] && gameState.gameBoard[2][0] == gameState.gameBoard[1][1]);

    if(win != null){
        winningText.textContent = 'Win'
        window.location.reload()
    }

}
function resetGame(){
    window.location.reload()
}
function nameYourself(){
    gameState.player1 = nameInput.value
    displayName.textContent = `Player 1: ${gameState.player1}`
}
function nameYourself2(){
    gameState.player2 = nameInput2.value
    displayName2.textContent = `Player 2: ${gameState.player2}`
}





document.addEventListener('DOMContentLoaded', ticTacToe);
submitButton.addEventListener('click', nameYourself);
submitButton2.addEventListener('click', nameYourself2);
gridDiv.addEventListener('click', playersTurn)
resetGamebttn.addEventListener('click', resetGame)


