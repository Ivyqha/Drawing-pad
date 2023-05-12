
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
//grid must be between 0-100 
function userInput () {
    let input = -1 ;
    while (input < 0 || input>100 ) {
        input = prompt ("How many boxes per side?");
    } 
    createGrid(input); 
}

userInput (); 

// set hover motion over drawing pad 

const cells = document.querySelectorAll(".row-lines");

cells.forEach(cell => { 
    cell.addEventListener("mouseover", function(){
        this.style.backgroundColor = "black"; 
    }); 
}); 

//creating a clear-grid button
//this clears the drawing the pad
var clearBtn = document.createElement ("button"); 
clearBtn.classList.add("clearButton");
var clearText = document.createTextNode("Clear Grid"); 
clearBtn.appendChild(clearText); 
var clearGr = document.getElementById("clear-grid"); 
clearGr.appendChild(clearBtn); 


function clearGrid () { 
    const allCells = document.querySelectorAll (".row-lines"); 
    allCells.forEach(cell => { 
        cell.style.backgroundColor = "" ; 
    }); 
    
}; 
clearBtn.addEventListener("click", clearGrid); 


//creating a new grid button 
//clears grid and option to change grid size 

var newBtn = document.createElement ("button"); 
newBtn.classList.add ("newButton"); 
var newText = document.createTextNode("New Grid"); 
newBtn.appendChild(newText); 
var newGrid = document.getElementById("new-grid"); 
newGrid.appendChild(newBtn); 

function reloadGame () { 
    location.reload (); 
}
function changeGrid () { 
    clearGrid(); 
    reloadGame ();
}; 

newBtn.addEventListener("click", changeGrid); 

// create a standard grid size 16x16 on landing page 



