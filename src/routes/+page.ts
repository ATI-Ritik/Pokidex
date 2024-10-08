import type { PageLoad } from "./$types";

type apiMonster = {
  name: string,
  url:string
}

export type IndexMonster = apiMonster & {
  id: string,
  image: string
}

export const load= (async ({fetch,url})=> {

   const generationId = url.searchParams.get('generation_id') || '1';
   let monsterList: IndexMonster[] = [];
   if(generationId === 'all'){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20000');
    const json = await response.json();
    monsterList = json.results;
    }
    else{
      const generationResponse = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}`);
      const generationJson = await generationResponse.json();
      monsterList = generationJson.pokemon_species
    }
    const monsters: IndexMonster[] = monsterList.map((monster:apiMonster) =>{
      const splitUrl = monster.url.split('/')
      const id = splitUrl[splitUrl.length -2]
      return {
        name: monster.name,
        url: monster.url,
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      }
    })

    return{
        monsters
    } 
    
}) satisfies PageLoad;