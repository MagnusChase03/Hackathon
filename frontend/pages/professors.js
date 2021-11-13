import styles from '../styles/Home.module.css'

export default function Professors() {
    return (
      <div className={styles.container}>

        <main className={styles.main}>
          <h1>PROF</h1>
          <a className={styles.pageLink} href="/">Home</a>
        </main>
  
        <footer className={styles.footer}>
          <h5>Created at HackUTD</h5>
          <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
        </footer>
      </div>
    )
  }
  