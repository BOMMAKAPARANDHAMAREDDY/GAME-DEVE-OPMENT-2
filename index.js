let winningCombinations = [
    [1,2,3],//vertical
    [4,5,6],
    [7,8,9],
    [1,4,7],//horizontal
    [2,5,8],
    [3,6,9],
    [1,5,9],//diagonal
    [3,5,7],
];

const boxElement = document.querySelectorAll(".box")
let click = 0;
let xAttempts = []
let oAttempts = []
let isWon = false;

const msgBox = document.getElementById("message");
const resultBox = document.getElementById("result")

boxElement.forEach((box, index) => {
    box.onclick = handleClick;
});

function handleClick(event) {
    // console.log(event.target);
    // console.log(event.target.id);

    let id = event.target.id;
    let pTag = document.createElement("p");
    pTag.setAttribute("class", "text");
    pTag.style.color = "#F6B343";
    pTag.innerText = "X"

    boxElement[id - 1].appendChild(pTag);
    //console.log(boxElement[id - 1], id);

    if(click % 2 == 0){
        pTag.innerText = "X";
        // boxElement[id - 1].appendChild(pTag);
        xAttempts.push(parseInt(id));
        result(xAttempts, "X");

    }else{
        pTag.innerText = "O";
        // boxElement[id - 1].appendChild(pTag);
        oAttempts.push(parseInt(id));
        result(oAttempts, "O");

    }
    click++;
    if(click == 9 && isWon == false){
        resultBox.style.visibility = "visible"
        msgBox.innerText = "It's a Tie..!!🤝"
    }
    // console.log("X",xAttempts)
    // console.log("O",oAttempts)

    // if(click == 9) {
    //     msgBox.innerText = "It's a Tie..!!"
    // }
}

function result(playersArray, player) {
    // logic
    for(let i = 0; i < winningCombinations.length; i++){
        // console.log(winningCombinations[i])
        let check = true;
        for(let j = 0; j <winningCombinations[i].length; j++){
            // console.log(winningCombinations[i][j]);
            if(!playersArray.includes(winningCombinations[i][j])){
                check = false;
                break;
            }
        }
        if(check){
            isWon = true;
            resultBox.style.visibility = "visible"
            msgBox.innerText = `${player}'s has won..!!😏`;
        }
    }
}

document.getElementById("button").onclick = () => {
    location.reload()
};