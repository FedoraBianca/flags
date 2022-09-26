import { WinnerTypes } from "./constants";

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getEmptySquaresIndexes = (grid: number[]) => {
  let indexes: number[] = [];
  grid.forEach((value: number | null, index: number) => {
    if ( value === null ) {
      indexes.push(index);
    }
  });
  return indexes;
};

export const isEmpty = (grid: number[]) => getEmptySquaresIndexes(grid).length === 9;

export const getWinner = (grid: number[]): WinnerTypes | null => {
  const winningLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  winningLines.forEach((line: number[], index: number) => {
    if ( grid[line[0]] !== null && grid[line[0]] === grid[line[1]] && grid[line[2]]) {
      return grid[line[0]];
    }
    else if (getEmptySquaresIndexes(grid).length === 0) {
      return WinnerTypes.DRAW;
    }
  });

  return null;
};