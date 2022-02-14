

const button = document.querySelector('button');
const container = document.getElementById('container');
const reloadButton = document.querySelector('#reload');


// start game function with ability to choose size of the grid.
button.addEventListener('click' , () => {
    let gridNumber = prompt('What Size Grid Would You Like?');
    newGridSize(gridNumber);
    
});


// reload button 

reloadButton.addEventListener('click' , () => {
    location.reload();
});


// create a new grid with ability to pass a parameter.

function newGridSize(gridNumber){
    container.innerHTML='';
   let gridArea = gridNumber * gridNumber;
    for (i=0; i< gridArea; i++){
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        const  grid = document.createElement('div')
grid.classList.add('grid');
container.appendChild(grid);
grid.onmouseover = function(){
    this.style.backgroundColor = 'black'
    }
}};

                     
    
// create grid function 
// button.addEventListener('click', () => {
// for (i=0; i<256;i++){
// const  grid = document.createElement('div')
// grid.classList.add('grid');
// container.appendChild(grid);
// grid.onmouseover = function(){
//     this.style.backgroundColor = 'black'
// };
// }});


