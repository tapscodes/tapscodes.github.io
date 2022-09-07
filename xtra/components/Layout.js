import Navbar from "./Navbar"; 
import Footer from "./Footer";
import Head from "next/head";

const Layout = ( {children} ) => {
    //^children returns anything in the _app.js components <Layout> items
    return (
        <div className="content">
            <Head>
                <link rel="icon" href="/Icons/favicon-32x32.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;