import styles from '../styles/ClassInfo.module.css'
import navStyle from '../styles/Nav.module.css'
import Head from 'next/head'
import Link from 'next/link'
import SearchForm from './components/searchForm'
// import GetGrades from './components/getGrades'
const appName = 'Singularity'

export default function ClassInfo() {
  return (
    <div>
      <Head>
        <title>UTD *name pending*</title>
        <meta name="description" content="We got kicked out of our room so we made this!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={navStyle.navBar}>
        <ul>
          <li className={navStyle.navTitle}><a href='/'><img className={navStyle.logo} src="/assets/logo.png"></img></a></li>
          <li><Link href='/classInfo'><a>Class Information</a></Link></li>
          <li><Link href='/studentOrgs'><a>Student Organizations</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1>Class Information</h1>
        <p>Need grade info, professor ratings, or any other notable content on a class?Enter it in the field below!</p>
        <div className={styles.SearchForm}>
          <SearchForm />
        </div>

      </main >

      <footer className={navStyle.footer}>
        <h5>Created at HackUTD</h5>
        <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
      </footer>
    </div >
  )
}
