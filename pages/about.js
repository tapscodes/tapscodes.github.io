import Link from "next/link"; 
import Head from "next/head";
import Marquee from 'react-fast-marquee';
import ImageTextBox from "../xtra/components/ImageTextBox";
import styles from '../styles/pages/About.module.css';

const About = () => {
    return ( 
        <div>
            <Head>
                <title>Tristan's About Me</title>
                <meta name="description" content="Extra Information About Tristan Spatscheck."/>
            </Head>
            {/*NAV: Work Experience (put here when there's something to show)*/}
            <h1>Work Experience</h1>
            <h3>University of Utah</h3>
            <p><a href="https://www.sci.utah.edu/people/tristan.html">Paid Undergraduate Research</a>: Octorober 2022 - Present</p>
            <h3>SnoWrangler LLC</h3>
            <p><a href="https://www.snowrangler.com/">Data Manager</a>: May 2023 - September 2023</p>
            {/*NAV: Education*/}
            <h1>Education</h1>
            <h3>University of Utah</h3>
            <p>Bachelor of Computer Science: August 2020 - Present</p>
            <h3>SnowPro Core Certified</h3>
            <p><Link href="/PDFS/SnowProCore_cert.pdf">SnowPro Core Certificate</Link>: Janurary 2024</p>
            <h3>Azure Certified (AZ-900)</h3>
            <p><Link href="/PDFS/AZ900_cert.pdf">Microsoft Azure Certificate</Link>: July 2023</p>
            <h3>Udacity.com iOS Nanodegree Program</h3>
            <p><Link href="/PDFs/iOS_Nanodegree.pdf">iOS Developer Nanodegree</Link>: August 2018 - June 2019</p>
            <h3>Randolph High School</h3>
            <p>Highschool Diploma: August 2016 - June 2020</p>
            {/*NAV: Interests*/}
            <h1>Interests</h1>
            <div className={styles.interests}>
                <Marquee speed="100" pauseOnHover={true} direction="left" gradient={true} gradientColor={[255,0,0]} gradientWidth={30}>
                    <ImageTextBox img_url="/Images/basketball.jpg" text="Basketball"/>
                    <ImageTextBox img_url="/Images/skiing.jpg" text="Skiing"/>
                    <ImageTextBox img_url="/Images/pizza.jpg" text="Pizza"/>
                    <ImageTextBox img_url="/Images/tennis.jpg" text="Tennis"/>
                    <ImageTextBox img_url="/Images/spongebob.jpg" text="Spongebob"/>
                    <ImageTextBox img_url="/Images/gaming.jpg" text="Gaming"/>
                </Marquee>               
            </div>
        </div>
     );
}
 
export default About;