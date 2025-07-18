import { Animal } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import animalsJson from "@/animals.json";

const handler = (req:NextApiRequest,res:NextApiResponse) => {

    let animals : Animal[] = animalsJson.animals;
    if (req.method === "GET") {
        res.status(200).json(animals)
    } else {
        res.status(405).json({message:"Not Alowed"})
    }
}

export default handler;