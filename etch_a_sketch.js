
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
   gridDiv.style.width = 960/rowCount + "px";
   gridDiv.style.height = 960/columnCount + "px";
   gridDiv.addEventListener("mouseover", () => {
   gridDiv.style.backgroundColor = "red";
  });
  }
 }
}

createGrid(16, 16);


resetButton.addEventListener("click", () => { 
   let squares = prompt("Number of squares per side for new grid?");
   let squaresNo = Number(squares);
   gridContainer.innerHTML = "";
   createGrid(squaresNo, squaresNo);
   });
