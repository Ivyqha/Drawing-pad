
function createGrid (r,c) {
    const squareBox = document.getElementById("container"); 
  
    //creating column lines and appending to the container 
        for(let i=0; i<r; i++) {
            let columnLine = document.createElement ("div"); 
            columnLine.classList.add("column-lines"); 
            squareBox.appendChild(columnLine);       
        }; 

    //creating row lines and appending it to the columns 
    const smallBox = document.querySelectorAll ('#container div');
    smallBox.forEach(function (e) {
        for (let i=0; i<c; i++) {
        const rowLine = document.createElement ("div"); 
        rowLine.classList.add("row-lines");  
        e.appendChild(rowLine); 
        };
        
    }); 
    
    
};

createGrid(30,30) // (columns, rows)
