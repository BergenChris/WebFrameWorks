import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root/Root";
import { Homepage } from "./components/Homepage/Homepage";
import { PokemonListPage } from "./components/PokemonListPage/PokemonListPage";
import { PokemonDetailPage } from "./components/PokemonDetailPage/PokemonDetailPage";
import { useEffect, useState } from "react";
import type { Pokemon, PokemonRoot } from "./types";
import { DataContext } from "./DataContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";


const getIdFromUrl = (url:string) => parseInt(url.replace("https://pokeapi.co/api/v2/pokemon/","").substring(-1));



function App() {

  const [pokemon,setPokemons]=useState<Pokemon[]>([])
  
  const loadPokemons = async() =>{
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let data: PokemonRoot = await response.json();

      setPokemons(data.results.map(pokemon=>{return {...pokemon,id: getIdFromUrl(pokemon.url!)}}));
  }

  useEffect(()=>{
    loadPokemons();
  },[])
  
  const router = createBrowserRouter([
    {
      path : "/",
      element:<Root/>,
      children:[
        {
          path:"",
          element:<Homepage/>
        },
        {
          path:"pokemon",
          element:<PokemonListPage/>
        },
        {
          path:"pokemon/:id",
          element:<PokemonDetailPage/>
        },
        {
          path:"*",
          element:<PageNotFound/>
        }]
    }
  ]);

  return (
    <>
    <DataContext.Provider value={{pokemon}}>
      <RouterProvider router={router}/>
    </DataContext.Provider>
     

  
    </>
   
   
  )
}

export default App
