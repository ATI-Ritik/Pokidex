<script lang="ts">
  import type { IndexMonster } from "./+page";
  import { caughtMonsters } from "$lib/stores"

    export let monster : IndexMonster
    const catchMonsters = ()=>{
        caughtMonsters.update((monsters)=>{
            if(monsters.find((m)=>m.id === monster.id)){
                return monsters.filter((m)=>m.id !== monster.id)
            }
            return [...monsters,monster]
        })
    }
    
</script>

<!-- monster cards -->
<div class=" w-40 p-5 m-2 flex flex-col items-center relative bg-gray-200 hover:bg-gray-300 hover:cursor-pointer">
    <div on:click={catchMonsters}>
        <div class="flex flex-col items-center">
            <img class="w-fit" src={monster.image} alt={monster.name}>
            {monster.name}
        </div>
        <div class="absolute top-2 left-2 text-sm text-gray-400">
            {monster.id}
        </div>
    </div>
</div>