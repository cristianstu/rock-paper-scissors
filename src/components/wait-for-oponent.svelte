<script lang="ts">
  import { getItems } from '$lib/ramdom-item';
  import { onMount } from 'svelte';

  import { GameMode, images } from '../config';

  export let mode: GameMode;

  let slideIndex = 0;
  let wrapper: HTMLElement;

  let items = getItems(mode);

  onMount(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 250);

    return () => clearInterval(interval);
  });

  function showSlides() {
    let i;
    let slides = wrapper.getElementsByTagName('article');
    if (slides) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = 'block';
    }
  }
</script>

<section bind:this={wrapper}>
  {#each items as item}
    <article>
      <img src={images[item]} alt={item} />
    </article>
  {/each}
</section>

<style>
  section {
    max-width: 1000px;
    position: relative;
    margin: auto;
  }

  article {
    display: none;
  }
</style>
