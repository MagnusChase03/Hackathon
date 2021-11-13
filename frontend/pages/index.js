import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navStyle from '../styles/Nav.module.css'
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

      <nav className={navStyle.navBar}>
        <ul>
          <li className={navStyle.navTitle}><Link href='/'>{appName}</Link></li>
          <li><Link href='/classInfo'><a>Class Information</a></Link></li>
          <li><Link href='/'><a>Student Organizations</a></Link></li>
          <li><Link href='/'><a>TBD</a></Link></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1>Welcome to {appName}!</h1>
        <h3>We're happy to see you!</h3>
      </main>

      <footer className={navStyle.footer}>
        <h5>Created at HackUTD</h5>
        <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
      </footer>
    </div>
  )
}