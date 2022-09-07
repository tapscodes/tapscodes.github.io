import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    //resume link pulls from the 'public' folder.
    return ( 
        <nav>
            <div className="navbar">
                <Image className="logo" src="Icons/android-chrome-192x192.png" width={64} height={64}/>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/PDFs/Resume.pdf">Resume</Link>
                {/*Had to use div here instead of making image navpic because it wouldn't format otherwise*/}
                <div className="navpic">
                    <Link href="https://github.com/tapscodes"><a><Image src="Images/github.png" width={48} height={48}/></a></Link>
                </div>
                <div className="navpic">
                    <Link href="https://www.linkedin.com/in/taps/"><a><Image src="Images/linked_in.png" width={48} height={48}/></a></Link>
                </div>
                <div className="navpic">
                    <Link href="mailto:business@tristan-alexander.com"><a><Image src="Images/email.png" width={48} height={48}/></a></Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;