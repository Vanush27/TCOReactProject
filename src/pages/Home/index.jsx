import React from "react";
import styles from "./home.module.css";


const Home = () => {
    return <div className={`${styles.home}`}>
        {/*<h1 className={`${styles.title}`}></h1>*/}

        <section id={`${styles.hero}`}>
            <div className={`${styles.hero} `}>
                <div>
                    <h1>Hello, <span></span></h1>
                    <h1>My name Is <span></span></h1>
                    <h1>Vanush <span></span></h1>
                </div>
            </div>
        </section>
    </div>
}

export default Home;