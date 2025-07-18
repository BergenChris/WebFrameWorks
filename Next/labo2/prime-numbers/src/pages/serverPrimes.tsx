import { nthprime } from "@/utils";
import { GetServerSideProps, GetStaticProps } from "next";

interface HomeProps{
  primesServer:number[]
}

export const getServerSideProps:GetServerSideProps<HomeProps> = async() => {

  const primesServer :number[]=[];


  for (let i=1;i<2000;i++){
    primesServer.push(nthprime(i));
  }
  
  
  return {props:{primesServer}}
}


export default function Home({primesServer}:HomeProps) {
  
  const primes : number[]=[];


  for (let i=1;i<100;i++){
    primes.push(nthprime(i));
  }
  
  
  return (
    <div className="grid-container">

      <h2>SERVER</h2>
      {primesServer!.map((prime,index)=><div key={index}> {prime}</div>)}


      
    </div>
  );
}
