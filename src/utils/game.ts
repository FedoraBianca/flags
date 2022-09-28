export enum GameStates {
  NOT_STARTED,
  IN_PROGRESS,
  OVER
};

export enum PlayerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2
}

export enum WinnerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2,
  DRAW = 0
}

export interface IScore {
  X: number;
  O: number;
  ties: number;
}

export interface IPlayers {
  human: PlayerTypes;
  computer: PlayerTypes;
}

export default class Game {
  state: GameStates;
  grid: number[];
  score: IScore;
  players: IPlayers | null;
  winner: WinnerTypes | null;
  nextMove: PlayerTypes | null;

  constructor() {
    this.state = GameStates.NOT_STARTED;
    this.grid = new Array(9).fill(null);
    this.score = {
      X: 0,
      O: 0,
      ties: 0
    };
    this.players = null;
    this.winner = null;
    this.nextMove = null;
  }

  start = (selectedPlayer: PlayerTypes) => {
    this.state = GameStates.IN_PROGRESS;
    this.players = { human: selectedPlayer, computer: this.getOtherPlayer(selectedPlayer)};
    this.nextMove = this.players.human;
    console.log(this.players);
  };

  getOtherPlayer = (player: PlayerTypes): PlayerTypes => {
    return player === PlayerTypes.PLAYER_X ? PlayerTypes.PLAYER_O : PlayerTypes.PLAYER_X;
  };

  getEmptySquaresIndexes = (grid: number[] = this.grid) => {
    let indexes: number[] = [];
    grid.forEach((value: number | null, index: number) => {
      if ( value === null ) {
        indexes.push(index);
      }
    });
    return indexes;
  };

  isEmpty = (grid: number[] = this.grid) => this.getEmptySquaresIndexes(grid).length === 9;

  getWinner = (): WinnerTypes | null => {
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
    let winner = null;
  
    winningLines.forEach((line: number[], index: number) => {
      console.log('this.grid[line[0]]: ', this.grid[line[0]], this.grid[line[1]], this.grid[line[2]] );

      if ( this.grid[line[0]] !== null && this.grid[line[0]] === this.grid[line[1]] && this.grid[line[2]]) {
        winner = this.grid[line[0]];
      }
      else if (this.getEmptySquaresIndexes(this.grid).length === 0) {
        winner = WinnerTypes.DRAW;
      }
    });
  
    return winner;
  };

  updateScore = (winner: WinnerTypes) => {
    if (winner === WinnerTypes.PLAYER_X) {
      this.score = {
        ...this.score,
        X: this.score.X
      };
    }
    else if (winner === WinnerTypes.PLAYER_O) {
      this.score = {
        ...this.score,
        O: this.score.O
      };
    }
    else {
      this.score = {
        ...this.score,
        ties: this.score.ties
      };
    }
  };

  hasStarted = (): boolean => {
    let states = [GameStates.IN_PROGRESS, GameStates.OVER];
    return states.includes(this.state);
  };

  move = (index: number, player: PlayerTypes) => {
      if (player && this.state === GameStates.IN_PROGRESS) {
        let newGrid = [ ...this.grid ];
        newGrid[index] = player;
        this.grid = newGrid;
      }
  };

  computerMove = () => {
    if (this.players) {
      let index = getRandomInt(0, 8);
      while (this.grid[index]) {
        index = getRandomInt(0, 8);
      }
  
      this.move(index, this.players.computer);
      this.nextMove =this.players.human;
    }

    console.log('Grid after computer move: ', this.grid)
  };

  humanMove = (index: number) => {
    if (this.players && !this.grid[index] && this.nextMove === this.players.human) {
      this.move(index, this.players.human);
      this.nextMove = this.players.computer;
    }

    console.log('Grid after human move: ', this.grid)
  };
}

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};