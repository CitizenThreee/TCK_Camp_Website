import banner from '../assets/mahi.jpg';
import TopContainer from '../components/containers/TopContainer';

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
            </TopContainer>
        </>
    )
}