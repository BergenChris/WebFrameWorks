import styles from "./Homepage.module.css";


export const Homepage = ()=>{
    return(
        <main>
            <figure>
                <img src="https://similonap.github.io/webframeworks-cursus/assets/images/oak-7ea4f019fbeb2d928458c78a9e20f34a.png" className={styles.oak} />
            </figure>
            <section>
                <p>Hello there! Welcome to the world of POKEMON!</p>

            <p>My name is OAK! People call me the POKEMON PROF!</p>

            <p>This world is inhabited by creatures called POKEMON!</p>

            <p>For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.</p>
            </section>
            
        </main>
    )
}