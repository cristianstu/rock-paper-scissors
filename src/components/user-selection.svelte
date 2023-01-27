<script lang="ts">
	import type { Item } from "../models";
	import ItemIcon from "./item-icon.svelte";


  export let playerChoice: Item | null = null;
  export let title: string;
</script>

<article>
  <h3>{title}</h3>
  <div class="item-container">
    {#if playerChoice}
      <ItemIcon animate type={playerChoice} selectable={false} size="big" />
    {:else}
      <div class="placeholder" />
    {/if}
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    min-width: 270px;
  }

  .placeholder {
    border-radius: 50%;
    width: 265px;
    height: 265px;
    background: rgb(255 255 255 / 5%);
  }

  @media (max-width: 700px) {
    article {
      min-width: 200px;
    }
    .placeholder {
      width: 160px;
      height: 160px;
    }
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }

  .item-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
