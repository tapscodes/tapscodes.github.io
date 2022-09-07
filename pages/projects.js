import Link from "next/link";
import Head from "next/head";

const Projects = () => {
    return ( 
        <div>
            <Head>
                <title>Tristan's Projects</title>
                <meta name="description" content="Tristan Spatscheck's Coding Projects"/>
            </Head>
            <ul>
                <h1>Coding Projects</h1>
                <h3><Link href="https://github.com/tapscodes/tapscodes.github.io">Next.js Portfolio Website</Link></h3>
                <p>The website you are currently viewing was made entirely with React and Next.JS.</p>
                <h3><Link href="https://github.com/tapscodes/WatchList">WatchList</Link></h3>
                <p>
                    Watchlist is a personal project built in java that stores your shows watched,<br />
                    the current episode you're on, and your current watching status.
                </p>
                <h3><Link href="https://github.com/tapscodes/FirstSite">HTML Portfolio Website</Link></h3>
                <p>
                    I originally created my portfolio website using nothing but basic html, css, and javascript.<br/>
                    It is still being hosted in github pages. If you want to look at it, <Link href="https://tapscodes.github.io/FirstSite">click here</Link>.
                </p>
            </ul>
        </div>
     );
}
 
export default Projects;