let gameState = {
    gameBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    player1: undefined,
    player2: undefined
}
const gridDiv = document.getElementById("fullGrid");
const nameInput = document.getElementById('name')
const submitButton = document.getElementById('submit')
const displayName = document.getElementById('yourName')
const displayName2 = document.getElementById('yourName2')
const nameInput2 = document.getElementById('name2')
const submitButton2 = document.getElementById('submit2')

function ticTacToe() {
    for (let numOfRowsMade = 0; numOfRowsMade < gameState.gameBoard.length; numOfRowsMade++) {
        let newRowElement = document.createElement("div");
        newRowElement.classList.add("gridItem");
        let currentJSRow = gameState.gameBoard[numOfRowsMade]; 

        for (let numOfCellsMade = 0; numOfCellsMade < currentJSRow.length; numOfCellsMade++) {
            let newCellElement = document.createElement("div");
            newCellElement.classList.add("gridItem"); 

            if (currentJSRow[numOfCellsMade] != null) {
                newCellElement.textContent = currentJSRow[numOfCellsMade]; 
            } else {
                newCellElement.textContent = 'empty'
            }

            newRowElement.appendChild(newCellElement)
        }

            gridDiv.appendChild(newRowElement); 
    }
    
};

function playerXMove(event){
    const target = event.target
    if(target.textContent == 'empty'){
        target.textContent = 'X'
    }
}
function playerOMove(event){
    const target = event.target
    if(target.textContent == 'empty'){
        target.textContent = 'O'
    }
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
submitButton.addEventListener('click', nameYourself)
submitButton2.addEventListener('click', nameYourself2)


