import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import styles from "@/styles/Layout.module.css"
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  return(
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/"        className={router.pathname == "/" ? styles.active : styles.nonactive}>Home</Link></li>
        <li><Link href="/pokemon" className={router.pathname.includes("/pokemon") ? styles.active : styles.nonactive}>Pokemon</Link></li>
      </ul>
    </nav>
  )
}


export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <NavigationBar/>
      <Component {...pageProps} />
   
        
    </>
  )
}
