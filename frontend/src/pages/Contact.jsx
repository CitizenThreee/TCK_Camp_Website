import TopContainer from "../components/containers/TopContainer";

export default function Contact() {
    return (
        <>
            <TopContainer activeTab={'Contact'}>
                <div className='p-3 d-flex flex-column h-container'>
                    <section className='p-3 bg-2b skewed-box mx-auto my-auto w-content'>
                        <h2 className='font-1 text-1'>Get In Touch</h2>
                        <p className='fs-5 text-justify text-1' style={{textAlign: 'justify'}}>If you have any questions about camp, rego, or online payments, feel free to contact us through the methods provided below or the contact form. We'll aim to get back to you as soon as we can. If using the contact form, please make sure to provide an e-mail address so we can send you a reply.</p>

                        <section className="mx-auto p-3 d-flex font-1 flex-column" style={{ maxWidth: "700px" }}>
                            <div className="d-flex justify-content-between align-items-center bg-3b px-4 py-3 w-100">
                                <p className="mb-0 text-1">email</p>
                                <p className="mb-0 text-1"><a href="mailto:hello@tckcamp.com">hello@tckcamp.com</a></p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center px-4 py-3 w-100">
                                <p className="m-0 text-1">phone</p>
                                <p className="m-0 text-1">0800 896 477</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center bg-3b px-4 py-3 w-100">
                                <p className="m-0 text-1">address</p>
                                <p className="m-0 text-end text-1">
                                    <a className="" href="https://maps.app.goo.gl/k1p1V2jBTLyKBGAp9" target="_blank">
                                        21 College Drive, Gordonton <br /> Taupiri 3791, Waikato
                                    </a>
                                </p>
                            </div>
                        </section>
                    </section> 
                </div>
            </TopContainer>
        </>
    )
}