
function createGrid (n) {
    const squareBox = document.getElementById("container"); 
  
    //creating column lines and appending to the container 
        for(let i=0; i<n; i++) {
            let columnLine = document.createElement ("div"); 
            columnLine.classList.add("column-lines"); 
            squareBox.appendChild(columnLine);       
        }; 

    //creating row lines and appending it to the columns 
    const smallBox = document.querySelectorAll ('#container div');
    smallBox.forEach(function (e) {
        for (let i=0; i<n; i++) {
        const rowLine = document.createElement ("div"); 
        rowLine.classList.add("row-lines");  
        e.appendChild(rowLine); 
        };
        
    }); 
    
};

//prompt user input for amounts of boxes per side 
function userInput () {
    let input = prompt ("how many boxes per side?"); 
    createGrid(input); 
}

userInput (); 

// set hover motion over drawing pad 

const cells = document.querySelectorAll(".column-lines", ".row-lines");

cells.forEach(cell => { 
    cell.addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow"; 
    }); 
}); 

