<script lang="ts">
import {generations } from "./generations"
import type { PageData } from "./$types";
import { page } from "$app/stores";
import { goto } from "$app/navigation";
import Monster from "./Monster.svelte";
export let data: PageData;

//Getting the generation id from the url
$: SelectedGenerationId = $page.url.searchParams.get('generation_id') || "";

//Filtering the monsters based on the search string
let form = {
    searchString: ''
}
let searchString = '';
$: SelectedMonsters = data.monsters.filter((monster)=>{
 return monster.name.toLowerCase().includes(searchString.toLowerCase());
})
const SearchSubmit = (e: Event) => {
    searchString = form.searchString;
}


//Updating the search params
const updateSearchParams = (key:string,value:string)=>{
    const searchParams = new URLSearchParams($page.url.search);
    searchParams.set(key,value);
    goto(`?${searchParams.toString()}`);
 };

</script>

<!-- html part -->
    <!-- generations tab -->
    <div class="flex flex-row flex-wrap justify-center">
        <button class="p-2 m-2 bg-gray-200 transition-all hover:bg-gray-300 active:bg-gray-700 active:text-white hover:cursor-pointer rounded-lg"
                class:active={SelectedGenerationId === "all"}
                on:click={() => updateSearchParams("generation_id", "all")}>
          All
        </button>
        {#each generations as generation}   
      
        <button class="p-2 m-2 bg-gray-200 transition-all hover:bg-gray-300 active:bg-gray-700 active:text-white hover:cursor-pointer rounded-lg"
                class:active={SelectedGenerationId === generation.id.toString()}
                on:click={() => updateSearchParams("generation_id", generation.id.toString())}>
          {generation.main_region}
        </button>
        {/each}   
      
      </div>

<!-- search bar -->
<form class="flex flex-row justify-center gap-2" on:submit|preventDefault={SearchSubmit}>
    <input class=" w-48 border-[1px] border-gray-300 rounded-md p-2" type="text" bind:value={form.searchString} placeholder="Pokemon Name">
    <input class="border-[1px] border-gray-300 rounded-md p-2 cursor-pointer bg-blue-700 text-white"  type="submit">
</form>

<!-- All monster cards -->
<div class="flex flex-row flex-wrap justify-center">
    {#each SelectedMonsters as monster (monster.id)}
<Monster monster = {monster} />
    {/each}
</div>

<style>
    .active{
        background-color: rgb(54, 54, 54);
        color: white;
    }
</style>