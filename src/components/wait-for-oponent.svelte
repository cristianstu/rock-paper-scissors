<script lang="ts">
  import { onMount } from 'svelte';
  import iconRock from '../images/icon-rock.svg';
  import iconPaper from '../images/icon-paper.svg';
  import iconScissors from '../images/icon-scissors.svg';

  let slideIndex = 0;
  let wrapper: HTMLElement;

  onMount(() => {
		const interval = setInterval(() => {
      showSlides();
		}, 250  );

		return () => clearInterval(interval);
	});

  function showSlides() {
    let i;
    let slides = wrapper.getElementsByTagName("article") as HTMLCollectionOf<HTMLElement>;
    if (slides) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}

      slides[slideIndex-1].style.display = "block";
    }
  }
</script>

<section bind:this={wrapper}>
  <article>
    <img src={iconRock} alt="rock">
  </article>

  <article>
    <img src={iconPaper} alt="paper">
  </article>

  <article>
    <img src={iconScissors} alt="scissors">
  </article>
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
