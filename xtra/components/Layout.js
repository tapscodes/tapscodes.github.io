import Navbar from "./Navbar"; 
import Footer from "./Footer";

const Layout = ( {children} ) => {
    //^children returns anything in the _app.js components <Layout> items
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;