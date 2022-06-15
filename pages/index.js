import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sibu's Site</title>
        <meta name="description" content="Sibusiso's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Earth 72! 
        </h1>
        <p>
          Hi, I'm Sibusiso! <br />
          This is a bit about me: ... <br />
          My site is still under construction, feel free to check again later :)
        </p>
      </main>
    </div>
  )
}
