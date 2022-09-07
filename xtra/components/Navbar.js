import Link from "next/link";

const Navbar = () => {
    //resume link pulls from the 'public' folder.
    return ( 
        <nav>
            <h1>Navbar</h1>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/PDFs/Resume.pdf">My Resume</Link>
        </nav>
     );
}
 
export default Navbar;
<nav>
    <h1>Navbar</h1>
</nav>