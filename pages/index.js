import Head from 'next/head'
import Image from 'next/image'
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <div className = "home">
      <Head>
                <title>Tristan's Website</title>
                <meta name="description" content="Tristan Spatscheck's Personal Portfolio Website."/>
      </Head>
      <Image src="/Images/prof_pic.jpg" width={128} height={128}/>
      <h3>Used Tools and Languages</h3>
      <Marquee speed="50" pauseOnHover="true" direction="right" gradient={true} gradientColor={[0,255,255]} gradientWidth={20}>
        Java | C# | HTML | CSS | Javascript | React | C++ | Git | NextJS
      </Marquee>
    </div>
  )
}