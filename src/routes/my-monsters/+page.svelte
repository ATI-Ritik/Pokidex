<script lang="ts">
    import { caughtMonsters } from "$lib/stores";
    import Monster from "../Monster.svelte";
</script>

<h2>My Monster</h2>

<div class="flex flex-row flex-wrap">
    {#each $caughtMonsters as monster}
    <Monster {monster} />
    {/each}
</div>