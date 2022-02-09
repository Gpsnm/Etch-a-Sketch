

const button = document.querySelector('button');
const container = document.getElementById('container');


// reload button 
const reloadButton = document.querySelector('#reload')
reloadButton.addEventListener('click' , () => {
    location.reload()
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


