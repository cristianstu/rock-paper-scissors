export enum Item {
  SCISSORS = 'scissors',
  PAPER = 'paper',
  ROCK = 'rock',
  SPOCK = 'spock',
  LIZARD = 'lizard',
}

export const winners = {
  [Item.ROCK]: [Item.SCISSORS, Item.LIZARD],
  [Item.PAPER]: [Item.ROCK, Item.SPOCK],
  [Item.SCISSORS]: [Item.PAPER, Item.LIZARD],
  [Item.LIZARD]: [Item.PAPER, Item.SPOCK],
  [Item.SPOCK]: [Item.ROCK, Item.SCISSORS],
};
