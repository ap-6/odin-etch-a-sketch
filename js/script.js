function createGrid (gridDensity) {
    const rowContainer = document.createElement("div");
    rowContainer.style["display"] = "flex";
    
    const gridContainer = document.querySelector("#grid-container");
    const gridSize = 300;
    const gridSizePixel = gridSize.toString() + "px";
    gridContainer.style["width"] = gridSizePixel;
    gridContainer.style["height"] = gridSizePixel;
    gridContainer.classList.add("grid-container");

    const unitSize = gridSize / gridDensity;
    const unitSizePixel = unitSize.toString() + "px";

    //creating rows
    for(let count = 0; count < gridDensity; count++) {
        const gridUnit = document.createElement("div");
        gridUnit.classList.add("grid-unit");
        gridUnit.style["width"] = unitSizePixel;
        gridUnit.style["height"] = unitSizePixel;
        rowContainer.appendChild(gridUnit);
    }

    //stacking rows
    for(let count = 0; count < gridDensity; count++) {
        const rowClone = rowContainer.cloneNode(true);
        gridContainer.appendChild(rowClone);
    }
}

function getGridDensityUser() {
    const densityBtn = document.querySelector("#density-btn");
    const densityInput = document.querySelector("#density-input");
    let gridDensityUser = 16;

    densityBtn.addEventListener("click", () => {
        if (checkValidInput(densityInput.value)) {
            gridDensityUser = +densityInput.value;
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

function checkValidInput(userInput) {
    return Number.isInteger(+userInput) 
            && +userInput > 0 
            && +userInput < 101;
}

function randomColor() {
    let randNumber = Math.floor((Math.random() * 3));
    let colorArray = ["red", "green", "blue"];

    return colorArray[randNumber];
}

function drawOnGrid() {
    const gridContainer = document.querySelector("#grid-container");

    //color draw functionality
    gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.className === "grid-unit") {
            event.target.style["background-color"] = randomColor();
        }
    });
}

function startApp() {
    createGrid(16);
    drawOnGrid();
    getGridDensityUser();
}

startApp();