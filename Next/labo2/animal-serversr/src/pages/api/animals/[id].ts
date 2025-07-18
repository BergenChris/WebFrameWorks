import { Animal } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import animalsJson from "@/animals.json";

const handler = (req:NextApiRequest,res:NextApiResponse) => {

    const id = parseInt(req.query.id as string);

    let animals : Animal[] = animalsJson.animals;
 
    if (req.method === "GET") {
        const animal = animals.find(animal=>animal.id === id);
        if (animal)
        {
            res.status(200).json(animal)
        } else {
            res.status(404).json({message:"Animal Not Found"})
        }
        
    } else {
        res.status(405).json({message:"Not Alowed"})
    }
}

export default handler;