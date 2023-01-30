<slot />

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
</style>
