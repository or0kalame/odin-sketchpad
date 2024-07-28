// Initialize variables and make the default grid
let grid = document.getElementById('gridContainer');
let gridSizeText = document.getElementById('gridSize');
let cubeSizeText = document.getElementById('cubeSize');
const DEFAULT_GRID_SIZE = 32;
const DEFAULT_CUBE_SIZE = 15;
buildGrid(DEFAULT_CUBE_SIZE, DEFAULT_GRID_SIZE);
makeGridPaintable();
gridSizeText.textContent = `${DEFAULT_GRID_SIZE} x ${DEFAULT_GRID_SIZE}`;
cubeSizeText.textContent = `${DEFAULT_CUBE_SIZE} x ${DEFAULT_CUBE_SIZE}`;

// Functions
function buildGrid(cubeSize, gridSize) {
    let brush = document.getElementById('brush');
    brush.style.border = 'dashed 3px #f1b963'
    brush.style.opacity = 0.66;
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

function makeGridPaintable(color='black') {
    let gridItems = document.getElementsByClassName('gridItem')
    let mousedown = false;

    grid.addEventListener('mousedown', () => {
        mousedown = true;
    })

    grid.addEventListener('mouseup', () => {
        mousedown = false;
    })

    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mousemove', () => {
            if (mousedown) {
                gridItems[i].style.backgroundColor = color;
            }
        })
    }
}

// Writing and changing the grid information
let buttonPlusGrid = document.getElementById('plusGrid');
let buttonMinusGrid = document.getElementById('minusGrid');
let buttonPlusCube = document.getElementById('plusCube');
let buttonMinusCube = document.getElementById('minusCube');
let newCubeSize = DEFAULT_CUBE_SIZE;
let newGridSize = DEFAULT_GRID_SIZE;

buttonPlusGrid.addEventListener('click', () => {
    if (newGridSize < 128) {
        document.getElementById('gridContainer').innerHTML = '';
        newGridSize *= 2;
        gridSizeText.textContent = `${newGridSize} x ${newGridSize}`;
        buildGrid(newCubeSize, newGridSize);
        makeGridPaintable();
    } else {
        alert('You can\'t make grid size higher!')
    }

});

buttonMinusGrid.addEventListener('click', () => {
    document.getElementById('gridContainer').innerHTML = '';

    newGridSize /= 2;
    gridSizeText.textContent = `${newGridSize} x ${newGridSize}`;
    buildGrid(newCubeSize, newGridSize);
    makeGridPaintable();
});

buttonPlusCube.addEventListener('click', () => {
    document.getElementById('gridContainer').innerHTML = '';

    newCubeSize += 5;
    cubeSizeText.textContent = `${newCubeSize} x ${newCubeSize}`;
    buildGrid(newCubeSize, newGridSize);
    makeGridPaintable();
});

buttonMinusCube.addEventListener('click', () => {
    if (newCubeSize > 5) {
        document.getElementById('gridContainer').innerHTML = '';
        
        newCubeSize -= 5;
        cubeSizeText.textContent = `${newCubeSize} x ${newCubeSize}`;

        buildGrid(newCubeSize, newGridSize);
        makeGridPaintable();
    } else {
        alert('You can\'t make it lower!')
    }
});

// Brush and eraser logic
let brush = document.getElementById('brush');
let eraser = document.getElementById('eraser')

brush.addEventListener('click', () => {
    makeGridPaintable();
    brush.style.opacity = 0.66;
    eraser.style.opacity= 1;
    brush.style.border = 'dashed 3px #f1b963'
    eraser.style.border = '0px'
})

eraser.addEventListener('click', () => {
    makeGridPaintable('white');
    eraser.style.opacity = 0.66;
    brush.style.opacity= 1;
    eraser.style.border = 'dashed 3px #f1b963'
    brush.style.border = '0px'
})

