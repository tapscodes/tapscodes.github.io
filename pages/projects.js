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
                <h1 style={{fontSize: "5vw"}}>Public Coding Projects</h1>
                <ImageDescriptionBox href="https://github.com/tapscodes/tapscodes.github.io" target="_blank" img_url="/Images/site_view.jpg" 
                header = "Next.js Portofolio Website" text="The website you are currently viewing was made entirely with React and Next.JS.
                It is being hosted on GitHub through GitHub Actions. It also was made without the use of any templates."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/WatchList" target="_blank" img_url="/Images/watchtime.jpg" 
                header = "WatchList" text="Watchlist is a personal project built with javafx + java that stores your shows watched, 
                the current episode you're on, and your current watching status."/>

                <ImageDescriptionBox href="https://github.com/hdc-arizona/traveler-integrated" target="_blank" img_url="/Images/traveler_integrated.png" 
                header = "Traveler Integrated" text="This is the main project I contributed to during my undergraduate research. It is
                an integrated visualization system for parallel execution data, including OTF2 traces annd HPX execution trees. In simple terms,
                it is code and data visualization software."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/MineSweeper" target="_blank" img_url="/Images/minesweeper.jpg" 
                header = "MineSweeper" text="This was an iOS recreation of MineSweeper that I made in my own free time. It allowed for
                custom amounts of mines and custom board sizes."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/Speedre" target="_blank" img_url="/Images/speedre.jpg" 
                header = "Speedre" text="This is a completely original creation I made for my final project in my Udacity iOS course.
                It used an AI image recognition API from DeepAI and has the user provide a picture of something the AI attempts 
                to recognize as fast as possible."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/WWDC19" target="_blank" img_url="/Images/wwdc_2019.png" 
                header = "WWDC 2019 Submission" text="This is a basic 2D infinite platformer iOS app that I made using SpriteKit for WWDC 2019."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/VirtualTourist" target="_blank" img_url="/Images/virtual_tourist.jpg" 
                header = "Virtual Tourist" text="This iOS app lets you click somewhere on a map to see pictures taken nearby using an API.
                It was made during my Udacity course."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/OnTheMap" target="_blank" img_url="/Images/on_the_map.jpg" 
                header = "On The Map" text="This iOS app uses the Udacity API to log a user in with their given login information.
                It then showcases a list of other people logged in and their exact location on a map (using the fake data provided by Udacity).
                This app was made during my Udacity course."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/Pitch-Perfect" target="_blank" img_url="/Images/pitch_perfect.jpg" 
                header = "Pitch Perfect" text="An iOS app that allows you to record audio and then pitch it up or down.
                This app was made during my Udacity course."/>

                <ImageDescriptionBox href="https://github.com/tapscodes/MeMe1and2" target="_blank" img_url="/Images/meme.jpg" 
                header = "MeMe 1 and 2" text="An iOS app that allows someone to make a 'meme' with top and bottom text from and image of their choice
                by rendering text on top of an image.
                This app was made during my Udacity course."/>

                <ImageDescriptionBox href="https://tapscodes.github.io/FirstSite/" target="_blank" img_url="/Images/first_site.jpg" 
                header = "HTML Portfolio Website" text="I originally created my portfolio website using nothing but basic html, css, and javascript.
                It is still being hosted in github pages, so if you want to look at it just click the image on the left."/>
            </ul>
        </div>
     );
}
 
export default Projects;