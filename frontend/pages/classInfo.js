import styles from '../styles/ClassInfo.module.css'
import navStyle from '../styles/Nav.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SearchForm from './components/searchForm'
// import GetGrades from './components/getGrades'
const appName = 'UTD *name pending*'

function getGrades() {
  fetch('http://localhost:3001/grades/fall/2018')
  .then(res => res.json())
  .then(json => {console.log(json);})
}

export default function Professors() {
  return (
    <div>
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
        <h1>Class Information</h1>
        <p>Need grade info, professor ratings, or any other notable content on a class? Enter it in the field below!</p>
        {/* <GetGrades /> */}
        <SearchForm />

      </main>

      <footer className={navStyle.footer}>
        <h5>Created at HackUTD</h5>
        <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
      </footer>
    </div>
  )
}
