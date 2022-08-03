import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from "next/script";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chaos</title>
                <meta name="description" content="The end of the universe in my mind"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Chaos.
                </h1>

                <font className={styles.subtitle}>The End of My Cosmic Mind</font>

                <Script src="https://cdn.logwork.com/widget/countdown.js" strategy={"afterInteractive"}></Script>
                <a href="https://logwork.com/countdown-79iv" className="countdown-timer" data-style="circles"
                   data-timezone="Asia/Shanghai" data-date="2022-08-24 23:59" data-background="#00f9ee" data-unitscolor="#ababab"
                   data-textcolor="#ababab">Open In</a>


                {/*<p className={styles.description}>*/}
                {/*    Get started by editing{' '}*/}
                {/*    <code className={styles.code}>pages/index.js</code>*/}
                {/*</p>*/}

                {/*<div className={styles.grid}>*/}
                {/*    <a href="https://nextjs.org/docs" className={styles.card}>*/}
                {/*        <h2>Documentation &rarr;</h2>*/}
                {/*        <p>Find in-depth information about Next.js features and API.</p>*/}
                {/*    </a>*/}

                {/*    <a href="https://nextjs.org/learn" className={styles.card}>*/}
                {/*        <h2>Learn &rarr;</h2>*/}
                {/*        <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
                {/*    </a>*/}

                {/*    <a*/}
                {/*        href="https://github.com/vercel/next.js/tree/canary/examples"*/}
                {/*        className={styles.card}*/}
                {/*    >*/}
                {/*        <h2>Examples &rarr;</h2>*/}
                {/*        <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
                {/*    </a>*/}

                {/*    <a*/}
                {/*        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
                {/*        className={styles.card}*/}
                {/*    >*/}
                {/*        <h2>Deploy &rarr;</h2>*/}
                {/*        <p>*/}
                {/*            Instantly deploy your Next.js site to a public URL with Vercel.*/}
                {/*        </p>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </main>

            {/*  <footer className={styles.footer}>*/}
            {/*      <a*/}
            {/*          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
            {/*          target="_blank"*/}
            {/*          rel="noopener noreferrer"*/}
            {/*      >*/}
            {/*          Powered by{' '}*/}
            {/*          <span className={styles.logo}>*/}
            {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>*/}
            {/*</span>*/}
            {/*      </a>*/}
            {/*  </footer>*/}
        </div>
    )
}
