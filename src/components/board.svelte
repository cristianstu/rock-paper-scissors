<script>
  import iconRock from '../images/icon-rock.svg';
  import iconPaper from '../images/icon-paper.svg';
  import iconScissors from '../images/icon-scissors.svg';
  import bgtriangle from '../images/bg-triangle.svg';

</script>

<section>
  <article class="paper">
    <div class="circle">
      <img src={iconPaper} alt="paper">
    </div>
  </article>

  <article class="scissors">
    <img src={iconScissors} alt="scissors">
  </article>

  <article class="rock">
    <img src={iconRock} alt="rock">
  </article>

  <article class="triangle">
    <img src={bgtriangle} alt="triangle">
  </article>
</section>

<style>
  section {
    background: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  .circle {
    display: flex;
    border-radius: 50%;
    background: red;
    width: 100%;
    justify-content: center;
    align-items: center;
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
  }

  article.triangle img {
    width: 100%;
  }

  article.rock, article.paper, article.scissors {
    width: 200px;
    height: 200px;
    justify-self: center;
    align-self: center;
  }

  article.triangle {
    grid-row: 2 / 4;
    grid-column: 2 / 4;
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
