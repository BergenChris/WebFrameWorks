import { PokeApiPokemonList, Pokemon } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Layout.module.css"

const PokemonListPage = () => {

  const [pokemons,setPokemons] = useState<Pokemon[]>([]);

  const [filter,setFilter] = useState("");



  useEffect(()=>{
    let cancel = false;
    const loadPokemons = async() =>{
      
      let response = await fetch("http://localhost:3000/api/pokemon/");
      let data: Pokemon[] = await response.json();
      if (!cancel){
        setPokemons(data);
      }
    }

    loadPokemons();
    return () => {cancel = true;}
   
  },[])

    const filteredPokemon = pokemons.filter(pokemon=>pokemon.name.includes(filter.toLowerCase()));

    return(
        <main >
            <input type="text" className={styles.search} value={filter} onChange={e=>setFilter(e.target.value)}/>
           {
            filteredPokemon.map(pokemon=>(
                <Link href={`/pokemon/${pokemon.id}`} className={styles.listItem} key={pokemon.id}>
                    {pokemon.name}
                </Link>
            )
                
            )
           }
        </main>
    )
}

export default PokemonListPage;