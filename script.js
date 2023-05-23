
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
    onclick = function (e) { 
    paintBtn.style.borderColor = "black"; 
    paintBtn.style.color="black";
    eraserBtn.style.borderColor = "black"; 
    eraserBtn.style.color="black";
    };
    
}; 
clearBtn.addEventListener("click", clearGrid);
clearBtn.addEventListener("mouseover", function () {
    clearBtn.style.borderColor = "rgb(190, 190, 235)"; 
    clearBtn.style.color="rgb(94, 94, 160)"; 
});
clearBtn.addEventListener("mouseout", function () {
    clearBtn.style.borderColor ="black"; 
    clearBtn.style.color="black"; 
});

//creating a random colour generator 
function getRandomColor() { 
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}; 

//creating a new grid button 
//clears grid and option to change grid size 

var newBtn = document.createElement ("button"); 
newBtn.classList.add ("newButton"); 
var newText = document.createTextNode("New Grid"); 
newBtn.appendChild(newText); 
var newGrid = document.getElementById("new-grid"); 
newGrid.appendChild(newBtn); 

newBtn.addEventListener("mouseover", function () {
    newBtn.style.borderColor = "rgb(190, 190, 235)"; 
    newBtn.style.color="rgb(94, 94, 160)"; 
});
newBtn.addEventListener("mouseout", function () {
    newBtn.style.borderColor ="black"; 
    newBtn.style.color="black"; 
});



    //prompt user input for amounts of boxes per side 
    //grid must be between 0-100 
    function userInput () {
        let input = -1 ;
        while (input < 1 || input>100 ) {
        input = prompt ("How many boxes per side? (max 100) ");
        } 
    createGrid(input); 
}

function changeGrid () { 
    
    const squareBox = document.getElementById("container");
    while (squareBox.firstChild) { 
        squareBox.removeChild(squareBox.firstChild); 
    };

    userInput(); 

    const cells = document.querySelectorAll(".row-lines");
    cells.forEach(cell => { 
        cell.addEventListener("mouseover", function(){
            const randomColor = getRandomColor(); 
            this.style.backgroundColor = randomColor; 
        }); 
    }); 
    onclick = function (e) { 
        paintBtn.style.borderColor = "black"; 
        paintBtn.style.color="black";
        eraserBtn.style.borderColor = "black"; 
        eraserBtn.style.color="black";
        }; 
}; 

newBtn.addEventListener("click", changeGrid); 

//standard 16x16 grid upon landing page 
createGrid(16); 

// set hover motion over drawing pad 

const cells = document.querySelectorAll(".row-lines");
cells.forEach(cell => { 
    cell.addEventListener("mouseover", function(){
        const randomColor = getRandomColor(); 
        this.style.backgroundColor = randomColor; 
    }); 
}); 

//creating eraser button 
var eraserBtn = document.createElement ("button"); 
eraserBtn.classList.add("eraserButton");
var eraserText = document.createTextNode("Eraser"); 
eraserBtn.appendChild(eraserText); 
var eraser = document.getElementById("eraser-button"); 
eraser.appendChild(eraserBtn); 

eraserBtn.addEventListener("click", function (e) { 
    eraserBtn.style.borderColor = "rgb(190, 190, 235)"; 
    eraserBtn.style.color="rgb(94, 94, 160)"; 
    
    onclick = function (e) {
        const cells = document.querySelectorAll(".row-lines");
            cells.forEach(cell => { 
            cell.addEventListener("mouseover", function(){
                this.style.backgroundColor = "aliceblue"; 

            }); 
        }); 
        paintBtn.style.borderColor = "black"; 
        paintBtn.style.color="black";
    };  
});


//creating pen button 
var paintBtn = document.createElement ("button"); 
paintBtn.classList.add("paintButton");
var paintText = document.createTextNode("Paint"); 
paintBtn.appendChild(paintText); 
var paint = document.getElementById("paint-button"); 
paint.appendChild(paintBtn); 

paintBtn.addEventListener("click", function (e) { 
    paintBtn.style.borderColor = "rgb(190, 190, 235)"; 
    paintBtn.style.color="rgb(94, 94, 160)"; 
    
    onclick = function (e) {
        const cells = document.querySelectorAll(".row-lines");
            cells.forEach(cell => { 
            cell.addEventListener("mouseover", function(){
            const randomColor = getRandomColor(); 
            this.style.backgroundColor = randomColor; 
            });  
        }); 
    };  
    eraserBtn.style.borderColor = "black"; 
    eraserBtn.style.color="black";

}); 


 
