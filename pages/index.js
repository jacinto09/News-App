import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
        <meta name="description" content="The best page to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Hola</h1>
    </div>
  )
}
