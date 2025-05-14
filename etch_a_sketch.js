
const buttonContainer = document.getElementById("buttonContainer");
const gridContainer = document.getElementById("gridContainer");


const resetButton = document.createElement("button");
buttonContainer.appendChild(resetButton);
resetButton.textContent = "Reset Grid";
resetButton.id = "resetButton";






gridContainer.style.border = "2px solid black";




function createGrid (rowCount, columnCount) {
for (let x = 0; x < rowCount; x++) {
for (let y = 0; y < columnCount; y++) {
   const gridDiv = document.createElement("div");
   gridDiv.classList.add("grid-point");
   gridContainer.appendChild(gridDiv);
   gridDiv.style.flex = `0 0 calc(100% / ${rowCount})`;
   gridDiv.addEventListener("mouseover", () => {
   gridDiv.style.backgroundColor = "red";
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
