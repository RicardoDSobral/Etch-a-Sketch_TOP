const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'draw';

let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;

const drawButton = document.getElementById('draw');
const reset = document.getElementById('reset-button');
const eraser = document.getElementById('eraser');
const gridSizeButton = document.getElementById('grid-size-button');

drawButton.addEventListener('click', () => draw())
gridSizeButton.addEventListener('click', () => promptForGridSize())
eraser.addEventListener('click', () => erase())
reset.addEventListener('click', () => resetGrid());

function createGrid(size) {
    // Get reference to the grid container
    let gridContainer = document.getElementById('grid-container');

    // For loop to create n columns
    for (let i = 0; i < size; i++){
        // Create div.column#column
        let column = document.createElement('div');
        column.setAttribute('class', 'column');
        column.setAttribute('id', 'column');
        // Nested loop to create n lines
        for (let j = 0; j < size; j++){
            // Create div.line#line
            let line = document.createElement('div');
            line.setAttribute('class', 'line');
            line.setAttribute('id', 'line');
            // Appends to the column
            column.appendChild(line);
        }
        // Appends to the grid-container
        gridContainer.appendChild(column);
    }
}

function paint(){
    let lines = document.querySelectorAll('#line');
    lines.forEach((line) =>line.addEventListener('mouseover',() => paintMode(line, mode)))
}
function paintMode(line, mode){
    switch (mode){
        case 'draw':
            line.style.backgroundColor = 'black';
            break
        case 'erase':
            line.style.backgroundColor = 'white';
            break;
        }
}

function draw(){
    mode = 'draw';
    paint();
}

function erase(){
    mode = 'erase';
    paint();
}

function resetGrid(){
    let lines = document.querySelectorAll('#line');
    lines.forEach((line) => line.style.backgroundColor = 'white');
}

function promptForGridSize(){
    // Remove lines
    const oldCols = document.querySelectorAll('#column');
    oldCols.forEach((col) => col.remove());
    while (true){
        size = parseInt(prompt('Enter grid size'));
        if (!isNaN(size) && size <= 100 && size > 0){
            break;
        }
    }
    createGrid(size);
    paint();
}

createGrid(size);
paint();
