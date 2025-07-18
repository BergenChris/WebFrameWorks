import { nthprime } from "@/utils";
import { GetServerSideProps, GetStaticProps } from "next";

interface HomeProps{

  primesStatic?:number[]
}


export const getStaticProps:GetStaticProps<HomeProps> = async() => {


  const primesStatic:number[]=[];

  for (let i=1;i<2000;i++){
    primesStatic.push(nthprime(i));
  }
  
  
    return {props:{primesStatic}}
}

export default function Home({primesStatic}:HomeProps) {
  
  const primes : number[]=[];


  for (let i=1;i<100;i++){
    primes.push(nthprime(i));
  }
  
  
  return (
    <div className="grid-container">

      <h3>STATIC</h3>
      {primesStatic!.map((prime,index)=><div key={index}> {prime}</div>)}

      
    </div>
  );
}
