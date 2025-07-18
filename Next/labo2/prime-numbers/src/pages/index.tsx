
import Link from "next/link";

export default function Home() {



  return (
    <>
      <div>
        <Link href="/clientPrimes">Client    -</Link>
      </div>
      <div>
        <Link href="/serverPrimes">SSR    -</Link>
      </div>
      <div>
        <Link href="/staticPrimes">SSG</Link>
      </div></>
  );
}
