<script lang="ts">
  import { fade } from 'svelte/transition';

  import type { Item } from "../models";
  import ItemIcon from "./item-icon.svelte";

  export let player1Choice: Item | null = null;
  export let player2Choice: Item | null = null;
  export let onPlayAgain: () => void;
</script>

<section in:fade={{ duration: 200 }}>
  <article>
    <h3>You picked</h3>
    <div class="item-container">
      {#if player1Choice}
        <ItemIcon animate type={player1Choice} selectable={false} size="big" />
      {/if}
    </div>
  </article>

  <div class="separator">
    {#if player1Choice && player2Choice}
      <h2>Result</h2>
      <button on:click={onPlayAgain}>Play again  </button>
    {/if}
  </div>

  <article>
    <h3>The house picked</h3>
    <div class="item-container">
      {#if player2Choice}
        <ItemIcon animate type={player2Choice} selectable={false} size="big" />
      {:else}
        <div class="placeholder" />
      {/if}
    </div>
  </article>
</section>

<style>
  section {
    display: flex;
    padding: 1rem;
    justify-content: center;
    gap: 3rem;
  }

  .item-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  article {
    display: flex;
    flex-direction: column;
    min-width: 270px;
  }

  .separator {
    /* min-width: 100px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2, h3 {
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 3rem;
  }

  .placeholder {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: rgb(255 255 255 / 5%);
  }
</style>
