import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React, {ReactNode} from "react";
import Script from "next/script";

const name = 'Isaac Jin';
export const siteTitle = 'Chaos';

const isDev = process.env.NODE_ENV === 'development'

export default function Layout({children, home}: {
    children: ReactNode, home?: boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.svg"/>
                <meta
                    name="description"
                    content="Isaac Jin's personal blog"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}

            {!isDev && (<div className={utilStyles.cover}>
                <h1 className={utilStyles.title}>
                    Welcome to Chaos.
                </h1>

                <h1 className={utilStyles.subtitle}>The End of My Cosmic Mind</h1>

                <Script src={"https://cdn.logwork.com/widget/countdown.js"} strategy={"afterInteractive"}></Script>
                <a href="https://logwork.com/countdown-79iv" className="countdown-timer" data-style="circles"
                   data-date="2022-09-07 23:59" data-background="#00f9ee"
                   data-unitscolor="#ababab"
                   data-textcolor="#ababab">Open In</a>
            </div>)}
        </div>
    );
}

