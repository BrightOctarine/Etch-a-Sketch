let colour = "black";
let click = false;

let changeSizeBtn = document.querySelector(".changeSizeBtn");
changeSizeBtn.addEventListener("click", function () {
    let size = changeSize();
    createGrid(size);
})

//This function creates a grid
function createGrid(size) {
    let grindContainer = document.querySelector(".grindContainer")
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let divAmount = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colourDiv)
        gridContainer.insertAdjacentElement("beforeend", div);
    }
}

//This function changes the size of the grid based on what the user inputs
function changeSize() {
    let input = prompt("Enter a size");
    let message = document.querySelector("#message");
    if (input = "") {
        message.innerHTML = "Please enter a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Please enter a number between 1 and 100";
    }
    else {
        return input;
    }
}

function colourDiv() {
    if (colour == "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else if (colourChoice == "white") {
        this.style.backgroundColor = `white`
    }
    else {
        this.style.backgroundColor = `black`

    }
}

function setColour(colourChoice) {
    colour = colourChoice;
}

//This function resets the grid when the button is clicked
function resetGrid() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}