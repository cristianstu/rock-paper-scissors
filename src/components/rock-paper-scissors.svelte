<script lang="ts">
  import Pusher, { Channel } from 'pusher-js';
  import { onMount } from 'svelte';

  import type { Item } from '../models';
  import { getRandomItem } from '../lib/ramdom-item';
  import Header from './header.svelte';
  import ShowSelected from './show-selected.svelte';
  import Selector from './selector.svelte';
  import { GameMode, winners } from '../config';
  import { t } from '$lib/i18n';

  export let mode: GameMode = GameMode.CLASSIC;
  export let roomCode: string = '';

  $: title = $t('app.title');
  let score = 0;
  let player1Choice: Item | null = null;
  let player2Choice: Item | null = null;
  let winner: Item | null = null;
  let shareUrl = '';
  let channel: Channel | null = null;
  let oponentReady = roomCode ? false : true;
  const id = globalThis.crypto.randomUUID();

  onMount(() => {
    if (roomCode) {
      Pusher.logToConsole = true;

      const pusher = new Pusher('9e6d9731bfcb4a5657b3', {
        cluster: 'us2'
      });

      channel = pusher.subscribe(`room-${roomCode}`);
      channel.bind('oponent-choice', function({ item, playerId }: any) {
        if (id !== playerId) {
          player2Choice = item;
        }
      });
      channel.bind('oponent-joined', function({ playerId, isAck }: any) {
        if (id !== playerId) {
          console.log('Oponent ready!!!!');
          !isAck && !oponentReady && onJoined({ isAck: true });
          oponentReady = true;
        }
      });

      pusher.connection.bind('connected', () => {
        console.log('connected');
        onJoined();
      });

      return () => {
        channel?.unbind_all();
        channel?.unsubscribe();
      };
    }
	});

  const handleSelected = (item: Item) => {
    player1Choice = item;

    if (!roomCode) {
      setTimeout(() => {
        player2Choice = getRandomItem({ mode });
      }, 3000);
    } else {
      fetch(`/api/play/${roomCode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId: id, item })
      });
    }
  };

  function onJoined({ isAck = false } = {}) {
    console.log('local playerId: ', id)
    if (!roomCode) {
      console.log('onJoined skiped, no room code');
      return;
    }

    fetch(`/api/play/${roomCode}/joined`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerId: id, isAck })
    });
  }

  const playAgain = () => {
    player1Choice = null;
    player2Choice = null;
    oponentReady = false;
    onJoined();
  };

  const changeScore = (amount: number) => {
    setTimeout(() => {
      score += amount;
    }, 1000);
  };

  $: if (mode === GameMode.EXTENDED) {
    title += ' Lizard Spock';
  }

  $: {
    if (player1Choice && player2Choice) {
      if (player1Choice === player2Choice) {
        winner = null;
      } else if (winners[player1Choice].includes(player2Choice)) {
        winner = player1Choice;
        changeScore(1);
      } else if (winners[player2Choice].includes(player1Choice)) {
        winner = player2Choice;
        changeScore(-1);
      }
    }
  }

  $: if (globalThis.location && roomCode) {
    shareUrl = `${globalThis.location.protocol}//${globalThis.location.host}/classic/${roomCode}`;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(shareUrl);
  }
</script>

<main>
  <Header {title} {score} {mode} />

  {#if roomCode}
    <div class="share">
      <h3>Share to play</h3>
      <div>
        <span title={shareUrl}>{shareUrl}</span>
        <button on:click={copyToClipboard}>Copy</button>
      </div>
    </div>
  {/if}

  {#if !player1Choice}
    <Selector {mode} disabled={!oponentReady} onSelected={handleSelected} />
  {:else}
    <ShowSelected {player1Choice} {player2Choice} {winner} {mode} onPlayAgain={playAgain} />
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
  }

  .share {
    margin-top: 0rem;
    align-items: center;
    display: flex;
    flex-direction: column;

    span {
      max-width: 60vw;
      font-size: 1rem;
      padding: 7px 20px;
      background: red;
      height: 100%;
      display: flex;
      align-items: center;
      background: rgb(0 0 0 / 20%);
      border: rgb(255 255 255 / 12%);
      border-radius: 7px 0px 0px 7px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: block;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      height: 100%;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0 7px 7px 0;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover {
        filter: brightness(0.9);
      }
      &:active {
        filter: brightness(0.8);
      }
    }
  }
</style>
