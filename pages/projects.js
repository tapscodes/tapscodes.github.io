import Head from "next/head";
import ImageDescriptionBox from "../xtra/components/ImageDescriptionBox"

const Projects = () => {
    return ( 
        <div>
            <Head>
                <title>Tristan's Projects</title>
                <meta name="description" content="Tristan Spatscheck's Coding Projects"/>
            </Head>
            <ul>
                <h1 style={{fontSize: "5vw"}}>Coding Projects</h1>
                <ImageDescriptionBox href="https://github.com/tapscodes/tapscodes.github.io" target="_blank" img_url="Images/site_view.png" 
                header = "Next.js Portofolio Website" text="The website you are currently viewing was made entirely with React and Next.JS."/>
                <ImageDescriptionBox href="https://github.com/tapscodes/WatchList" target="_blank" img_url="Images/watchtime.png" 
                header = "WatchList" text="Watchlist is a personal project built with javafx + java that stores your shows watched, 
                the current episode you're on, and your current watching status."/>
                <ImageDescriptionBox href="https://tapscodes.github.io/FirstSite/" target="_blank" img_url="Images/first_site.png" 
                header = "HTML Portfolio Website" text="I originally created my portfolio website using nothing but basic html, css, and javascript.
                It is still being hosted in github pages, so if you want to look at it just click the image on the left."/>
            </ul>
        </div>
     );
}
 
export default Projects;