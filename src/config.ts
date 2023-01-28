import { Item } from './models';
import iconRock from './images/icon-rock.svg';
import iconPaper from './images/icon-paper.svg';
import iconScissors from './images/icon-scissors.svg';
import iconLizard from './images/icon-lizard.svg';
import iconSpock from './images/icon-spock.svg';

export enum GameMode {
  CLASSIC = 'classic',
  EXTENDED = 'extended'
}

export const itemsColors = {
  [Item.PAPER]: {
    boxShadow: 'hsl(230deg 59% 46%)',
    bg: 'linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)'
  },
  [Item.ROCK]: {
    boxShadow: 'hsl(349deg 60% 38%)',
    bg: 'linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)'
  },
  [Item.SCISSORS]: {
    boxShadow: 'hsl(39deg 93% 35%)',
    bg: 'linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)'
  },
  [Item.LIZARD]: {
    boxShadow: 'hsl(261deg 52% 44%)',
    bg: 'linear-gradient(0deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)'
  },
  [Item.SPOCK]: {
    boxShadow: 'hsl(189deg 57% 36%)',
    bg: 'linear-gradient(0deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)'
  }
};

export const images = {
  [Item.PAPER]: iconPaper,
  [Item.ROCK]: iconRock,
  [Item.SCISSORS]: iconScissors,
  [Item.LIZARD]: iconLizard,
  [Item.SPOCK]: iconSpock
};

export const winners = {
  [Item.ROCK]: [Item.SCISSORS, Item.LIZARD],
  [Item.PAPER]: [Item.ROCK, Item.SPOCK],
  [Item.SCISSORS]: [Item.PAPER, Item.LIZARD],
  [Item.LIZARD]: [Item.PAPER, Item.SPOCK],
  [Item.SPOCK]: [Item.ROCK, Item.SCISSORS]
};
