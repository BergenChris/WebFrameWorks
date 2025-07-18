import { nthprime } from "@/utils";

export default function Home() {
  
  const primes : number[]=[];

  for (let i=1;i<2000;i++){
    primes.push(nthprime(i));
  }
  
  
  return (
    <div className="grid-container">
      <h2>Client</h2>
      {primes.map((prime,index)=><div key={index}> {prime}</div>)}
    </div>
  );
}
