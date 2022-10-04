import React from 'react';
import { render, screen } from '@testing-library/react';
import Game, { Round, getRandomInt, RoundStates, PlayerTypes } from './utils/game';
import { number } from 'prop-types';

describe('Round', () => {
  let round: Round;

  beforeEach(() => {
    round = new Round();
  });

  it('should be initialized with a valid grid', () => {
    expect(round.grid).toBeDefined();
    expect(round.grid).toBeInstanceOf(Array);
    expect(round.grid.length).toBe(9);
  });

  it('should be initialized with NOT_STARTED state', () => {
    expect(round.state).toBe(RoundStates.NOT_STARTED);
  });

  it('should be initialized with no winner', () => {
    expect(round.winner).toBe(null);
  });

  it('should de in the IN_PROGRESS state after starting', () => {
    round.start();
    expect(round.state).toBe(RoundStates.IN_PROGRESS);
  });

  it('player X should have the first move', () => {
    round.start();
    expect(round.nextMove).toBe(PlayerTypes.PLAYER_X);
  });

  it('isEmpty should reurn a boolean value', () => {
    expect([true, false].includes(round.isEmpty(round.grid))).toBeTruthy();
  });
});

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be initialized wih only one round', () => {
    expect(game.currentRoundIndex).toBe(0);
    expect(game.rounds.length).toBe(1);
  });

  it('should be initialized with 0 values for all score fields', () => {
    expect(game.score).toStrictEqual({
      X: 0,
      O: 0,
      ties: 0
    });
  });
});

test('should return an integer in the given interval', () => {
  expect(getRandomInt(1,100)).toBeGreaterThanOrEqual(1);
  expect(getRandomInt(1,100)).toBeLessThan(100);
  let int = getRandomInt(1,100);
  expect(parseInt(String(int))).toBe(int);
});
