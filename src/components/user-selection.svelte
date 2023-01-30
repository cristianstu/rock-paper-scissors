<script lang="ts">
  import type { Item } from '../models';
  import ItemIcon from './item-icon.svelte';
  import WinnerEffect from './winner-effect.svelte';

  export let playerChoice: Item | null = null;
  export let title: string;
  export let isWinner = false;
</script>

<article>
  <h3>{title}</h3>
  <div class="item-container">
    {#if playerChoice}
      <ItemIcon animate type={playerChoice} selectable={false} size="big" />
      {#if isWinner}
        <WinnerEffect />
      {/if}
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
    position: relative;
  }

  @media (max-width: 1000px) {
    article {
      min-width: 200px;
      flex-flow: column-reverse;
    }
    .placeholder {
      width: 160px;
      height: 160px;
    }
    h3 {
      margin-top: 3rem;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 550px) {
    article {
      min-width: 180px;
    }

    h3 {
      font-size: 1rem;
    }

    .placeholder {
      width: 130px;
      height: 130px;
    }
  }
</style>
