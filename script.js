let sizeInput = 16;

//Creates a sketch pad 

function divAdd () {
    const gridContainer = document.querySelector('.gridContainer');
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    gridContainer.appendChild(newDiv);
}

function divRemove () {
    const gridContainer = document.querySelector('.gridContainer');
    let gridLastChild = gridContainer.lastElementChild;
    while (gridLastChild) {
        gridContainer.removeChild(gridLastChild);
        gridLastChild = gridContainer.lastElementChild;
    }
};

//Hover detail below
let hoverColor = () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
            grid.addEventListener('mouseover', function () {
            grid.style.setProperty('background-color', 'black')
        });
            grid.addEventListener('mouseout', function () {
            grid.style.setProperty('background-color', 'white')
        });
    })
};

let sizeLoop = () => {
    divRemove();
    for (let i = 0; i < (sizeInput*sizeInput); i++) {
    divAdd();
    console.log('looped');
    }
    hoverColor();
};

sizeLoop();



//Change size of drawing pad

const input = document.getElementById('gridSizeInput');

input.addEventListener('change', (e) => {
    sizeInput = input.value;
// console.log((sizeInput));
    root.style.setProperty('--size', sizeInput);
    sizeLoop();
});

const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const gridSize = rootStyles.getPropertyValue('--size')
// console.log(gridSize);
