import { useRouter } from "next/router";

import type { Animal } from "@/types";
import { useEffect, useState } from "react";


const AnimalPage = () => {

    const [animalFound, setAnimalFound] = useState<Animal>();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const { name } = router.query;



    useEffect(() => {
        fetch("http://localhost:3000/api/animals")
            .then(response => response.json())
            .then((animals: Animal[]) => {
                const animal = animals.find(animal => animal.name === name);
                setAnimalFound(animal);
                setLoading(false);
            })
    }, [name])

    if (loading) { return (<><p>Loading...</p></>) }
    else {
        if (animalFound) {
            return (
                <>
                    <h1>{animalFound?.name}</h1>
                    <img src={`/${animalFound?.name}.webp`} />
                </>)
        }

        else { return (<h1>Animal Not Found</h1>) }

    }


}


export default AnimalPage;