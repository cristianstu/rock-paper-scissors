<script lang="ts">
  import { scale } from 'svelte/transition';

  import type { Item } from '../models';
  import { images, itemsColors } from '../config';

  export let type: Item;
  export let selectable = true;
  export let size: 'medium' | 'big' = 'medium';
  export let animate = false;

  let icon = images[type];

  const extRadius = size === 'big' ? '265px' : '200px';
</script>

<button
  on:click|preventDefault
  in:scale={{ duration: animate ? 250 : 0 }}
  class:selectable
  style="--ext-radius: {extRadius}"
>
  <div class="overlay" />
  <div
    class="circle-out"
    style="--bs-color: {itemsColors[type].boxShadow}; --bg-color: {itemsColors[type].bg}"
  >
    <div class="circle-in">
      <img src={icon} alt={type} />
    </div>
  </div>
</button>

<style>
  @media screen and (max-width: 1000px) {
    button {
      --ext-radius: 160px !important;
    }
  }

  @media screen and (max-width: 550px) {
    button {
      --ext-radius: 130px !important;
    }
  }

  .circle-out {
    display: flex;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 0px -1px var(--bs-color);
    background: var(--bg-color);
  }

  .circle-in {
    display: flex;
    border-radius: 50%;
    background: white;
    width: calc(var(--ext-radius) * 0.775);
    height: calc(var(--ext-radius) * 0.775);
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 0px 0px rgb(215 213 213) inset;
  }

  button img {
    width: 65px;
    object-fit: contain;
  }

  button {
    position: relative;
    background: none !important;
    border: none;
    padding: 0 !important;
    cursor: pointer;
    margin: 0;
    place-content: center;
    display: flex;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    width: var(--ext-radius);
    height: var(--ext-radius);
    justify-self: center;
    align-self: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 2;
  }

  button:not(.selectable) {
    cursor: default;
  }

  button.selectable:hover,
  button.selectable:focus,
  button.selectable:active {
    transform: scale(1.1);
    outline: none;
  }

  button:nth-child(1) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }

  button:nth-child(2) {
    grid-row: 1 / 3;
    grid-column: 3 / 5;
  }

  button:nth-child(3) {
    grid-row: 3 / 5;
    grid-column: 2 / 4;
  }
</style>
