<script lang="ts">
  import type { Item } from '../models';
  import { getRandomItem } from '../lib/ramdom-item';
  import Header from './header.svelte';
  import Selected from './selected.svelte';
  import Selector from './selector.svelte';
  import { winners } from '../config';

  export let mode = 'normal';

  let title = 'Rock Paper Scissors';
  let score = 0;
  let player1Choice: Item | null = null;
  let player2Choice: Item | null = null;
  let winner: Item | null = null;

  if (mode !== 'normal') {
    title += ' Lizard Spock';
  }

  const handleSelected = (item: Item) => {
    player1Choice = item;
    setTimeout(() => {
      player2Choice = getRandomItem();
    }, 3000);
  };

  const playAgain = () => {
    player1Choice = null;
    player2Choice = null;
  };

  const changeScore = (amount: number) => {
    setTimeout(() => {
      score += amount;
    }, 1000);
  };

  $: {
    if (player1Choice && player2Choice) {
      if (player1Choice === player2Choice) {
        winner = null;
      } else if (winners[player1Choice].includes(player2Choice)) {
        winner = player1Choice;
        changeScore(1);
      } else if (winners[player2Choice].includes(player1Choice)) {
        winner = player2Choice;
        changeScore(-1);
      }
    }
  }
</script>

<main>
  <Header {title} {score} />

  {#if !player1Choice}
    <Selector onSelected={handleSelected} />
  {:else}
    <Selected {player1Choice} {player2Choice} {winner} onPlayAgain={playAgain} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
  }
</style>
