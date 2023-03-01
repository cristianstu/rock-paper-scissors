<script lang="ts">
  import { page } from '$app/stores';

  import RockPaperScissors from '../../../components/rock-paper-scissors.svelte';
  import { GameMode } from '../../../config';

  const roomCode = $page.params.code;
</script>

<RockPaperScissors mode={GameMode.CLASSIC} {roomCode} />
