const storedMoves = [];

let play = (boxId) => {
    const boxMarked = document.getElementById(boxId);
    const playerType = document.getElementById("player"); 
    
    if(playerType.innerText === "O") {
        storedMoves[boxId] = "O"; 
        boxMarked.innerText = "O";
        playerType.innerText = "X"; 
    }
    else if(playerType.innerText === "X") { 
        storedMoves[boxId] = "X";
        boxMarked.innerText = "X";
        playerType.innerText = "O"; 

    }
    
    const topLeft = storedMoves[0]; 
    const topCenter = storedMoves[1];
    const topRight = storedMoves[2];
    const middleLeft = storedMoves[3];
    const middleCenter = storedMoves[4];
    const middleRight = storedMoves[5];
    const bottomLeft = storedMoves[6];
    const bottomCenter = storedMoves[7];
    const bottomRight = storedMoves[8];

    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        window.alert(`${topLeft} wins`);
      }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        window.alert(`${topCenter} wins`);
      }
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        window.alert(`${topLeft} wins`);
      }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        window.alert(`${middleLeft} wins`);
      }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        window.alert(`${bottomLeft} wins`);
      }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        window.alert(`${topRight} wins`);
      }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        window.alert(`${topLeft} wins`);
      }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        window.alert(`${bottomLeft} wins`);
      }
    
    let allMovesCompleted = true; 
    for(let i = 0; i <= 8; i++) {
        if(storedMoves[i] === undefined) {
            allMovesCompleted = false; 
        }
        if(storedMoves === true) {
          window.alert("Cat's Game");
        }
      }
};

