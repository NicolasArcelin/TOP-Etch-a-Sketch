//Creates a sketch pad 
function divAdd () {
    const gridContainer = document.querySelector('.gridContainer');
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    gridContainer.appendChild(newDiv);
}

for (let i = 0; i < 256; i++) {
    divAdd();
};


