import { Link } from "react-router-dom";
import styles from "./PokemonListPage.module.css";
import { useContext, useState } from "react";
import { DataContext } from "../../DataContext";

interface PokemonListPageProps{
 
}

export const PokemonListPage = () => {

    let {pokemon} = useContext(DataContext);

    const [filter,setFilter] = useState("");

    const filteredPokemon = pokemon.filter(pokemon=>pokemon.name.includes(filter.toLowerCase()));

    return(
        <main >
            <input type="text" className={styles.search} value={filter} onChange={e=>setFilter(e.target.value)}/>
           {
            filteredPokemon.map(pokemon=>(
                <Link to={`/pokemon/${pokemon.id}`} className={styles.listItem} key={pokemon.id}>
                    {pokemon.name}
                </Link>
            )
                
            )
           }
        </main>
    )
}