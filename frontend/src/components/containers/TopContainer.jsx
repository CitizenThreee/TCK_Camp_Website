import NavBar from "../navigation/NavBar";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function TopContainer({activeTab, children, background}) {
    return (
        <div className='overflow-hidden' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: "100%" }}>
            <HelmetProvider>
                <Helmet>
                    <title>{`TCK Camp | ${activeTab}`}</title>
                </Helmet>
            </HelmetProvider>
            
            <header>
                <NavBar active={activeTab} />
            </header>

            <div className='h-full overflow-y-auto'>
                {children}
                <Footer />
            </div>
        </div>
    )
}