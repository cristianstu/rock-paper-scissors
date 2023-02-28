<script>
  import { scale } from 'svelte/transition';

  let size = '360px';
</script>

<div class="circle" style:--winner-effect-size={size} in:scale={{ duration: 250 }} />

<style>
  div {
    --circle-2: calc(var(--winner-effect-size) * 0.15);
    --circle-3: calc(var(--winner-effect-size) * 0.30);

    background-color: rgba(255, 255, 255, 0.025);
    border-radius: 50%;
    display: grid;
    place-content: center;
    width: var(--winner-effect-size);
    height: var(--winner-effect-size);
    position: absolute;
    box-shadow: 0px 0px 0px var(--circle-2) rgb(255 255 255 / 2%),
      0px 0px 0px var(--circle-3) rgb(255 255 255 / 2%);
  }

  @media screen and (max-width: 1000px) {
    div {
      --winner-effect-size: 220px !important;
    }
  }

  @media screen and (max-width: 550px) {
    div {
      --winner-effect-size: 180px !important;
    }
  }
</style>
