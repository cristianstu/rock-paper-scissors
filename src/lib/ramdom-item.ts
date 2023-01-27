import { Item } from "../models";

export function getRandomItem() {
  const items = Object.values(Item);
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
