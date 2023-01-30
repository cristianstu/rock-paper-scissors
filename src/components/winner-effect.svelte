<script>
  import { scale } from 'svelte/transition';

  let size = '590px';
</script>

<div class="circle-1" style:--winner-effect-size={size} in:scale={{ duration: 250 }}>
  <div class="circle-2">
    <div class="circle-3" />
  </div>
</div>

<style>
  div {
    background-color: rgba(255, 255, 255, 0.02);
    border-radius: 50%;
    display: grid;
    place-content: center;
  }

  .circle-1 {
    width: var(--winner-effect-size);
    height: var(--winner-effect-size);
    z-index: 1;
    position: fixed;
  }

  .circle-2 {
    width: calc(var(--winner-effect-size) * 0.78);
    height: calc(var(--winner-effect-size) * 0.78);
    z-index: 2;
  }

  .circle-3 {
    width: calc(var(--winner-effect-size) * 0.61);
    height: calc(var(--winner-effect-size) * 0.61);
    z-index: 3;
  }

  @media screen and (max-width: 1000px) {
    .circle-1 {
      --winner-effect-size: 340px !important;
    }
  }

  @media screen and (max-width: 550px) {
    .circle-1 {
      --winner-effect-size: 280px !important;
    }
  }
</style>
