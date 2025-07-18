import { PokeApiPokemon, PokeApiPokemonList, Pokemon } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Layout.module.css"
import { GetStaticPropsContext } from "next";
import path from "path";

export const getStaticPaths = async() => {
    // const paths = [
    //     {params:{id:"1"}},
    //     {params:{id:"2"}},
    //     {params:{id:"3"}},

    // ]
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data:PokeApiPokemonList = await response.json();

    const paths = data.results.map(pokemon => {
        return {
            params:{
                id:pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")
            }
        }
    });

    return {
        paths:paths,
        fallback:false
    }
}


//export is hier noodzakelijk
export const getStaticProps = async(context:GetStaticPropsContext) => {

    const id =parseInt(context.params?.id as string);
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: PokeApiPokemon = await response.json();
    const pokemon = 
                {
                        id:data.id,
                        name:data.name,
                        height:data.height,
                        sprites:data.sprites.front_default,
                        weight:data.weight,
    
                    
                }

    return{
        props:{currentPokemon:pokemon}
    }
}
interface PokemonDetailPageProps{
    currentPokemon:Pokemon
}




const PokemonDetailPage = ({currentPokemon}:PokemonDetailPageProps) => {


    return(
        <main className={styles.main}>
            {currentPokemon !== undefined && (
                <article>
                    <img src={currentPokemon.sprites}/>
                    <p>Name : {currentPokemon.name}</p>
                    <p>Weight : {currentPokemon.weight}</p>
                    <p>Height : {currentPokemon.height}</p>
                </article>
            )}
        </main>
    )
}

export default PokemonDetailPage;