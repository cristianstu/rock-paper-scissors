import { Item } from "./models";

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
}
