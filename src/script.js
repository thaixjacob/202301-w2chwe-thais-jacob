const cellGrid = [
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 1],
];

const newCellGrid = [[], [], []];

let cell;

const iterateGrid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      cell = grid[i][j];
      let neighboursCeels = 0;
      if (grid[i - 1][j - 1] === 1) {
        neighboursCeels++;
      } else if (grid[i - 1][j] === 1) {
        neighboursCeels++;
      } else if (grid[i - 1][j + 1] === 1) {
        neighboursCeels++;
      } else if (grid[i][j - 1] === 1) {
        neighboursCeels++;
      } else if (grid[i][j + 1] === 1) {
        neighboursCeels++;
      } else if (grid[i + 1][j - 1] === 1) {
        neighboursCeels++;
      } else if (grid[i + 1][j] === 1) {
        neighboursCeels++;
      } else if (grid[i + 1][j] === 1) {
        neighboursCeels++;
      } else if (grid[i + 1][j + 1] === 1) {
        neighboursCeels++;
      } else {
        neighboursCeels = 0;
      }
    }
  }
  return lifeOrDeath(cell, neighboursCeels);
};

const lifeOrDeath = (cell, neighboursCeels) => {
  if (cell === 0 && neighboursCeels === 3) {
    newCellGrid[i][j] = 1;
  } else if (cell === 1 && (neighboursCeels < 2 || neighboursCeels > 3)) {
    newCellGrid[i][j] = 0;
  } else {
    newCellGrid[i][j] = cell;
  }
  console.log(newCellGrid);
};

iterateGrid(cellGrid);
