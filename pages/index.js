import Head from 'next/head'
import Image from 'next/image'
import Marquee from 'react-fast-marquee';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const skills = "Java | C# | HTML | CSS | Javascript | React | C++ | Git | NextJS | Swift | SQL | MIPS | Cloudflare | JavaFX | Visual Studio 2022 | Visual Studio Code | QT";

  const quote = "Tristan Pudell-Spatscheck";

  return (
    <div className = "home">
      <Head>
        <title>Tristan's Website</title>
        <meta name="description" content="Tristan Spatscheck's Personal Portfolio Website."/>
      </Head>
      <div className={styles.box}>
        <Image className={styles.pic} src="/Images/prof_pic.jpg" width={128} height={128}/>
        <h1 className={styles.text}>{quote}</h1>
      </div>
      <h3>Used Tools and Languages</h3>
      <Marquee speed="50" direction="right" gradient={true} gradientColor={[0,255,255]} gradientWidth={20}>
        {skills}
      </Marquee>
    </div>
  )
}