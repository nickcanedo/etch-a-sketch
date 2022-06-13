// set default grid size to 16x16
const grid = document.querySelector(".grid");
let mode = "draw";

let gridDimension = 16;
window.addEventListener("load", gridSize(gridDimension));

// add grid size changing functionality
const sizeBtn = document.querySelector(".size");

// create grid of any size
let drag = false;

function gridSize(size) {
    if (size <= 100) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement("div");
                div.style.backgroundColor = "var(--headline)";
                div.style.width = `${450/size}px`;
                div.style.height = `${450/size}px`;
                div.classList.add("gridSquare")
                div.addEventListener("mousedown", dragOn);
                div.addEventListener("mousemove" , squareClick)
                div.addEventListener("mouseup", dragOff);
                grid.appendChild(div);
            }
        }
    } else {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                const div = document.createElement("div");
                div.style.backgroundColor = "var(--headline)";
                div.style.width = `${450/100}px`;
                div.style.height = `${450/100}px`;
                div.classList.add("gridSquare")
                div.addEventListener("mousedown", dragOn);
                div.addEventListener("mousemove" , squareClick)
                div.addEventListener("mouseup", dragOff);
                grid.appendChild(div);
            }
        }
    }
    
}

// clear grid of child divs
function clearGrid() {
    grid.innerHTML = '';
}

// adding button hover animations
function mouseOver(e) {
    e.target.classList.add("hover");
}

function mouseLeave(e) {
    e.target.classList.remove("hover");
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("mouseover", mouseOver));
buttons.forEach(button => button.addEventListener("mouseleave", mouseLeave));

// adding github icon animation
function githubAddClass(e) {
    e.target.classList.add("fa-bounce");
}

function githubRemoveClass(e) {
    e.target.classList.remove("fa-bounce");
}

const github = document.querySelector(".fa-brands");

github.addEventListener("mouseover", githubAddClass);
github.addEventListener("mouseleave", githubRemoveClass);

// create event listener for color picker (save chosen color in currentColor variable)
let currentColor;

const colorPalette = document.querySelector(".color");

function defaultColor() {
    currentColor = "black";
}
window.addEventListener("load", defaultColor);

colorPalette.addEventListener("input", function(e) {
    currentColor = e.target.value;
});

// manage click event (hover can create unwanted drawing) for grid drawing
function squareClick(e) {
    if (drag) {
        if (mode !== "rainbow") {
            e.target.style.backgroundColor = currentColor;
        } else {
            e.target.style.backgroundColor = randomColor();
        }
        
    }
}

function dragOn() {
    drag = true;
}

function dragOff() {
    drag = false;
}

// clear canvas
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", function(e) {
    clearGrid();
    gridSize(gridDimension);
})

// add slider text to display grid size
const sliderText = document.querySelector(".size");
sliderText.textContent = `${gridDimension} x ${gridDimension}`;

function updateSliderText() {
    sliderText.textContent = `${gridDimension} x ${gridDimension}`;
}

// size-changing slider
const slider = document.querySelector(".slider");

function sliderChange(e) {
    gridDimension = e.target.value;
    updateSliderText();
    clearGrid();
    gridSize(gridDimension);
}

slider.addEventListener("input", sliderChange);

// add eraser functionality
const eraseBtn = document.querySelector(".eraser");

let storageColor;

function eraser(e) {
    mode = "eraser";
    storageColor = currentColor;
    currentColor = "#fffffe";
}

eraseBtn.addEventListener("click", eraser)

// add draw mode functionality
const drawBtn = document.querySelector(".draw");

function drawMode(e) {
    mode = "draw";
    currentColor = storageColor;
}

drawBtn.addEventListener("click", drawMode);

//rainbow mode functionality
const rainbowBtn = document.querySelector(".rainbow");

rainbowBtn.addEventListener("click", rainbowMode);

function rainbowMode() {
    storageColor = currentColor;
    mode = "rainbow";
}

function randomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}