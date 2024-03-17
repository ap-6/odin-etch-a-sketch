function createGrid (gridDensity) {
    const rowContainer = document.createElement("div");
    const gridContainer = document.querySelector("#grid-container");
    rowContainer.setAttribute("style", "display: flex");
    
    const gridSize = 300;
    const gridSizePixel = gridSize.toString() + "px";
    gridContainer.style["width"] = gridSizePixel;
    gridContainer.style["height"] = gridSizePixel;
    gridContainer.style["border"] = "solid 3px black"

    const unitSize = gridSize / gridDensity;
    const unitSizePixel = unitSize.toString() + "px";

    //creating rows
    for(let count = 0; count < gridDensity; count++) {
        const gridUnit = document.createElement("div");
        gridUnit.style["box-sizing"] = "border-box";
        gridUnit.classList.add("grid-unit");
        gridUnit.style["width"] = unitSizePixel;
        gridUnit.style["height"] = unitSizePixel;
        //gridUnit.textContent = count;
        //gridUnit.style["font-size"] = "5px";
        rowContainer.appendChild(gridUnit);
    }

    //stacking rows
    for(let count = 0; count < gridDensity; count++) {
        const rowClone = rowContainer.cloneNode(true);
        gridContainer.appendChild(rowClone);
    }

    gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.className === "grid-unit") {
            event.target.style["background-color"] = "black";
        }
    });
}

function getGridDensityUser() {
    const densityBtn = document.querySelector("#density-btn");
    const densityInput = document.querySelector("#density-input");
    let gridDensityUser = 16;

    densityBtn.addEventListener("click", () => {
        if (Number.isInteger(+densityInput.value) 
            && +densityInput.value > 0 
            && +densityInput.value < 101) {
            gridDensityUser = densityInput.value;
            densityInput.value = "";
            removeGrid();
            createGrid(gridDensityUser);

        }
    })
}

function removeGrid() {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.textContent = "";
}

function startApp() {
    createGrid(16);
    getGridDensityUser();
}

startApp();