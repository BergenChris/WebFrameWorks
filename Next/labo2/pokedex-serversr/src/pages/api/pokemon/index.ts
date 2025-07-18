import { PokeApiPokemonList } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async(req:NextApiRequest,res:NextApiResponse) => {

    if (req.method === "GET" )
    {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data: PokeApiPokemonList = await response.json();
        res.status(200).json(data.results.map(pokemon=>{
            return{
                id: parseInt(pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").substring(-1)),
                name: pokemon.name
            }
        }))
    } else {
        res.status(405).json({message:"Method Not Allowed"});
    }

    


    
}

export default handler;