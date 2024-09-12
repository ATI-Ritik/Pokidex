<script lang="ts">
import {generations } from "./generations"
import type { PageData } from "./$types";
export let data: PageData;
</script>


{#each data.monsters as monster (monster.url)}
<p>{monster.id} : {monster.name}</p>
{/each}

{#each generations as generation}
<h1>{generation.name}</h1>
<p>Games: {generation.games.join(', ')}</p>
<p>Main region: {generation.main_region}</p>
{/each}



<style>

</style>