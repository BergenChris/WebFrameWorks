import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Link href="/clientPrimes">Client    -</Link>
    <Link href="/serverPrimes">SSR    -</Link>
    <Link href="/staticPrimes">SSG</Link>
    <Component {...pageProps} />;
  </>
  )
  
}
