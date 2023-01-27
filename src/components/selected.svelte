<script lang="ts">
  import { fade } from 'svelte/transition';

  import type { Item } from "../models";
  import ItemIcon from "./item-icon.svelte";

  export let player1Choice: Item;
  export let player2Choice: Item | null = null;

</script>

<section in:fade={{ duration: 200 }}>
  <article>
    <h2>You picked</h2>
    <div class="item-container">
      <ItemIcon animate type={player1Choice} selectable={false} size="big" />
    </div>
  </article>

  <div class="separator">

  </div>

  <article>
    <h2>The house picked</h2>
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
    min-width: 100px;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  .placeholder {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: rgb(255 255 255 / 5%);
  }
</style>
