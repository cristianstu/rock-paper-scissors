<script lang="ts">
  import { GameMode } from '../config';

  export let title = '';
  export let score = 0;
  export let mode: GameMode;

  let headerfontSize = mode === GameMode.EXTENDED ? '1.5rem' : '2rem';
</script>

<header>
  <h1 style="--header-font-size: {headerfontSize}">
    <a href="/">
      {#each title.split(' ') as word}
        <span>{word}</span>
        <br />
      {/each}
    </a>
  </h1>

  <section>
    <h3>score</h3>
    {score}
  </section>
</header>

<style lang="scss">
  a {
    color: white;
    text-decoration: none;
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

    h1 {
      line-height: calc(var(--header-font-size) - 0.2rem);
      font-size: var(--header-font-size);
      margin: 0;
      padding: 1rem;
    }
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

    h3 {
      color: hsl(229, 64%, 46%);
      font-size: 1rem;
      margin: 0;
      padding: 0 2rem;
    }
  }

  @media screen and (max-width: 800px) {
    header {
      min-width: 100%;
      padding: 0.5rem;

      h1 {
        font-size: 1.75rem;
        line-height: 1.5rem;
      }
    }
  }
</style>
