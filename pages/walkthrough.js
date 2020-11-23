import Head from '../components/head'
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade'
import BouncingArrow from '../components/bouncing-arrow'
import Card from '../components/card'
import Timeline from '../components/timeline'
import Social from '../components/social'
import Link from 'next/link'
import NowPlaying from '../components/now-playing'

export default function Walkthrough() {
    return (
        <>
            <Head />
            <Tada id="name">
                <div className="flex flex-col items-center justify-center h-screen mx-6 md:ml-0">
                    <h1 className="heading">
                        Hey! I'm Sarthak Mohanty.
                    </h1>
                </div>
                <BouncingArrow />
            </Tada>
            <div id="description">
                <div className="flex items-center flex-col justify-center h-screen mx-6 md:ml-0">
                    <Fade bottom cascade>
                        <div>
                            <h3 className="text-left text-white text-xl font-sans leading-normal lg:pt-4 md:max-w-screen-sm lg:max-w-screen-sm">
                                I'm an ambitious high schooler with a keen eye for <span className="text-pink-500 underline">design</span> and I love expressing my <span className="text-purple-400 underline">creativity</span> in various ways. You can often catch me designing the school yearbook or the newest, weirdest idea that came out of my noggin.
                            </h3>
                            <br />
                            <h3 className="text-left text-white text-xl font-sans leading-normal pt-4 md:max-w-screen-sm lg:max-w-screen-sm">
                                I currently live and attend school down in the heart of the Texas hill country with my playful (and more responsible) friends. I'm a stacked AP student with an interest in going into the biomedical or creative arts field.
                            </h3>
                        </div>
                    </Fade>
                </div>
                <BouncingArrow />
            </div>
            <div id="projects">
                <Fade bottom cascade>
                    <div className="flex flex-col gap-8 items-center justify-center h-full mb-20 mx-6 md:ml-0">
                        <Card title="Website" href="/" icon="home-2-line" description="This current website. Made with Next and Tailwind."/>
                        <Card title="Zoom Dashboard" href="https://github.com/sarthaktexas/zoom-dashboard" icon="layout-grid-fill" description="Dashboard of Zoom links to make it easier to join zoom classes. Previously using Express, transitioning to Next."/>
                        <Card title="Resource Bank" href="https://rb.srtk.me" icon="bank-line" description="Bank of resources for school. SAT to AP Prep Books, Test Banks, Quiz Banks all-in-one."/>
                        <Card title="Link Shortener" href="https://srtk.me" icon="link" description="Shorten super-long links using my short domain. Accepts parameters at the end of links too!"/>
                        <Card title="Santa and Rudolph" href="https://github.com/hackclub/12DoC" icon="coins-line" description="Made for the week-long festival of open-source making. Santa and Rudolph are gp-giving slack bots for Hack Club that award Hack Clubbers during the festival of giving for making pull requests to a hackclub collective! Rudolph is made in Swift and Santa is made in Javascript."/>
                    </div>
                </Fade>
                <BouncingArrow />
            </div>
            <Fade id="timeline" bottom cascade>
                <div className="flex justify-center">
                    <div className="">
                        <Timeline />
                    </div>
                </div>
                <div className="flex items-center justify-center h-full -mt-12 animate-bounce text-white">
                    <i className="ri-arrow-down-s-line" style={{ fontSize: 30 }}/>
                </div>
            </Fade>
            {/* <Fade bottom cascade>
                <div className="flex items-center justify-center h-screen mx-6 md:ml-0">
                    <NowPlaying />
                </div>
                <div className="flex items-center justify-center h-full -mt-12 animate-bounce text-white">
                    <i className="ri-arrow-down-s-line" style={{ fontSize: 30 }}/>
                </div>
            </Fade> */}
            <Fade id="end" bottom cascade>
                <div className="flex flex-col items-center justify-center h-screen mx-6 md:ml-0">
                    <h1 className="heading text-center">
                        Thanks for looking at me!
                    </h1>
                    <p className="text-white text-opacity-50 -ml-4 font-semibold font-sans text-3xl">
                        Ready to <span className="">collaborate</span>?
                    </p>
                    <Social />
                    <Link href="https://sarthakmohanty.s3.amazonaws.com/Sarthak's+Resume.pdf">
                        <h3 className="font-sans font-semibold px-2 py-1 mt-4 -ml-6 rounded text-white opacity-50 border border-white hover:underline">
                            Print out my Resume
                        </h3>
                    </Link>
                </div>
            </Fade>
        </>
    )
}