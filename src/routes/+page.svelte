<script>
  import classicRules from '../images/rules.svg';
  import extendedRules from '../images/rules-extended.svg';
  import { t } from '$lib/i18n';
</script>

<main>
  <h1>{$t('app.title')}</h1>

  <nav>
    <a href="/classic">
      <img src={classicRules} alt="Classic Rules" />
      {$t('app.mode.classic')}
    </a>
    <a href="/extended">
      <img src={extendedRules} alt="Extended Rules" />
      {$t('app.mode.extended')}
    </a>
  </nav>
</main>

<style lang="scss">
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 0;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  a {
    color: rgb(219 219 219);
    text-decoration: none;
    text-transform: capitalize;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    transition: all 0.25s;

    &:hover {
      transform: scale(1.2);
      color: white;
    }

    &:hover img {
      opacity: 1;
    }

    img {
      height: 300px;
      opacity: 0.5;
      transition: all 0.25s;
    }
  }

  @media screen and (max-width: 1000px) {
    nav {
      flex-direction: column;
      gap: 2rem;
    }

    img {
      max-height: 200px;
    }

    h1 {
      font-size: 3rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2rem;
      padding: 5px;
    }

    nav {
      margin-top: 2.5rem;
      justify-content: start;
      gap: 3rem;
    }

    a {
      font-size: 1.8rem;
      gap: 1rem;
    }
  }

  @media (hover: none) {
    img {
      opacity: 1;
    }
  }
</style>
