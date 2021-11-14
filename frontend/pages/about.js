import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

const appName = 'Singularity'

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

            <nav className={navStyle.navBar}>
        <ul>
          <li className={navStyle.navTitle}><a href='/'><img className={navStyle.logo} src="/assets/logo.png"></img></a></li>
          <li><Link href='/classInfo'><a>Class Information</a></Link></li>
          <li><Link href='/studentOrgs'><a>Student Organizations</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
        </ul>
      </nav>

            <main className={styles.main}>

                <div class="container-fluid">

                    <div class="row">

                        <div class="col-sm-1"></div>

                        <div class="col-sm-10" id="content">

                            <h1>About Us</h1>
                            <hr />
                            <p>
                                Our team, <b>Won</b>, is consisted of three members<b> Kevin Harvey, Kolbe Mosher, and Zachary Ness</b>.
                                We are a group of dedicated programmers who love what we do, so participating in the Hackathon was a given.
                                Though we were the first group to arrive and got an amazing room setup, our room had to be used for sponsers
                                due to the fact that the police did not unlock all of the rooms needed. Our goal was to create an app that
                                would be general enough to help all students at UTD.
                            </p><br /><br />

                            <div class="container-fluid">

                                <div class="row">

                                    <div class="col-sm-4">

                                        <img src="assets/Zach.jpg" /><br />

                                    </div>
                                    <div class="col-sm-8">

                                        <h3>Zachary Ness</h3><hr />
                                        <p>
                                            Yo, I'm Zachary Ness. I am a freshman majoring in computer science, and I have been programming
                                            on Linux since I was six year old. This is all due to my father being a software developer and
                                            wanting to get me into programming. Once I was introduced to coding, I just could not get enough
                                            of it. To this day, I still use Arch Linux and am constatly trying to learn more level programming.
                                            Recently, I have been learning x86 assembly to help build on my understanding to write better C code.
                                        </p>

                                    </div>

                                </div><br /><br />
                                <div class="row">

                                    <div class="col-sm-8">

                                        <h3>Kevin Harvey</h3><hr />

                                    </div>
                                    <div class="col-sm-4">

                                        <img src="assets/kevin.jpg" id="kevin" /><br />

                                    </div>

                                </div><br /><br />
                                <div class="row">

                                    <div class="col-sm-4">

                                        <img src="assets/kolbe.jpg" /><br />

                                    </div>
                                    <div class="col-sm-8">

                                        <h3>Kolbe Mosher</h3><hr />
                                        <p></p>

                                    </div>

                                </div>


                            </div>

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