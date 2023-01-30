<script>
  import classicRules from '../images/rules.svg';
  import extendedRules from '../images/rules-extended.svg';
</script>

<nav>
  <a href="/classic">
    <img src={classicRules} alt="Classic Rules" />
    Classic
  </a>
  <a href="/extended">
    <img src={extendedRules} alt="Extended Rules" />
    Extended
  </a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    height: 100vh;
  }

  a:hover {
    transform: scale(1.2);
    color: white;
  }

  a:hover img {
    opacity: 1;
  }

  a {
    color: rgb(219 219 219);
    text-decoration: none;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    transition: all 0.25s;
  }

  img {
    height: 300px;
    opacity: 0.5;
    transition: all 0.25s;
  }

  @media screen and (max-width: 1000px) {
    nav {
      flex-direction: column;
      gap: 2rem;
    }

    img {
      max-height: 200px;
    }
  }

  @media (hover: none) {
    img {
      opacity: 1;
    }
  }
</style>
