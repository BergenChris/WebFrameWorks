import { PokeApiPokemon } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async(req:NextApiRequest,res:NextApiResponse) => {

    const id:number = parseInt(req.query.id as string);

    if (req.method === "GET" )
    {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data: PokeApiPokemon = await response.json();
            res.status(200).json({
                    id:data.id,
                    name:data.name,
                    height:data.height,
                    sprites:data.sprites.front_default,
                    weight:data.weight,

                
            })
        }catch (e) {
            res.status(400).json({message: "Something went wrong"})
        }
        
    } else {
        res.status(405).json({message:"Method Not Allowed"});
    }

    


    
}

export default handler;