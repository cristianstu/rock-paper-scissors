<script>
  import { locale, Locale } from '$lib/i18n';

  function changeLocale() {
    locale.set($locale === Locale.es ? Locale.en : Locale.es);
  }
</script>

<slot />

<div class="lang-selector">
  <button on:click|preventDefault={changeLocale}>
    {#if $locale === Locale.es}
      English
    {:else}
      Español
    {/if}
  </button>
</div>

<style>
  :global(html),
  :global(body) {
    min-height: 100%;
  }

  :global(body) {
    font-size: 16px;
    background: radial-gradient(
      circle farthest-corner at top center,
      hsl(214, 47%, 23%) 0%,
      hsl(237, 49%, 15%) 80%
    );
    color: white;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .lang-selector {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
  }

  .lang-selector button {
    color: #a5a5a5;
    text-decoration: none;
    background: none;
    outline: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
