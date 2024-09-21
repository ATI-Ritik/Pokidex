<script lang="ts">
import {generations } from "./generations"
import type { PageData } from "./$types";
export let data: PageData;
</script>
<div class="generations">
    {#each generations as generation}
    <div class="generation">{generation.main_region}</div>
    {/each}
</div>

<div class="monsters">
    {#each data.monsters as monster (monster.id)}

    <div class="monster" on:click={()=> alert("hello "+monster.name)}>
        <div class="monster-content">
            <img src={monster.image} alt={monster.name}>
            {monster.name}
        </div>
        <div class="monster-id">
            {monster.id}
        </div>
    </div>
    {/each}
</div>


<style>
    .generations {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .generation {
        padding: 10px;
        margin: 5px;
        background-color: #ddd;
    }
    .generation:hover {
        background-color: #ccc;
        cursor: pointer;
    }
    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .monster {
        width: 110px;
        padding: 15px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        background-color: #eee;
    }
    .monster:hover {
        background-color: #ddd;
        cursor: pointer;
    }
    .monster-content {
        text-align: center;
    }
    img {
        width: 80%;
    }
    .monster-id{
        position:absolute;
        top: 10px;
        left: 10px;
        font-size: 0.8em;
        color: #aaa;
    }

</style>