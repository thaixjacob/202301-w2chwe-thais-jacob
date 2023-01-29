const cellGrid = [
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 1],
];

const newCellGrid = [[], [], []];

for (let i = 0; i < cellGrid.length; i++) {
  for (let j = 0; j < cellGrid[i].length; j++) {
    let cell = cellGrid[i][j];

    let neighborsCeels = 0;

    if (cell === 0 && neighborsCeels === 3) {
      newCellGrid[i][j] = 1;
    } else if (cell === 1 && (neighborsCeels < 2 || neighborsCeels > 3)) {
      newCellGrid[i][j] = 0;
    } else {
      newCellGrid[i][j] = cell;
    }
  }
}
