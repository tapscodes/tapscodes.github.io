import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    //resume link pulls from the 'public' folder.
    return ( 
        <nav>
            <div className="navbar">
                <Image src="Icons/android-chrome-192x192.png" width="70vw" height="70vw"/>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/PDFs/Resume.pdf">Resume</Link>
                <Link href="https://github.com/tapscodes"><a><Image src="Images/github.png" width="50vw" height="50vw"/></a></Link>
                <Link href="https://www.linkedin.com/in/taps/"><a><Image src="Images/linked_in.png" width="50vw" height="50vw"/></a></Link>
                <Link href="mailto:business@tristan-alexander.com"><a><Image src="Images/email.png" width="50vw" height="50vw"/></a></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;