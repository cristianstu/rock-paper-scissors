<script lang="ts">
	import Header from "./header.svelte";
	import Selector from "./selector.svelte";

  export let mode = 'normal';

  let title = 'Rock Paper Scissors';
  let score = 0;

  if (mode !== 'normal') {
    title += ' Lizard Spock';
  }
</script>

<main>
  <Header title={title} score={score} />

  <Selector />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
  }
</style>
