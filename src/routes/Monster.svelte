<script lang="ts">
  import type { IndexMonster } from "./+page";

    export let monster : IndexMonster
    export let updateSearchParams : (key:string,value:string)=>void;
    export  let isInteractive = false;
    
</script>

<!-- monster cards -->
<div class=" w-40 p-5 m-2 flex flex-col items-center relative bg-gray-200 hover:bg-gray-300 hover:cursor-pointer">
    <div on:click={()=> isInteractive ? updateSearchParams('monsterId',monster.id): ()=>{}}>
        <div class="flex flex-col items-center">
            <img class="w-fit" src={monster.image} alt={monster.name}>
            {monster.name}
        </div>
        <div class="absolute top-2 left-2 text-sm text-gray-400">
            {monster.id}
        </div>
    </div>
    {#if isInteractive}
    <button class=" border-[1px] rounded-md bg-purple-500 text-white p-1" on:click={()=> updateSearchParams('monsterId2',monster.id)}>Add monster 2</button>
    {/if}
</div>