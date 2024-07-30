import logo from '../assets/eastwest-logo.png';
import banner from '../assets/mahi.jpg';
import Footer from '../components/containers/Footer';
import TopContainer from '../components/containers/TopContainer';
import NavBar from '../components/navigation/NavBar';

export default function Home() {
    return (
        <>
            <TopContainer activeTab={'Home'} background={banner}>
                <div className='p-3 d-flex align-items-center h-container'>
                    <section className='p-3 bg-2b skewed-box mx-auto w-content'>
                        <h2 className='font-1'>What is TCK Camp?</h2>
                        <p className='fs-5 text-justify' style={{textAlign: 'justify'}}>
                            TCK Camp is a camp run every January in Gordonton, Hamilton, for TCK's (Third Culture Kids).
                            Third Culture Kids share much in common: ironically, a lot our commonality comes from having little in
                            common with everyone else around us. But as much as TCKs form something of a cultural group of our own,
                            we’re all on individual journeys and are at different stages of life. One person might be 16 years old
                            and have a full knowledge of where they want to go next, while another might be 19 and struggling to fit
                            into life here with no idea what they want to do. Life is full of doors: some open, some close, and
                            sometimes there are many to choose from, each with their own pros and cons.
                        </p>
                    </section>
                </div>

                <div className="p-3 d-flex flex-column align-items-center">
                    <section className='w-content skewed-box bg-2b p-3' title="Kaupapa">
                        <h2>Kaupapa</h2>
                        <p>
                            Third Culture Kids share much in common: ironically, a lot our commonality comes from having little in
                            common with everyone else around us. But as much as TCKs form something of a cultural group of our own,
                            we’re all on individual journeys and are at different stages of life. One person might be 16 years old
                            and have a full knowledge of where they want to go next, while another might be 19 and struggling to fit
                            into life here with no idea what they want to do. Life is full of doors: some open, some close, and
                            sometimes there are many to choose from, each with their own pros and cons.
                            <br /><br />
                            Gates and doors hold a lot of symbolism. ‘Behind closed doors’ suggests secrecy, whereas ‘door’s always open’
                            implies welcome. Many doors were closed during the COVID-19 pandemic over the last two years, while some
                            of us stared at the door of an MIQ room patiently waiting to get to the other side. Often, TCKs and their
                            families walk through doors with no idea what’s in the next room. Our faith is what gives us the courage to
                            believe that despite the uncertainty, God will walk with us through the threshold and remain with us on the
                            other side. Jesus speaks of our hearts as doors and that he stands outside knocking, patiently waiting for
                            us to answer. He knows what’s on the other side of that door—both the mess and the beauty—and he wants in.
                            <br /><br />
                            Whether you’re a young person returning overseas or settling in New Zealand for the longer-term, join us in
                            January as we explore all things doors, faith, and figuring out together what it means to be a third-culture
                            kid in Aotearoa. We’ll share meals together, hit the beach, play games, dance & sing, hear from some brilliant
                            and experienced speakers, pray for one another, and join with you on the long haul.
                            <br /><br />
                            Kia ora.
                        </p>
                    </section>
                </div>
            </TopContainer>
        </>
    )
}