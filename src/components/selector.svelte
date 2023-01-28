<script lang="ts">
  import { scale } from 'svelte/transition';

  import bgtriangle from '../images/bg-triangle.svg';
  import { Item } from '../models';
  import ItemIcon from './item-icon.svelte';

  export let onSelected: (item: Item) => void;
  export let animate = true;
</script>

<section in:scale={{ duration: animate ? 250 : 0 }}>
  <ItemIcon on:click={() => onSelected(Item.PAPER)} type={Item.PAPER} />
  <ItemIcon on:click={() => onSelected(Item.SCISSORS)} type={Item.SCISSORS} />
  <ItemIcon on:click={() => onSelected(Item.ROCK)} type={Item.ROCK} />

  <div class="triangle" style="--bg-image: url({bgtriangle})" />
</section>

<style>
  section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  .triangle {
    grid-row: 2 / 4;
    grid-column: 2 / 4;

    background-image: var(--bg-image);
    background-repeat: no-repeat;
    background-position: center;
    aspect-ratio: 313 / 278;
    width: 313px;
    background-size: contain;
  }

  @media screen and (max-width: 1000px) {
    .triangle {
      width: 250px;
    }
  }

  @media screen and (max-width: 700px) {
    .triangle {
      width: 220px;
    }
  }
</style>
