import type { GetStaticProps, GetStaticPaths } from "next";

import Link from "next/link";
import {animals} from "@/animals.json";

export interface AnimalProps {
  id: number;
  name: string;
  imgUrl: string;
}

interface AnimalPageProps {
  animal: AnimalProps | null;
}

export const getStaticProps: GetStaticProps<AnimalPageProps> = async (context) => {
  const { name } = context.params!;

  const animal = animals.find((a) => a.name === name);

  if (!animal) {
    return { notFound: true };
  }

  return {
    props: {
      animal: {
        id: animal.id,
        name: animal.name,
        imgUrl: animal.imgUrl,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = animals.map((animal) => ({
    params: { name: animal.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

const AnimalPage = ({ animal }: AnimalPageProps) => {
  if (!animal) {
    return (
      <>
        <h1>Animal Not Found</h1>
        <Link href="/">Back</Link>
      </>
    );
  }

  return (
    <>
      <h1>{animal.name} — <Link href="/">Back</Link></h1>
      <img src={`/${animal.name}.webp`} alt={animal.name} />
    </>
  );
};

export default AnimalPage;
