import Link from "next/link";
import ImageLink from "../../xtra/components/ImageLink";
import styles from "../../styles//components/Navbar.module.css";

const Navbar = () => {
    return ( 
        <nav>
            <div className={styles.navbar}>
                <div className={styles.icon}>
                    <ImageLink href="/" src="Icons/android-chrome-192x192.png" width="60vw" height="60vw"/>
                </div>
                <div className={styles.other}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/PDFs/Resume.pdf"><a target="_blank">Resume</a></Link>
                    <ImageLink href="https://github.com/tapscodes" target="_blank" src="Images/github.png" width="40vw" height="40vw"/>
                    <ImageLink href="https://www.linkedin.com/in/taps/" target="_blank" src="Images/linked_in.png" width="40vw" height="40vw"/>
                    <ImageLink href="mailto:business@tristan-alexander.com" src="Images/email.png" width="40vw" height="40vw"/>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;