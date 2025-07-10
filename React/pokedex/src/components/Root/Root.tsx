import { Outlet,NavLink } from "react-router-dom"
import styles from "./Root.module.css";

export const Root = () => {
    return(
        <>
            <header>
                <nav className={styles.nav}>
                    <ul>
                        <li><NavLink className={({isActive})=> isActive ? styles.active : styles.nonactive} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? styles.active : styles.nonactive} to="/pokemon">Pokemon</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>

        </>
    )
}