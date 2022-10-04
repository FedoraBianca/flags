export enum PlayerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2
}

export enum WinnerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2,
  DRAW = 0
}

export enum RoundStates {
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
  private _winningPositions: number[];
  private _nextMove: PlayerTypes | null;
  private _state: RoundStates;

  constructor() {
    this._grid = new Array(9).fill(null);
    this._winner = null;
    this._winningPositions = [];
    this._nextMove = null;
    this._state = RoundStates.NOT_STARTED;
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

  public get winningPositions() {
    return this._winningPositions;
  };

  public set winningPositions(value: number[]) {
    this._winningPositions = value;
  };

  public get nextMove() {
    return this._nextMove;
  };

  public set nextMove(value: PlayerTypes | null) {
    this._nextMove = value;
  };

  public get state() {
    return this._state;
  };

  public set state(value: RoundStates) {
    this._state = value;
  }

  start = () => {
    this.state = RoundStates.IN_PROGRESS;
    this.nextMove = PlayerTypes.PLAYER_X;
  }

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

  computeWinner = (): WinnerTypes | null => {
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
    let winner: WinnerTypes | null = null;

    winningLines.forEach((line: number[]) => {
      if (winner === null || winner === WinnerTypes.DRAW) {
        let position1 = line[0];
        let position2 = line[1];
        let position3 = line[2];
  
        if (this.grid[position1] && this.grid[position1] === this.grid[position2] && this.grid[position2] === this.grid[position3]) {
          this.winningPositions = [position1, position2, position3];
          winner = this.grid[position1];
        }
        else if (this.getEmptySquaresIndexes(this.grid).length === 0) {
          winner = WinnerTypes.DRAW;
        }
      } 
    });
    return winner;
  };
};

export default class Game {
  private _players: IPlayers;
  private _score: IScore;
  private _currentRoundIndex: number;
  private _rounds: Round[];

  constructor() {
    this._players = { human: PlayerTypes.PLAYER_X, computer: PlayerTypes.PLAYER_O};
    this._score = {
      X: 0,
      O: 0,
      ties: 0
    }
    this._currentRoundIndex = 0;
    this._rounds = [new Round()];
  };

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
    this.players = { human: selectedPlayer, computer: this.getOtherPlayer(selectedPlayer)};
    this.rounds[this.currentRoundIndex].start();
  };

  startNewRound = () => {
    ++this._currentRoundIndex;
    this.rounds.push(new Round());
    this.rounds[this.currentRoundIndex].start();
  };

  getOtherPlayer = (player: PlayerTypes): PlayerTypes => {
    return player === PlayerTypes.PLAYER_X ? PlayerTypes.PLAYER_O : PlayerTypes.PLAYER_X;
  };

  updateScore = () => {
    if (this.rounds[this.currentRoundIndex].winner === WinnerTypes.PLAYER_X) {
      this.score = {
        ...this.score,
        X: ++this.score.X
      };
    }
    else if (this.rounds[this.currentRoundIndex].winner  === WinnerTypes.PLAYER_O) {
      this.score = {
        ...this.score,
        O: ++this.score.O
      };
    }
    else {
      this.score = {
        ...this.score,
        ties: ++this.score.ties
      };
    }
  };

  move = (index: number, player: PlayerTypes) => {
    if (player && this.rounds[this.currentRoundIndex].state === RoundStates.IN_PROGRESS) {
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
      this.rounds[this.currentRoundIndex].nextMove = this.players.human;
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