import { Item } from '../models';
import { GameMode } from '../config';

export function getRandomItem({ mode }: { mode: GameMode } = { mode: GameMode.CLASSIC }) {
  const items =
    mode === GameMode.CLASSIC ? [Item.ROCK, Item.PAPER, Item.SCISSORS] : Object.values(Item);

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
