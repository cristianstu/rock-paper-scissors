<script>
	import Selector from "./selector.svelte";

  export let mode = 'normal';

  let title = 'Rock Paper Scissors';
  let score = 0;

  if (mode !== 'normal') {
    title += ' Lizard Spock';
  }
</script>

<main>
  <header>
    <h1>
      {#each title.split(' ') as word}
        <span>{word}</span>
        <br />
      {/each}
    </h1>

    <section class="score">
      <h3>score</h3>
      {score}
    </section>

  </header>

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

  header {
    display: flex;
    justify-content: space-between;
    border: 3px solid;
    border-color: hsl(217, 16%, 45%);
    padding: 1rem;
    text-transform: uppercase;
    border-radius: 15px;
    min-width: 700px;

  }

  @media screen and (max-width: 800px) {
    header {
      min-width: 100%;
    }
  }

  header h1 {
    line-height: 1.8rem;
    font-size: 2rem;
    margin: 0;
    padding: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: white;
    border-radius: 10px;
    color: hsl(229, 25%, 31%);
    font-size: 3rem;
  }

  section h3 {
    color: hsl(229, 64%, 46%);
    font-size: 1rem;
    margin: 0;
    padding: 0 2rem;
  }
</style>
