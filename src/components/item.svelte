<script lang="ts">
  export let type: 'rock' | 'paper' | 'scissors';
  import iconRock from '../images/icon-rock.svg';
  import iconPaper from '../images/icon-paper.svg';
  import iconScissors from '../images/icon-scissors.svg';

  const icon = type === 'rock' ? iconRock : type === 'paper' ? iconPaper : iconScissors;
</script>

<article class={type}>
  <div class="circle-out">
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

  article.paper .circle-out {
    box-shadow: 0px 10px 0px -1px hsl(230deg 59% 46%);
  }

  article.scissors .circle-out {
    box-shadow: 0px 10px 0px -1px hsl(39deg 93% 35%);
  }

  article.rock .circle-out {
    box-shadow: 0px 10px 0px -1px hsl(349deg 60% 38%);
  }


  article img {
    width: 50px;
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
  }

  article:hover {
    transform: scale(1.1);
  }

  article.rock, article.paper, article.scissors {
    width: 200px;
    height: 200px;
    justify-self: center;
    align-self: center;
  }

  article.rock .circle-out {
    background: linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);
  }
  article.paper .circle-out {
    background: linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);
  }
  article.scissors .circle-out {
    background: linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);
  }

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
