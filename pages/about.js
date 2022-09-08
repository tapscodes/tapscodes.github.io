import Link from "next/link"; 
import Head from "next/head";
import ImageTextBox from "../xtra/components/ImageTextBox";

const About = () => {
    return ( 
        <div>
            <Head>
                <title>Tristan's About Me</title>
                <meta name="description" content="Extra Information About Tristan Spatscheck."/>
            </Head>
            {/*NAV: Work Experience (put here when there's something to show)*/}
            {/*NAV: Education*/}
            <h1>Education</h1>
            <h3>University of Utah</h3>
            <p>Bachelor of Computer Science: August 2020 - Present</p>
            <h3>Udacity.com iOS Nanodegree Program</h3>
            <p><Link href="/PDFs/iOS_Nanodegree.pdf">iOS Developer Nanodegree</Link>: August 2018-June 2019</p>
            <h3>Randolph High School</h3>
            <p>Highschool Diploma: August 2016-June 2020</p>
            {/*NAV: Interests*/}
            <h1>Interests</h1>
            <ImageTextBox img_url="/Images/basketball.jpg" text="Basketball"/>
            <ImageTextBox img_url="/Images/basketball.jpg" text="Skiing"/>
            <ImageTextBox img_url="/Images/basketball.jpg" text="Pizza"/>
            <ImageTextBox img_url="/Images/basketball.jpg" text="Tennis"/>
            <ImageTextBox img_url="/Images/basketball.jpg" text="Gaming"/>
        </div>
     );
}
 
export default About;