import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const appName = 'UTD *name pending*'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UTD *name pending*</title>
        <meta name="description" content="We got kicked out of our room so we made this!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navBar}>
        <ul>
          <li className={styles.navTitle}><Link href='/'>{appName}</Link></li>
          <li><Link href='/'><a>Kevin</a></Link></li>
          <li><Link href='/'><a>Zach</a></Link></li>
          <li><Link href='/'><a>Kolbe</a></Link></li>
        </ul> 
      </nav>

      <main className={styles.main}>
        <h1>WELCOME TEAM WON</h1>
        <Link href="/professors">
          <a>PROFS</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <h5>Created at HackUTD</h5>
        <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
      </footer>
    </div>
  )
}
