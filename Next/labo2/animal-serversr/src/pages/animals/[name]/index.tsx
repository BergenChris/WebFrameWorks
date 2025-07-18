import type { GetServerSideProps } from "next";
import type { Animal } from "@/types";
import Link from "next/link";

export interface AnimalProps {
  id: number;
  name: string;
  imgUrl: string;
}

interface AnimalPageProps {
  animal: AnimalProps | null;
}

export const getServerSideProps: GetServerSideProps<AnimalPageProps> = async (context) => {
  const { name } = context.query;

  const res = await fetch("http://localhost:3000/api/animals");
  const animals: Animal[] = await res.json();
  const animal = animals.find((a) => a.name === name);

  if (!animal) {
    return {
      props: {
        animal: null,
      },
    };
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
      <h1>
        {animal.name} --- <Link href="/">Back</Link>
      </h1>
      <img src={`/${animal.name}.webp`} alt={animal.name} />
    </>
  );
};

export default AnimalPage;
