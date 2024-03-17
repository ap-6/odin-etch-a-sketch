function createGrid () {
    const rowContainer = document.createElement("div");
    const gridContainer = document.querySelector("#grid-container");
    rowContainer.setAttribute("style", "display: flex");
    
    const gridSize = 500;
    const gridSizePixel = gridSize.toString() + "px";
    gridContainer.style["width"] = gridSizePixel;
    gridContainer.style["height"] = gridSizePixel;
    //gridContainer.style["box-sizing"] = "border-box";
    gridContainer.style["border"] = "solid 3px black"


    let gridDensity = 16;
    const unitSize = gridSize / gridDensity;
    const unitSizePixel = unitSize.toString() + "px";

    //creating rows
    for(let count = 0; count < gridDensity; count++) {
        const gridUnit = document.createElement("div");
        gridUnit.style["box-sizing"] = "border-box";
        gridUnit.style["border-right"] = "solid 1px black";
        gridUnit.style["border-bottom"] = "solid 1px black";
        gridUnit.style["width"] = unitSizePixel;
        gridUnit.style["height"] = unitSizePixel;
        rowContainer.appendChild(gridUnit);
    }

    //stacking rows
    for(let count = 0; count < gridDensity; count++) {
        const rowClone = rowContainer.cloneNode(true);
        gridContainer.appendChild(rowClone);
        console.log(count);
    }
    

}

createGrid();