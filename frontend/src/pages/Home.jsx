import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/containers/Footer';
import { useEffect, useState } from 'react';
import data from '../data.json';

export default function Home() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        const handleLoad = () => {
            alert('This site is still under development, info may be placeholder and registrations will not work :)')
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <>
            <div className='overflow-hidden bg-home'>
                <HelmetProvider>
                    <Helmet>
                        <title>{`TCK Camp | Home`}</title>
                    </Helmet>
                </HelmetProvider>

                <header>
                    <NavBar active={'Home'} />
                </header>

                <div className='h-full overflow-y-auto'>
                    <div className='d-flex flex-column align-items-center justify-content-between h-container'>
                        <section className='p-2 my-auto w-100'>
                            <div className='p-3 quote-box mx-auto w-content'>
                                <h2 className='font-1 mb-0 text-center'>
                                    “A community of belonging where Christ is worshipped and the 
                                    story of our whānau in missions is valued and honoured” 
                                </h2>
                            </div>
                            <div className='p-3 bg-2b skewed-box mx-auto w-content'>
                                <h2 className='font-1 mb-0'>{data.hometitle}</h2>
                                <p className='m-0 pt-0 pb-2'>{data.homesubtitle}</p>
                                <p className='fs-5 text-justify' style={{ textAlign: 'justify' }}>
                                    {data.homeblurb}
                                </p>
                                <hr className='my-4'/>
                                <h2 className='font-1'>A Little Bit Of Camp History:</h2>
                                <p className='fs-5 text-justify' style={{ textAlign: 'justify' }}>
                                    In January 2016, several staff at Eastwest College organised a weekend for mission 
                                    TCKs to get together on the college campus. The invitation went out to NZ mission agencies 
                                    and thse known within the missions community. It was specifically for young people from 
                                    age 14 and upwards who had returned to NZ having spent some time overseas with their parents 
                                    in missions. That first weekend included 23 young people and was such a success that the 
                                    feedback was a TCK Camp of 1 week!!! 
                                    <br /> <br />
                                    Camp went from 2 nights to 4 nights and has continued in this format since then! Camp is always 
                                    the same weekend each January and this coming camp will be camp number 10! We are now  closer 
                                    to 50 campers than the initial 23, with the largest camp reaching over 50! Many return year 
                                    after year and some have been at every camp since day one!! 
                                    <br /> <br />
                                    Our aim is to create a community of belonging of which Christian faith is an integral part. 
                                    A community where young people learn about life in beautiful Aotearoa while celebrating their 
                                    life overseas. We realise that this is a need among TCKs but recognise that we only have capacity 
                                    to include mission TCKs rather than TCKs in general.
                                </p>
                            </div>
                        </section>
                        {/*<div className='w-100 d-flex' style={{ height: '50px', background: 'linear-gradient(to bottom, #0000 0%, #000f 100%)' }}>
                            <p className={`font-1 text-white m-auto animdown ${isAtTop ? 'active' : ''}`}>
                                - camp themes -
                            </p>
                        </div>*/}
                    </div>
                    
                    {/*<div style={{ background: '#000', height: '200%', padding: '30px 15px'}}>
                        <section className='d-flex'>
                            <h1 className='font-1 mx-auto text-white'>2025</h1>
                        </section>
                    </div>*/}
                    <Footer />
                </div>
            </div>
        </>
    )
}