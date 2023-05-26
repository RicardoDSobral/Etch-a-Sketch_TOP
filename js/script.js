let size = 16;
const reset = document.getElementById('reset-button');
const gridSizeButton = document.getElementById('grid-size-button');

reset.addEventListener('click', () => resetGrid());
gridSizeButton.addEventListener('click', () => promptForGridSize())

function createGrid(size) {
    // Get reference to the grid container
    let gridContainer = document.querySelector('#grid-container');

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

function draw(){
    let lines = document.querySelectorAll('#line');
    lines.forEach((line) =>line.addEventListener('mouseover',() => paint(line)))
}
function paint(line){
    line.classList.add('hovered');
}

function resetGrid(){
    let lines = document.querySelectorAll('#line');
    lines.forEach((line) => line.classList.remove('hovered'));
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
    draw();
}

createGrid(size);
draw();
