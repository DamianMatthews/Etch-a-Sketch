// Create elements for sketch pad
const title = document.createElement("h1");
title.id = "title";
title.textContent = "Welcome to \'Etch-A-Sketch\'";
document.body.appendChild(title);

const buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer";
document.body.appendChild(buttonContainer);

const reset = document.createElement("button");
reset.id = "reset";
reset.textContent = "Reset";
buttonContainer.appendChild(reset);

const circle = document.createElement("button");
circle.id = "circle";
circle.textContent = "Circles";
buttonContainer.appendChild(circle);

const squareEtch = document.createElement("button");
squareEtch.id = "squareEtch";
squareEtch.textContent = "Squares";
buttonContainer.appendChild(squareEtch);

const border = document.createElement("button");
border.id = "border";
border.textContent = "Color";
buttonContainer.appendChild(border);

const size = document.createElement("button");
size.id = "size";
size.textContent = "16x16 Grid";
buttonContainer.appendChild(size);

const size2 = document.createElement("button");
size2.id = "size2";
size2.textContent = "50x50 Grid";
buttonContainer.appendChild(size2);

const div = document.createElement("div");
div.classList = "container";
div.id = "container";
document.body.appendChild(div);

// Create grid squares that make up the sketch pad
function createGridSquares (userInput) {

    for (x=0; x<Number(userInput*userInput); x++) {
        const squares = document.createElement("div");
        squares.classList = "squares";
        squares.id = "squares";
        div.appendChild(squares)
} 
// create grid view 
    let setting = "repeat(50, 1fr)"
    let num = setting.replace("50", userInput);
    div.style.gridTemplateColumns = num;
    div.style.gridTemplateRows = num;
    console.log(userInput*userInput);
}

// initialize the grid with 100x100 square grid
createGridSquares(100);

// Assign multiple colors to the sketch 
document.getElementById("border").addEventListener("click", function() {
    changeColor()
});

function changeColor () {
    for (i=0; i<eachSquare.length; i++) {
        eachSquare[i].addEventListener("mouseover", function (e) {
            e.target.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
    }
}

// Set color for mouse to hover and draw on the sketch pad 
const eachSquare = document.getElementsByClassName("squares");

for (i=0; i<eachSquare.length; i++) {
    eachSquare[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
    });
}

// Clear the sketch pad when the reset button is clicked
document.getElementById("reset").addEventListener("click", function() {
    revertBack(),
    createGridSquares(100);
});

// Function to clear the sketch pad
function revertBack (e) {
    for (i=0; i<eachSquare.length; i++) {
        eachSquare[i].style.background = "wheat";
        eachSquare[i].style.color = "wheat";
    }
}

// Make sketch circular in shape
document.getElementById("circle").addEventListener("click",makeCircles);

function makeCircles (e) {
    for (i=0; i<eachSquare.length; i++) {
        eachSquare[i].style.borderRadius = "50px";
}
}

// Make sketch square in shape 
document.getElementById("squareEtch").addEventListener("click",makeSquares);

function makeSquares (e) {
    for (i=0; i<eachSquare.length; i++) {
        eachSquare[i].style.borderRadius = "0px";
}
}

// adjust the size of the grid
document.getElementById("size").addEventListener("click",dropDown);

function dropDown () {
    revertBack(),
    createGridSquares(16);
}

document.getElementById("size2").addEventListener("click",dropDown2);

function dropDown2 () {
    revertBack(),
    createGridSquares(50);
}
