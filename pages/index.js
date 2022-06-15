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
          Greetings friends! I'm Sibusiso Buthelezi 
        </h1>
      </main>
    </div>
  )
}
