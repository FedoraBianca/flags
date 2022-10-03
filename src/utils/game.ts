export enum PlayerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2
}

export enum WinnerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2,
  DRAW = 0
}

export enum GameStates {
  NOT_STARTED,
  IN_PROGRESS,
  OVER
};

export interface IScore {
  X: number;
  O: number;
  ties: number;
}

export interface IPlayers {
  human: PlayerTypes;
  computer: PlayerTypes;
}

export class Round {
  private _grid: number[];
  private _winner: WinnerTypes | null;
  private _nextMove: PlayerTypes | null;

  constructor() {
    this._grid = new Array(9).fill(null);
    this._winner = null;
    this._nextMove = null;
  };

  public get grid() {
    return this._grid;
  };

  public set grid(value: number[]) {
    this._grid = value;
  };

  public get winner() {
    return this._winner;
  };

  public set winner(value: WinnerTypes | null) {
    this._winner = value;
  };

  public get nextMove() {
    return this._nextMove;
  };

  public set nextMove(value: PlayerTypes | null) {
    this._nextMove = value;
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
      if ( this.grid[line[0]] !== null && this.grid[line[0]] === this.grid[line[1]] && this.grid[line[2]]) {
        winner = this.grid[line[0]];
      }
      else if (this.getEmptySquaresIndexes(this.grid).length === 0) {
        winner = WinnerTypes.DRAW;
      }
    });
  
    return winner;
  };
};

export default class Game {
  private _state: GameStates;
  private _players: IPlayers;
  private _score: IScore;
  private _currentRoundIndex: number;
  private _rounds: Round[];

  constructor() {
    this._state = GameStates.NOT_STARTED;
    this._players = { human: PlayerTypes.PLAYER_X, computer: PlayerTypes.PLAYER_O};
    this._score = {
      X: 0,
      O: 0,
      ties: 0
    }
    this._currentRoundIndex = 0;
    this._rounds = [new Round()];
  };

  public get state() {
    return this._state;
  };

  public set state(value: GameStates) {
    this._state = value;
  }

  public get players() {
    return this._players;
  }

  public set players(value: IPlayers) {
    this._players = value;
  }

  public get score() {
    return this._score;
  }

  public set score(value: IScore) {
    this._score = value;
  }

  public get currentRoundIndex() {
    return this._currentRoundIndex;
  }

  public set currentRoundindex(value: number) {
    this._currentRoundIndex = value;
  }

  public get rounds() {
    return this._rounds;
  }

  public set rounds(value: Round[]) {
    this.rounds = value;
  }

  start = (selectedPlayer: PlayerTypes) => {
    this.state = GameStates.IN_PROGRESS;
    this.players = { human: selectedPlayer, computer: this.getOtherPlayer(selectedPlayer)};
    this.rounds[this.currentRoundIndex].nextMove = this.players.human;
  };

  getOtherPlayer = (player: PlayerTypes): PlayerTypes => {
    return player === PlayerTypes.PLAYER_X ? PlayerTypes.PLAYER_O : PlayerTypes.PLAYER_X;
  };

  hasStarted = (): boolean => {
    let states = [GameStates.IN_PROGRESS, GameStates.OVER];
    return states.includes(this.state);
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

  move = (index: number, player: PlayerTypes) => {
    if (player && this.state === GameStates.IN_PROGRESS) {
      let newGrid = [ ...this.rounds[this.currentRoundIndex].grid ];
      newGrid[index] = player;
      this.rounds[this.currentRoundIndex].grid = newGrid;
    }
  };

  computerMove = () => {
    if (this.players) {
      let index = getRandomInt(0, 8);
      while (this.rounds[this.currentRoundIndex].grid[index]) {
        index = getRandomInt(0, 8);
      }
  
      this.move(index, this.players.computer);
      this.rounds[this.currentRoundIndex].nextMove =this.players.human;
    }
  };

  humanMove = (index: number) => {
    if (this.players && !this.rounds[this.currentRoundIndex].grid[index] && this.rounds[this.currentRoundIndex].nextMove === this.players.human) {
      this.move(index, this.players.human);
      this.rounds[this.currentRoundIndex].nextMove = this.players.computer;
    }
  };
}

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};