import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from "next/script";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chaos</title>
                <meta name="description" content="The end of the universe in my mind"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Chaos.
                </h1>

                <h1 className={styles.subtitle}>The End of My Cosmic Mind</h1>

                <Script src={"https://cdn.logwork.com/widget/countdown.js"} strategy={"afterInteractive"}></Script>
                <a href="https://logwork.com/countdown-79iv" className="countdown-timer" data-style="circles"
                   data-date="2022-09-07 23:59" data-background="#00f9ee"
                   data-unitscolor="#ababab"
                   data-textcolor="#ababab">Open In</a>
            </main>
        </div>
    )
}

export default Home
