let mainContainer = document.querySelector(".main-container");
let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let playAgainBtn = document.querySelector(".playAgain-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

//for input-box 
let playerForm = document.querySelector(".player");
let playerName1 = document.querySelector("#p1");
let playerName2 = document.querySelector("#p2");
let startBtn = document.querySelector("#start-btn");

let Name1 = "";
let Name2 = "";









let turnO = true; //player"X" and player"O"

const winPattern = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let startGame = () => {
    mainContainer.classList.remove("main-container");
    playerForm.classList.add("remove-userForm");
    
}

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    container.classList.remove("hide-container");
    resetBtn.classList.remove("hide-resetBtn");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //player O
            box.innerText = "O";
            turnO = false;
        } else {
            //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide-container");
    resetBtn.classList.add("hide-resetBtn");

}

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disabledBoxes();
                showWinner(pos1Val);
            }
        }
    }
}

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);