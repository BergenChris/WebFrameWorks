import { Pokemon } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Layout.module.css"

const PokemonDetailPage = () => {

    const router = useRouter();
    const id = parseInt(router.query.id as string);


    const [currentPokemon,setCurrentPokemon] = useState<Pokemon>();

    const loadPokemonById = async(id:number) =>{

        let response = await fetch (`http://localhost:3000/api/pokemon/${id}`);
        let data:Pokemon = await response.json();
        setCurrentPokemon(data);
    }
    useEffect(()=>{
        loadPokemonById(Number(id));
    },[id])

    

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