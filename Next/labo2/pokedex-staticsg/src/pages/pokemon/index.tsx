import { PokeApiPokemonList, Pokemon } from "@/types";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Layout.module.css";




const loadPokemons = async () => {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data: PokeApiPokemonList = await response.json();
  const pokemons = data.results.map(pokemon => {
    return {
      id: parseInt(pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").substring(-1)),
      name: pokemon.name
    }
  })
  return pokemons;
}

export const getStaticProps = async () => {
  const pokemons = await loadPokemons();
  console.log("test side generation")
  return {
    props: { pokemons: pokemons }
  }
}

interface PokemonListPageProps {
  pokemons: Pokemon[]
}

const PokemonListPage = ({ pokemons }: PokemonListPageProps) => {


  const [filter, setFilter] = useState("");
  const filteredPokemon = pokemons.filter(pokemon => pokemon.name.includes(filter.toLowerCase()));

  return (
    <main >
      <input type="text" className={styles.search} value={filter} onChange={e => setFilter(e.target.value)} />
      {
        filteredPokemon.map(pokemon => (
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