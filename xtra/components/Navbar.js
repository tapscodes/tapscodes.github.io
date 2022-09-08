import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <div className="navicon">
                    <Image src="Icons/android-chrome-192x192.png" width="60vw" height="60vw"/>
                </div>
                <div className="navmain">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/PDFs/Resume.pdf"><a>Resume</a></Link>
                    <Link href="https://github.com/tapscodes"><a><Image src="Images/github.png" width="40vw" height="40vw"/></a></Link>
                    <Link href="https://www.linkedin.com/in/taps/"><a><Image src="Images/linked_in.png" width="40vw" height="40vw"/></a></Link>
                    <Link href="mailto:business@tristan-alexander.com"><a><Image src="Images/email.png" width="40vw" height="40vw"/></a></Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;