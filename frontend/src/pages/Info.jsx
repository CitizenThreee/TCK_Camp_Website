import TopContainer from "../components/containers/TopContainer";
import ExpandableBox from "../components/containers/ExpandableBox";
import data from '../data.json';

export default function Info() {
    return (
        <>
            <TopContainer activeTab={'Info'}>
                <div className='px-3 py-3 overflow-y-auto h-container'>
                    <ExpandableBox name={'Who'}>
                        <p className="mt-2" style={{ textAlign: 'justify' }}>
                            One of the most important things about TCK Camp is you! So, who is ‘you’? A TCK (third culture kid)
                            is generally someone who has spent (part of) their childhood living in a country and culture outside
                            of their own birth country, eventually blending the cultures of both places into a new ‘third culture’
                            that is neither fully home nor away. In fact, what is ‘home’ and what is ‘away’ may likely be a difficult
                            concept for you. We're looking for those TCKs entering New Zealand school year 10 (aged 14/15ish) and
                            above to join us. If after reading this, you're still not sure if you (or your child) fits the bill,
                            just <a href="mailto:hello@tckcamp.com">flick us an e-mail</a> and we can help you out!
                        </p>
                    </ExpandableBox>
                    <ExpandableBox name={'When'}>
                        <p className="mt-2" style={{ textAlign: 'justify' }}>
                            {`Camp sign-in opens from 2pm on Tuesday, the ${data.campstartdate} of January, and will last until 2pm on Saturday,
                            the ${data.campenddate} of January. If you are a parent and you'd like to stay for the parents’ lunch on Saturday
                            when you come to pick up your young people, you are more than welcome to do so! Just let us know on the
                            registration form. This lunch was a fantastic time last year, and we were very excited to see so many third
                            culture parents connect with each other over some great kai!`}
                        </p>
                    </ExpandableBox>
                    <ExpandableBox name={'Where'}>
                        <p className="mt-2" style={{ textAlign: 'justify' }}>
                            Eastwest College of Intercultural Studies is the host of TCK Camp, and camp takes place on its campus in
                            the lusciously green Gordonton, just outside of Hamilton, Waikato (you can <a href="https://maps.app.goo.gl/k1p1V2jBTLyKBGAp9" target="_blank">find it here</a>).
                            If you (or your child) might need a hand to get to Eastwest, <a href="mailto:hello@tckcamp.com">let us know</a>;
                            we have people traveling in from all over the country who may be able to help you out with a ride. Camp takes
                            place during Eastwest's summer break, so there are vacant student housing units in which the campers are
                            accommodated along with one of their leaders. These are pretty flash for a summer camp - plenty of hot
                            showers and comfy mattresses for all!
                        </p>
                    </ExpandableBox>
                    <ExpandableBox name={'What'}>
                        <p className="mt-2" style={{ textAlign: 'justify' }}>
                            The two main focuses of camp are first worshipping God together in all of our uniqueness; and second,
                            building a strong TCK community here in Aotearoa. We have a diverse leadership team (who are themselves TCKs)
                            to help facilitate this, but what we've experienced in the past is that most campers do an amazing job
                            of including each other and looking out for one another already. We have brilliant guest speakers come
                            and run seminars and smaller break-out sessions with us that help you better understand the things you
                            might be facing upon returning to Aotearoa, help you realize that you aren't so alone in feeling the way
                            that you do, and give you some very practical ways to deal with those feelings and experiences. We worship
                            together in a way that is so unique to TCKs, and each year our worship team is made up of amazing young
                            people who just come with a voice or an instrument and jump right on in.
                            <br /><br />
                            We run games and activities (like bonfire night, movie night, and beach trip day, plus way more!) to
                            engage you with those around you and enjoy your summer, and we still make sure there is plenty of free time
                            on campus to get to know some incredible people. The food is not at all bad either, and there's plenty of it!
                            Delicious breakfasts, lunches, and dinners are provided, as well as other snacks throughout the day; we try
                            our best to accommodate your special dietary requirements, too, so let us know on the registration form if
                            you have any of those.
                        </p>
                    </ExpandableBox>
                    <section className='p-3 bg-2b mb-3 skewed-box mx-auto w-content'>
                        <h2 className='font-1'>You'll need to bring:</h2> <br />
                        <ul>
                            <li>Plenty of clothes to last five days, including some that can potentially get dirty, and something that you can swim in</li> <br />
                            <li>Towels (shower and beach) and toiletries (think toothbrush + toothpaste, deodorant, shampoo + conditioner, soap)</li> <br />
                            <li>Something to sleep in, like a sleeping bag or a duvet, and a pillow or two</li> <br />
                            <li>If you like board/card games, you'll love camp! Feel free to bring some along, but make sure you note down somewhere on them that they belong to you</li> <br />
                            <li>A Bible, and something to take notes with; phones are fine, but can serve to be a distraction at times so it's best to bring a notepad/notebook + a pen instead</li> <br />
                            <li>Your very honest self</li> <br />
                            <li>Something that makes you, you! If you're into art, bring your artsy stuff along! Music? Bring an instrument! Photography? A camera! You get the picture.</li> <br />
                        </ul>
                        <p>Just a quick note: anything that you do bring along we cannot be liable for if anything happens to it. So if you bring something (especially something expensive like a camera), you've gotta be prepared to look out for it throughout camp.</p>
                        <p>If you've read through all of this and still have some unanswered questions for us, head over to the contact page and fill out the contact form, or fire an e-mail at us. We look forward to seeing you in January! Kia tau te rangimarie</p>
                    </section>
                </div>
            </TopContainer>
        </>
    )
}