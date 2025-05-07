const container = document.getElementById("container");

function createGrid (rowCount, columnCount) {
for (let x = 0; x < rowCount; x++) {
for (let y = 0; y < columnCount; y++) {
   const gridDiv = document.createElement("div");
   gridDiv.classList.add("grid-point");
   container.appendChild(gridDiv);
   gridDiv.textContent = ".";
  }
 }
};

console.log;
createGrid(16, 16);

console.log;

