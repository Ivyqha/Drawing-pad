let defaultStyle = {  
    border:"2px solid black",
    color: "black",
}; 
let hoverStyle = { 
    border: "2px solid rgb(190, 190, 235)",
    color: "rgb(94, 94, 160)" 
}; 


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


// creating standard and rainbow pen
let isDrawing = false; 

function standardPen() { 
    const cells = document.querySelectorAll(".row-lines");
    cells.forEach(cell => { 
        cell.addEventListener("mousedown", () => {
            isDrawing = true; 
        }); 

        cell.addEventListener("mouseup", () => {
            isDrawing = false; 
        }); 

        cell.addEventListener("mousemove", (event) => {
            if (isDrawing) {
                cell.style.backgroundColor = "black"; 
            }
        })
    }); 

}; 

function rainbowPen () { 
    const cells = document.querySelectorAll(".row-lines");
    cells.forEach(cell => { 
        cell.addEventListener("mousedown", () => {
            isDrawing = true; 
        }); 

        cell.addEventListener("mouseup", () => {
            isDrawing = false; 
        }); 

        cell.addEventListener("mousemove", (event) => {
            if (isDrawing) {
                const randomColor = getRandomColor(); 
            cell.style.backgroundColor = randomColor; 
            };
        });
    }); 
}; 


let clickCount = 0; 

function pen () { 
    standardPen(); 
}; 


//creating a rainbow button
var rainbowBtn = document.createElement ("button"); 
rainbowBtn.classList.add("rainbowButton");
var rainbowText = document.createTextNode("Rainbow"); 
rainbowBtn.appendChild(rainbowText); 
var rainbow = document.getElementById("rainbow"); 
rainbow.appendChild(rainbowBtn); 
rainbowBtn.addEventListener("click", rainbowPen); 

let rainbowBtnActive = false ; 

rainbowBtn.addEventListener("click", function (){

    clickCount++; 
    
    if (clickCount % 2 === 0) { 
        rainbowBtnActive = false;
        pen (); 
        Object.assign(rainbowBtn.style, defaultStyle); 
    } else {
        rainbowBtnActive = true;
        rainbowPen(); 
        Object.assign (rainbowBtn.style, hoverStyle); 
    }   
});

//creating eraser button 
var eraserBtn = document.createElement ("button"); 
eraserBtn.classList.add("eraseButton");
var eraserText = document.createTextNode("Eraser"); 
eraserBtn.appendChild(eraserText); 
var eraser = document.getElementById("eraser-button"); 
eraser.appendChild(eraserBtn); 

let eraserBtnActive = false; 

eraserBtn.addEventListener("click", function (){

    clickCount++; 
    
    if (clickCount % 2 === 0) { 
        eraserBtnActive = false;
        pen (); 
        Object.assign(eraserBtn.style, defaultStyle); 
    } else{
        eraserBtnActive = true;
        erase (); 
        Object.assign (eraserBtn.style, hoverStyle); 
    }   

    if (rainbowBtnActive === true && eraserBtnActive === true) { 
        erase (); 
    } else if (rainbowBtnActive === true && eraserBtnActive === false) { 
        rainbowPen(); 
    };
});

function erase () { 
    const cells = document.querySelectorAll(".row-lines");
    cells.forEach(cell => { 
        cell.addEventListener("mousedown", () => {
            isDrawing = true; 
        }); 

        cell.addEventListener("mouseup", () => {
            isDrawing = false; 
        }); 

        cell.addEventListener("mousemove", (event) => {
            if (isDrawing) {
                cell.style.backgroundColor = "aliceblue"; 
            }
        })
    }); 
}; 

eraserBtn.addEventListener("mouseover", function () {
    Object.assign(eraserBtn.style, hoverStyle); 
}); 
eraserBtn.addEventListener ("mouseout", function () {
    if (eraserBtnActive === false) { 
        Object.assign(eraserBtn.style, defaultStyle); 
    };
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
clearBtn.addEventListener("mouseover", function () {
    Object.assign(clearBtn.style, hoverStyle);  
}); 
clearBtn.addEventListener("mouseout", function () {
    Object.assign(clearBtn.style, defaultStyle);
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
    standardPen(); 
}; 

newBtn.addEventListener("click", changeGrid); 
newBtn.addEventListener("mouseover", function () {
    Object.assign(newBtn.style, hoverStyle);  
}); 
newBtn.addEventListener("mouseout", function () {
    Object.assign(newBtn.style, defaultStyle);
});



function startGame() { 
    standardPen(); 
}; 

createGrid(16); 
startGame(); 

