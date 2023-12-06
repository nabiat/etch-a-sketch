const body = document.querySelector('body');
const button = document.querySelector('button');
const gridContainer = document.querySelector('.container');

function userResponse() {
    let dimension = prompt("What do you want your grid dimension to be? [1-100]");
    while (parseInt(dimension) <= 0 || parseInt(dimension) > 100) {
        dimension = prompt("The last dimension was not valid. Enter a dimension" + 
        " between [1-100].");
    }
    return parseInt(dimension);
}

function changeColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = 'background-color: black;';
        });
    });
}

function drawGrid(dimension=20) {    
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < dimension; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
    body.appendChild(gridContainer);
    changeColor();
}

drawGrid();

button.addEventListener('click', () => {
    let dimension = userResponse();

    gridContainer.textContent = '';

    drawGrid(dimension);
});
