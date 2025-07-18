import { PokeApiPokemon, Pokemon } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Layout.module.css"
import { GetServerSideProps, GetServerSidePropsContext } from "next";


//export is hier noodzakelijk
export const getServerSideProps = async(context:GetServerSidePropsContext) => {

    const id =parseInt(context.query.id as string);
    
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