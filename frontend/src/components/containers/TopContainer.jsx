import NavBar from "../navigation/NavBar";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function TopContainer({activeTab, children}) {
    return (
        <div className='overflow-hidden bg-map' style={{  }}>
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