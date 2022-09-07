import Link from "next/link"; 
import Head from "next/head";

const About = () => {
    return ( 
        <>
            <Head>
                <title>Tristan's About Me</title>
                <meta name="description" content="Extra Information About Tristan Spatscheck."/>
            </Head>
            <div>
                {/*NAV: Work Experience (put here when there's something to show)*/}
                {/*NAV: Education*/}
                <h1>Education</h1>
                <h3>University of Utah</h3>
                <p>Bachelor of Computer Science: August 2020 - Present</p>
                <h3>Udacity.com iOS Nanodegree Program</h3>
                <p>iOS Developer Nanodegree: August 2018-June 2019</p>
                <h3>Randolph High School</h3>
                <p>Highschool Diploma: August 2016-June 2020</p>
                {/*NAV: Classes*/}
                <h1>Relevant Coursework</h1>
                <ul>
                    <h3>Completed</h3>
                    <li>Object-Oriented Programming</li>
                    <li>Data Structers and Algorithms</li>
                    <li>Discrete Mathmatics</li>
                    <li>Computer Organizaiton</li>
                    <li>Software Practice 1</li>

                    <h3>In Progress</h3>
                    <li>Software Practice 2</li>
                    <li>Ethics in Data Science</li>
                    <li>Linear Algebra</li>
                    <li>Research Forum</li>
                    <li>Designing Human-Centered Experiences</li>
                </ul>
                {/*NAV: Awards*/}
                <h1>Awards/Certificates</h1>
                <ul>
                    <li><Link href="/PDFs/iOS_Nanodegree.pdf">Udacity iOS Developer Nanodegree</Link></li>
                    <li>University of Utah Deans List</li>
                    <li>Highschool Diploma for Randolph High School</li>
                    <li>Randolph High School's Computer Club Award</li>
                    <li>Randolph High School's Robotics Club Award</li>
                </ul>
                {/*NAV: Interests*/}
                <ul>
                    <li>Basketball</li>
                    <li>Skiing</li>
                    <li>Tennis</li>
                    <li>Pizza</li>
                    <li>Gaming</li>
                </ul>
            </div>
        </>
     );
}
 
export default About;