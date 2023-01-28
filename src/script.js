const cellGrid = [
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 1],
];

const newcellGrid = [[], [], []];

const verifyNeighbours = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    //lineas
    let rowGrid = grid[i];
    console.log(rowGrid);
    for (let j = 0; j < rowGrid.length; j++) {
      //columna
      let columnGrid = rowGrid[j];
      console.log(columnGrid);
    }
  }
};

verifyNeighbours(cellGrid);
