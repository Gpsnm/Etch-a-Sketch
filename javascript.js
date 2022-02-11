

const button = document.querySelector('button');
const container = document.getElementById('container');
const reloadButton = document.querySelector('#reload')
let gridSize = prompt('What Size Grid Would You Like?');
newGridSize();


// create new grid 

function newGridSize(){
    container.innerHTML = '';
    // container.style.setProperty('grid-template-columns', gridSize,'2fr');
    // container.style.setProperty('grid-template-rows',gridSize,'2fr');
    for (i=0; i< gridSize; i++){
        const  grid = document.createElement('div')
grid.classList.add('grid');
container.appendChild(grid);
grid.onmouseover = function(){
    this.style.backgroundColor = 'black'
    }
}};


// reload button 

reloadButton.addEventListener('click' , () => {
    location.reload()
    newGridSize()
    
});
    
// create grid function 
button.addEventListener('click', () => {
for (i=0; i<256;i++){
const  grid = document.createElement('div')
grid.classList.add('grid');
container.appendChild(grid);
grid.onmouseover = function(){
    this.style.backgroundColor = 'black'
};
}});


