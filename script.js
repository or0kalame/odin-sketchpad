// Initialize variables
let grid = document.getElementById('gridContainer');
const DEFAULT_GRID_SIZE = 32;
const DEFAULT_CUBE_SIZE = 15;
buildGrid(DEFAULT_CUBE_SIZE, DEFAULT_GRID_SIZE);

// Building grid
function buildGrid(cubeSize, gridSize) {
    grid.style.height = `${(cubeSize + 1) * gridSize}px`;
    grid.style.width = `${(cubeSize + 1) * gridSize}px`;

    for (let i = 0; i < gridSize*gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add('gridItem');
        square.style.backgroundColor = 'white';
        square.style.width = `${cubeSize}px`;
        square.style.height = `${cubeSize}px`;
        square.style.border = "solid 0.5px black"
        grid.appendChild(square);
    }
}


// Code for paiting
let gridItems = document.getElementsByClassName('gridItem')
for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mousedown', () => {
        gridItems[i].style.backgroundColor = 'black';
    })
}

// Writing and changing the grid information
let gridSizeText = document.getElementById('gridSize');
let cubeSizeText = document.getElementById('cubeSize');
let buttonPlusGrid = document.getElementById('plusGrid');
let buttonMinusGrid = document.getElementById('minusGrid');
let buttonPlusCube = document.getElementById('plusCube');
let buttonMinusCube = document.getElementById('minusCube');
let newCubeSize = DEFAULT_CUBE_SIZE;
let newGridSize = DEFAULT_GRID_SIZE;
gridSizeText.textContent = `${DEFAULT_GRID_SIZE} x ${DEFAULT_GRID_SIZE}`;
cubeSizeText.textContent = `${DEFAULT_CUBE_SIZE} x ${DEFAULT_CUBE_SIZE}`;

buttonPlusGrid.addEventListener('click', () => {
    document.getElementById('gridContainer').innerHTML = '';

    newGridSize *= 2;
    gridSizeText.textContent = `${newGridSize} x ${newGridSize}`;
    buildGrid(newCubeSize, newGridSize);
});

buttonMinusGrid.addEventListener('click', () => {
    document.getElementById('gridContainer').innerHTML = '';

    newGridSize /= 2;
    gridSizeText.textContent = `${newGridSize} x ${newGridSize}`;
    buildGrid(newCubeSize, newGridSize);
});

buttonPlusCube.addEventListener('click', () => {
    document.getElementById('gridContainer').innerHTML = '';

    newCubeSize += 5;
    cubeSizeText.textContent = `${newCubeSize} x ${newCubeSize}`;
    buildGrid(newCubeSize, newGridSize);
});

buttonMinusCube.addEventListener('click', () => {
    if (newCubeSize > 5) {
        document.getElementById('gridContainer').innerHTML = '';
        newCubeSize -= 5;
        cubeSizeText.textContent = `${newCubeSize} x ${newCubeSize}`;
        buildGrid(newCubeSize, newGridSize);
    } else {
        alert('You can\'t make it lower!')
    }

});
