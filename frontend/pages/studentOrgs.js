import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import StudentOrgs from './components/studentOrgs'

const appName = 'UTD *name pending*'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>UTD *name pending*</title>
                <meta name="description" content="We got kicked out of our room so we made this!" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/main.css" />
            </Head>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">UTD *name pending*</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item">

                            <a class="nav-link" href="/classInfo">Class Information</a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link" href="/studentOrgs">Student Organizations</a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link" href="/about">About</a>

                        </li>

                    </ul>

                </div>
                
            </nav>

            <main className={styles.main}>

                <div class="container-fluid">

                    <div class="row">

                        <div class="col-sm-1"></div>

                        <div class="col-sm-10" id="content">

                            <h1>UTD Organizations</h1><hr/>

                            <StudentOrgs />

                        </div>

                        <div class="col-sm-1"></div>

                    </div>

                </div>

            </main>

            <footer className={navStyle.footer}>
                <h5>Created at HackUTD</h5>
                <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
            </footer>
        </div>
    )
}
