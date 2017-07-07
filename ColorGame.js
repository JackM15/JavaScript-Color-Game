var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBTN = document.querySelector("#easyBtn");
var hardBTN = document.querySelector("#hardBtn");

//show the picked value at the top of the page in the h1
colorDisplay.textContent = pickedColor;

//easy button
easyBTN.addEventListener("click", function() {
    easyBTN.classList.add("selected");
    hardBTN.classList.remove("selected");
    numberOfSquares = 3;
    h1.style.backgroundColor = "steelblue";
    //generate new colours + pick one + set text in h1
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    //3 colours and hide the last 3
    for (var i = 0; i< squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

//hard button
hardBTN.addEventListener("click", function() {
    hardBTN.classList.add("selected");
    easyBTN.classList.remove("selected");
    numberOfSquares = 6;
    h1.style.backgroundColor = "steelblue";
    //generate new colours + pick one + set text in h1
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    //3 colours and hide the last 3
    for (var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

//reset button event listener
resetButton.addEventListener("click", function() {
    //generate new colours
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //set the text content back to New Colors
    this.textContent = "New Colors";
    //change the colors of the squares
    for (var i = 0; i< squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    //reset the h1 color
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

//colour the squares
for(var i = 0; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to suqares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

//change colours of the page to the correct ones
function changeColors(colorString) {
    //loop through all squares
    for (var i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = colorString;
    }   
}

//pick a random colour by generating a random number with a max value of the length of our array.
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate array of colours
function generateRandomColors(number) {
    //make an array
    var myArray = [];
    //add num random colors to array
    for (var i = 0; i < number; i++) {
        //get random color and push into array
        myArray.push(randomColor());
    }
    //return the array
    return myArray;
}

//random colour generator
function randomColor() {
    //pick a "red" 0-255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" 0-255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" 0-255
    var blue = Math.floor(Math.random() * 256);
    //rgb string build
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}