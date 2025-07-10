import { useParams } from "react-router-dom"
import styles from "./PokemonDetailPage.module.css"
import { useEffect, useState } from "react";
import type { Pokemon } from "../../types";
import PageNotFound from "../PageNotFound/PageNotFound";

export const PokemonDetailPage = () => {
    const {id} = useParams();

    const [currentPokemon,setCurrentPokemon] = useState<Pokemon>();

    const loadPokemonById = async(id:number) =>{

        let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data:Pokemon = await response.json();
        setCurrentPokemon(data);
    }
    useEffect(()=>{
        loadPokemonById(Number(id));
    },[id])

    // Probeer id naar number te converteren
  const pokemonId = Number(id);

  // Check of pokemonId een geldig getal is en groter dan 0 (optioneel)
  const isValid = !isNaN(pokemonId) && pokemonId > 0;

  if (!isValid) {
    return <PageNotFound />;
  }

    return(
        <main>
            {currentPokemon !== undefined && (
                <article>
                    <img src={currentPokemon.sprites?.front_default}/>
                    <p>Name : {currentPokemon.name}</p>
                    <p>Weight : {currentPokemon.weight}</p>
                    <p>Height : {currentPokemon.height}</p>
                </article>
            )}
        </main>
    )
}