<script lang="ts">
import {generations } from "./generations"
import type { PageData } from "./$types";
import { page } from "$app/stores";
import { goto } from "$app/navigation";
import Monster from "./Monster.svelte";
export let data: PageData;

//Searching for monster name using monster id from the page data
$: monsterId =  $page.url.searchParams.get('monsterId') || "";
$: monster = data.monsters.find(monster => monster.id === monsterId);
$: monsterId2 =  $page.url.searchParams.get('monsterId2') || "";
$: monster2 = data.monsters.find(monster => monster.id === monsterId2);

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

<!-- selected monster cards -->
<div class="flex flex-row">
    <div>
        {#if monster}
        <div>Monster 1</div>
        <Monster monster = {monster} 
        updateSearchParams={updateSearchParams}/>
        {/if}
    </div>
    <div>
        {#if monster2}
        <div>Monster 2</div>
        <Monster monster = {monster2} 
        updateSearchParams={updateSearchParams}/>
        {/if}
    </div>
</div>


    <!-- generations tab -->
<div class="flex flex-row flex-wrap justify-center">
    {#each generations as generation}
    <div class="p-2 m-2 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-lg">{generation.main_region}</div>
    {/each}
</div>

<!-- search bar -->
<form class="flex flex-row justify-center gap-2" on:submit={SearchSubmit}>
    <input class=" w-48 border-[1px] border-gray-300 rounded-md p-2" type="text" bind:value={form.searchString} placeholder="Pokemon Name">
    <input class="border-[1px] border-gray-300 rounded-md p-2 cursor-pointer bg-blue-700 text-white"  type="submit">
</form>

<!-- All monster cards -->
<div class="flex flex-row flex-wrap justify-center">
    {#each SelectedMonsters as monster (monster.id)}
<Monster monster = {monster} 
updateSearchParams={updateSearchParams}
isInteractive = {true}/>
    {/each}
</div>