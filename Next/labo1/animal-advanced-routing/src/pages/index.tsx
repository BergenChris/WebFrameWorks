import { Animal } from "@/types";
import { lightningCssTransform } from "next/dist/build/swc/generated-native";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [animals,setAnimals] = useState<Animal[]>([]);

  const loadAnimals = async()=>{
    let response = await fetch("http://localhost:3001/animals");
    let animals : Animal[] = await response.json();
    setAnimals(animals);
    }

  useEffect(()=>{
    loadAnimals();
  },[])


  return (
    <>
      <ul>
        {animals.map((animal)=> <> <li key={animal.id}><Link href={`/animals/${animal.name}`} >{animal.name}</Link></li>  <li></li> </>)}
     
      </ul>
    </>
  );
}
