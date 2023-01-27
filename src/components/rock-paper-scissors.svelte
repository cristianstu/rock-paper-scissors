<script lang="ts">
	import { Item } from "../models";
	import Header from "./header.svelte";
	import Selected from "./selected.svelte";
	import Selector from "./selector.svelte";

  export let mode = 'normal';

  let title = 'Rock Paper Scissors';
  let score = 0;
  let player1Choice: Item | null = null;
  let player2Choice: Item | null = null;

  if (mode !== 'normal') {
    title += ' Lizard Spock';
  }

  const handleSelected = (item: Item) => {
    player1Choice = item;
    setTimeout(() => {
      player2Choice = Item.SCISSORS;
    }, 3000);
  };
</script>

<main>
  <Header title={title} score={score} />

  {#if !player1Choice}
    <Selector onSelected={handleSelected} />
  {:else}
    <Selected {player1Choice} {player2Choice} />
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
