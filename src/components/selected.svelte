<script lang="ts">
  import { fade } from 'svelte/transition';

  import type { Item } from "../models";
  import UserSelection from './user-selection.svelte';
  import WaitForOponent from './wait-for-oponent.svelte';

  export let player1Choice: Item | null = null;
  export let player2Choice: Item | null = null;
  export let onPlayAgain: () => void;
  export let winner: Item | null = player1Choice;

  let showResult = false;
  $: {
    if (player1Choice && player2Choice) {
      setTimeout(() => showResult = true, 500);
    }
  }
</script>

<section in:fade={{ duration: 200 }}>
  <UserSelection title="You picked" playerChoice={player1Choice} />

  <div class="separator">
    <h3>&nbsp;</h3>
    {#if showResult}
      <div class="result" in:fade={{ delay: 300, duration: 200 }}>
        {#if winner === player1Choice}
          <h2>You win</h2>
        {:else if winner === player2Choice}
          <h2>You lose</h2>
        {:else}
          <h2>It's a tie!</h2>
        {/if}
        <button on:click={onPlayAgain}>Play again  </button>
      </div>
    {:else if !showResult && (!player1Choice || !player2Choice)}
      <WaitForOponent />
    {/if}
  </div>

  <UserSelection title="The house picked" playerChoice={player2Choice} />
</section>

<style>
  section {
    display: flex;
    padding: 1rem;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
  }

  .separator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: width 0.25s;
    width: 100px
  }

  .separator .result {
    text-align: center;
  }

  .separator:has(.result) {
    width: 300px;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  button {
    border: none;
    padding: 0.75rem 3rem;
    border-radius: 7px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
