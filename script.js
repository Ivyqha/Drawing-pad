const squareBox = document.getElementById("container") ; 
const boxSize = squareBox.getBoundingClientRect().width; 
const squareBysquare = 20; // to set up a prompt by user 
const numSquares = Math.pow(squareBysquare,2); // squares the number to get numSquares
const cellSize = boxSize /(squareBysquare) - 2 ;
  

for (let i=0; i<numSquares; i++) { 
    const cell = document.createElement ("div"); 
    cell.classList.add("cell"); 
    cell.style.width = `${cellSize}px`; 
    cell.style.height = `${cellSize}px` ; 
    squareBox.appendChild(cell);
}; 


console.log(boxSize)