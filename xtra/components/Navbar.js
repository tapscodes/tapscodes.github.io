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
                <Link href="/PDFs/Resume.pdf">My Resume</Link>
                <div className="navpic">
                    <Link href="https://github.com/tapscodes"><Image src="Images/github.png" width={48} height={48}/></Link>
                </div>
                <div className="navpic">
                    <Link href="https://www.linkedin.com/in/taps/"><Image src="Images/linked_in.png" width={48} height={48}/></Link>
                </div>
                <div className="navpic">
                    <Link href="mailto:business@tristan-alexander.com"><Image src="Images/email.png" width={48} height={48}/></Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;