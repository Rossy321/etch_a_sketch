const buttonContainer = document.getElementById("buttonContainer");
const gridContainer = document.getElementById("gridContainer");


const resetButton = document.createElement("button");
buttonContainer.appendChild(resetButton);
resetButton.textContent = "Reset Grid";
resetButton.id = "resetButton";






gridContainer.style.border = "2px solid black";

 function randomRGBValue () {
   const r = Math.floor(Math.random() * 256);
   const b =  Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256); 
   return `rgb(${r}, ${g}, ${b})`;
}


function createGrid (rowCount, columnCount) {
for (let x = 0; x < rowCount; x++) {
for (let y = 0; y < columnCount; y++) {
   const gridDiv = document.createElement("div");
   gridDiv.classList.add("gridDiv");
   gridContainer.appendChild(gridDiv);
   gridDiv.style.flex = `0 0 calc(100% / ${rowCount})`;
   gridDiv.hoverCount = 0;
   const randomColor = randomRGBValue();
   gridDiv.addEventListener("mouseover", () => {
   gridDiv.style.backgroundColor = randomColor;
   if (gridDiv.hoverCount < 10) {
      gridDiv.hoverCount++;
      gridDiv.style.opacity = gridDiv.hoverCount * 0.1;
  }
  });
 }
 }
} 

createGrid(16, 16);


resetButton.addEventListener("click", () => { 
   let squares = prompt("Number of squares per side for new grid?");
   if (squares >= 100 ) squares = prompt ("Please enter a number less than 100");
   let squaresNo = Number(squares);
   gridContainer.innerHTML = "";
   createGrid(squaresNo, squaresNo);
   });




      
