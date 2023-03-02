<script lang="ts">
  import { scale } from 'svelte/transition';
  import { GameMode } from '../config';

  import type { Item } from '../models';
  import bgTriangle from '../images/bg-triangle.svg';
  import bgPentagon from '../images/bg-pentagon.svg';
  import ItemIcon from './item-icon.svelte';
  import { getItems } from '$lib/ramdom-item';

  export let onSelected: (item: Item) => void;
  export let animate = true;
  export let mode: GameMode;
  export let disabled = false;

  let items = getItems(mode);
  let bg = mode === GameMode.EXTENDED ? bgPentagon : bgTriangle;
  let itemSize: 'small' | 'medium' = mode === GameMode.EXTENDED ? 'small' : 'medium';
</script>

<section
  class:extended={mode === GameMode.EXTENDED}
  class:disabled
  in:scale={{ duration: animate ? 250 : 0 }}
>
  {#each items as item}
    <ItemIcon size={itemSize} on:click={() => onSelected(item)} type={item} />
  {/each}

  <div
    class="background"
    class:pentagon={mode === GameMode.EXTENDED}
    class:triangle={mode === GameMode.CLASSIC}
    style="--bg-image: url({bg})"
  />
</section>

<style>
  section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  section.extended {
    grid-template-columns: repeat(3, 1fr) 1rem repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }

  section.disabled {
    filter: grayscale(100%);
  }

  section.disabled::after {
    content: 'Waiting for oponent...';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    font-size: 2rem;
  }

  .background {
    background-image: var(--bg-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .triangle {
    grid-row: 2 / 4;
    grid-column: 2 / 4;

    aspect-ratio: 313 / 278;
    width: 313px;
  }

  .pentagon {
    grid-row: 2 / 7;
    grid-column: 2 / 7;
    background-position: bottom;
    aspect-ratio: 329 / 313;
    width: 360px;
    align-self: end;
    justify-self: center;
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

  @media screen and (max-width: 550px) {
    .pentagon {
      width: 260px;
    }
  }
</style>
