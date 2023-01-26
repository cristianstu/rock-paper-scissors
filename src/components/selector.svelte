<script>
  import bgtriangle from '../images/bg-triangle.svg';
	import { Item } from '../models';
	import ItemIcon from './item-icon.svelte';

</script>

<section>
  <ItemIcon type={Item.PAPER} />
  <ItemIcon type={Item.SCISSORS} />
  <ItemIcon type={Item.ROCK} />

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
