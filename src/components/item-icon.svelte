<script lang="ts">
	import { Item } from '../models';
  import iconRock from '../images/icon-rock.svg';
  import iconPaper from '../images/icon-paper.svg';
  import iconScissors from '../images/icon-scissors.svg';

  export let type: Item;
  export let selectable = true;

  const gradientColors = {
    [Item.PAPER]: { bs: 'hsl(230deg 59% 46%)', bg: 'linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)' },
    [Item.ROCK]: { bs: 'hsl(349deg 60% 38%)', bg: 'linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)' },
    [Item.SCISSORS]: { bs: 'hsl(39deg 93% 35%)', bg: 'linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)' },
  }

  const icon = type === Item.ROCK ? iconRock : type === Item.PAPER ? iconPaper : iconScissors;
</script>

<article class={type} class:selectable={selectable}>
  <div class="circle-out" style="--bs-color: {gradientColors[type].bs}; --bg-color: {gradientColors[type].bg}">
    <div class="circle-in">
      <img src={icon} alt={type}>
    </div>
  </div>
</article>

<style>
  .circle-out {
    display: flex;
    border-radius: 50%;
    background: red;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 0px -1px var(--bs-color);
    background: var(--bg-color);
  }

  .circle-in {
    display: flex;
    border-radius: 50%;
    background: white;
    width: 155px;
    height: 155px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 0px 0px rgb(215 213 213) inset;
  }

  article img {
    width: 65px;
    object-fit: contain;
  }

  article {
    place-content: center;
    display: flex;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    z-index: 1;
    cursor: pointer;
    transition: all .2s ease-in-out;
    width: 200px;
    height: 200px;
    justify-self: center;
    align-self: center;
  }

  article.selectable:hover {
    transform: scale(1.1);
  }

  /* FIXME Do not hardcode this classes*/
  article.rock {
    grid-row: 3 / 5;
    grid-column: 2 / 4;
  }

  article.paper {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }

  article.scissors {
    grid-row: 1 / 3;
    grid-column: 3 / 5;
  }
</style>
