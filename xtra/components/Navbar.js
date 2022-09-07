import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    //resume link pulls from the 'public' folder.
    return ( 
        <nav>
            <div className="navbar">
                <Image src="Icons/android-chrome-192x192.png" width={64} height={64}/>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/PDFs/Resume.pdf">My Resume</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;