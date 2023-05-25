
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

let defaultStyle = {  
    border:"2px solid black",
    color: "black",
}; 

let clickedStyle = { 
    border: "2px solid rgb(190, 190, 235)",
    color: "rgb(94, 94, 160)" 
}; 

let hoverStyle = { 
    border: "2px solid rgb(190, 190, 235)",
    color: "rgb(94, 94, 160)" 
}; 

let inactiveStyle = {
    border:"2px solid black",
    color: "black",
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
    
}; 
clearBtn.addEventListener("click", clearGrid);
clearBtn.addEventListener("mouseover", function () {
    Object.assign(clearBtn.style, hoverStyle);  
}); 
clearBtn.addEventListener("mouseout", function () {
    Object.assign(clearBtn.style, inactiveStyle);
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

    const cells = document.querySelectorAll(".row-lines");
    cells.forEach(cell => { 
        cell.addEventListener("mouseover", function(){
            const randomColor = getRandomColor(); 
            this.style.backgroundColor = randomColor; 
        }); 
    }); 
}; 

newBtn.addEventListener("click", changeGrid); 
newBtn.addEventListener("mouseover", function () {
    Object.assign(newBtn.style, hoverStyle);  
}); 
newBtn.addEventListener("mouseout", function () {
    Object.assign(newBtn.style, inactiveStyle);
});

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
eraserBtn.classList.add("eraseButton");
var eraserText = document.createTextNode("Eraser"); 
eraserBtn.appendChild(eraserText); 
var eraser = document.getElementById("eraser-button"); 
eraser.appendChild(eraserBtn); 

let clickCount = 0; 
eraserBtn.addEventListener("click", function () { 

    clickCount ++ 
    
    if (clickCount % 2 === 0) { 
        pen();
        Object.assign(eraserBtn.style, defaultStyle) 
        eraserBtn.classList.remove ("erase");
    } else {
        erase ();
        Object.assign(eraserBtn.style, clickedStyle);
        eraserBtn.classList.remove ("pen");
    }; 

});

function erase () { 
    const cells = document.querySelectorAll(".row-lines");
            cells.forEach(cell => { 
            cell.addEventListener("mouseover", function(){ 
                this.style.backgroundColor = "aliceblue";
            });  
        });  
    eraserBtn.classList.toggle("erase");
    console.log("first click = erase")
}; 

function pen () { 
    const cells = document.querySelectorAll(".row-lines");
            cells.forEach(cell => { 
            cell.addEventListener("mouseover", function(){ 
                const randomColor = getRandomColor(); 
                this.style.backgroundColor = randomColor; 
            });  
        });
    eraserBtn.classList.toggle("pen");
    console.log("second click = pen")
}; 

eraserBtn.addEventListener("mouseover", function () {
    Object.assign(eraserBtn.style, hoverStyle); 
    console.log ("hover")
}); 

eraserBtn.addEventListener ("mouseout", function () {
    if (!eraserBtn.classList.contains("erase")) {
        Object.assign(eraserBtn.style, inactiveStyle); 
    };
    console.log ("unhover")
}); 



/*
//creating pen button 
var paintBtn = document.createElement ("button"); 
paintBtn.classList.add("paintButton");
var paintText = document.createTextNode("Paint"); 
paintBtn.appendChild(paintText); 
var paint = document.getElementById("paint-button"); 
paint.appendChild(paintBtn); 

paintBtn.addEventListener("click", function (e) { 
    onclick = function (e) {
        const cells = document.querySelectorAll(".row-lines");
            cells.forEach(cell => { 
            cell.addEventListener("mouseover", function(){
            const randomColor = getRandomColor(); 
            this.style.backgroundColor = randomColor; 
            });  
        }); 
    };  

    paintBtn.classList.toggle("clicked"); 
    if (paintBtn.classList.contains("clicked")) { 
        Object.assign(paintBtn.style, clickedStyle);
        Object.assign(eraserBtn.style, defaultStyle);
    } else { 
        Object.assign (paintBtn.style, defaultStyle); 
    }; 
});

paintBtn.addEventListener("mouseover", function () {
    Object.assign(paintBtn.style,hoverStyle); 
}); 
paintBtn.addEventListener ("mouseout", function () {
    if (!paintBtn.classList.contains("clicked")) {
        Object.assign(paintBtn.style,defaultStyle); 
    };
}); 

*/