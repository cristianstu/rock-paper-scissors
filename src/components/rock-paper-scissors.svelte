<script lang="ts">
  import type { Item } from '../models';
  import { getRandomItem } from '../lib/ramdom-item';
  import Header from './header.svelte';
  import ShowSelected from './show-selected.svelte';
  import Selector from './selector.svelte';
  import { GameMode, winners } from '../config';
  import { t } from '$lib/i18n';

  export let mode: GameMode = GameMode.CLASSIC;

  $: title = $t('app.title');
  let score = 0;
  let player1Choice: Item | null = null;
  let player2Choice: Item | null = null;
  let winner: Item | null = null;

  const handleSelected = (item: Item) => {
    player1Choice = item;
    setTimeout(() => {
      player2Choice = getRandomItem({ mode });
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

  $: if (mode === GameMode.EXTENDED) {
    title += ' Lizard Spock';
  }

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
  <Header {title} {score} {mode} />

  {#if !player1Choice}
    <Selector {mode} onSelected={handleSelected} />
  {:else}
    <ShowSelected {player1Choice} {player2Choice} {winner} {mode} onPlayAgain={playAgain} />
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
