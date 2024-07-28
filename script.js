// Initialize variables
let grid = document.getElementById('gridContainer');
let defaultGridSize = 32;
let defaultCubeSize = 15;

// Building grid
grid.style.height = `${(defaultCubeSize + 1) * defaultGridSize}px`;
grid.style.width = `${(defaultCubeSize + 1) * defaultGridSize}px`;

for (let i = 0; i < defaultGridSize*defaultGridSize; i++) {
    let square = document.createElement('div');
    square.classList.add('gridItem');
    square.style.backgroundColor = 'white';
    square.style.width = `${defaultCubeSize}px`;
    square.style.height = `${defaultCubeSize}px`;
    square.style.border = "solid 0.5px black"
    grid.appendChild(square);
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

gridSizeText.textContent = `${defaultGridSize} x ${defaultGridSize}`;
cubeSizeText.textContent = `${defaultCubeSize} x ${defaultCubeSize}`;

buttonPlusGrid.addEventListener('click', () => {
    defaultGridSize += defaultGridSize;
});