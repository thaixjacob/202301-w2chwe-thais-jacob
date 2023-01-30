import { verifyNeighbours } from "./script.js";

test("creation of cellular grid lines", () => {
  expect(verifyNeighbours()).toBe([
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
  ]);
});
