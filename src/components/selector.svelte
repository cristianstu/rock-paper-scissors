<script lang="ts">
  import bgtriangle from '../images/bg-triangle.svg';
	import { Item } from '../models';
	import ItemIcon from './item-icon.svelte';

  export let onSelected: (item: Item) => void;

</script>

<section>
  <ItemIcon on:click={() => onSelected(Item.PAPER)} type={Item.PAPER} />
  <ItemIcon on:click={() => onSelected(Item.SCISSORS)} type={Item.SCISSORS} />
  <ItemIcon on:click={() => onSelected(Item.ROCK)} type={Item.ROCK} />

  <article class="triangle">
    <img src={bgtriangle} alt="triangle">
  </article>
</section>

<style>
  section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  article.triangle img {
    width: 100%;
  }

  article.triangle {
    grid-row: 2 / 4;
    grid-column: 2 / 4;
  }
</style>
