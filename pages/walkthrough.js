import Head from '../components/head'
import Tada from 'react-reveal/Tada'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import BouncingArrow from '../components/bouncing-arrow'
import ProjectCard from '../components/project-card'
import Timeline from '../components/timeline'
import Social from '../components/social'
import Link from 'next/link'
import NowPlaying from '../components/now-playing'
import TopTracks from '../components/top-tracks'

export default function Walkthrough() {
    return (
        <>
            <Head />
            <div className="absolute -mb-6 ml-6 mt-6">
                <Link href="/">
                    <img
                    src="/signature.svg"
                    alt="Signature of the creator"
                    width={75}
                    height={50}
                    key="signature-nav"
                    />
                </Link>
            </div>
            <div id="name">
                <Tada>
                    <div className="pointer-events-none flex flex-col items-center justify-center h-screen mx-6 md:ml-0 overflow-hidden">
                        <h1 className="heading text-center">
                            Hey! I'm Sarthak Mohanty.
                        </h1>
                    </div>
                </Tada>
                <BouncingArrow />
            </div>
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
            <div id="hobbies">
                <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 content-center justify-center h-screen mt-24 mb-48 mx-12 md:mx-16">
                    <Fade bottom cascade>
                        <div className="transition duration-150 transform hover:skew-y-2 bg-photo row-span-1 col-span-1 md:row-span-2 rounded-xl">
                            <h1 className="ml-4 mt-12 font-bold text-white text-3xl leading-tight">
                                Photography
                                <br />
                                <Link href="https://photos.sarthakmohanty.me">
                                    <div className="muted">
                                        capturing the
                                        <span className="inline text-yellow-400"> intangible</span>
                                    </div>
                                </Link>
                            </h1>
                        </div>
                        <div className="transition duration-150 transform hover:skew-y-2 md:hover:-skew-y-2 bg-design row-span-1 col-span-1 rounded-xl">
                            <h1 className="ml-4 mt-12 font-bold text-white text-3xl leading-tight">
                                Design
                                <br />
                                <Link href="https://dribbble.com/sarthakmohanty">
                                    <div className="muted">
                                        modern and minimal with a
                                        <span className="inline text-orange-600"> hint </span>
                                        of progress
                                    </div>
                                </Link>
                            </h1>
                        </div>
                        <div className="transition duration-150 transform hover:skew-y-2 md:hover:-skew-y-2 bg-dev row-span-1 col-span-1 rounded-xl">
                            <h1 className="pointer-events-none ml-4 mt-12 font-bold text-white text-3xl leading-tight">
                                Programming
                                <br />
                                <Link href="https://github.com/sarthaktexas">
                                    <div className="muted">
                                        fast and responsive with a
                                        <span className="inline text-lime"> pinch </span>
                                        of creative
                                    </div>
                                </Link>
                            </h1>
                        </div>
                    </Fade>
                </div>
                <BouncingArrow />
            </div>
            <div id="projects">
                <Fade bottom cascade>
                    <div className="flex flex-col gap-8 items-center justify-center h-full mt-20 mb-32 mx-6 md:ml-0">
                        <h1 className="font-bold heading text-4xl ml-16 mr-6">Some of my selected projects</h1>
                        <ProjectCard title="Personal Website" href="/" icon="home-2-line" description="This current website. Made with Next and Tailwind." />
                        <ProjectCard title="Zoom Dashboard" href="https://github.com/sarthaktexas/zoom-dashboard" icon="layout-grid-fill" description="Dashboard of Zoom links to make it easier to join zoom classes. Previously using Express, transitioning to Next."/>
                        <ProjectCard title="Resource Bank" href="https://rb.srtk.me" icon="bank-line" description="Bank of resources for school. SAT to AP Prep Books, Test Banks, Quiz Banks all-in-one."/>
                        <ProjectCard title="Link Shortener" href="https://srtk.me" icon="link" description="Shorten super-long links using my short domain. Accepts parameters at the end of links too!"/>
                        <ProjectCard title="Santa and Rudolph" href="https://github.com/hackclub/12DoC" icon="coins-line" description="Made for the week-long festival of open-source making, Santa and Rudolph are gp-giving slack bots for Hack Club that award Hack Clubbers during the festival of giving for making pull requests to a hackclub collective! Rudolph is made in Swift and Santa is made in Javascript."/>
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
                <BouncingArrow />
            </Fade>
            <Fade id="music" bottom cascade>
                <div className="flex flex-col gap-6 sm:items-center justify-center h-full my-20 mx-6 md:ml-0">
                    <h1 className="text-2xl text-white font-bold mb-5 sm:mb-0">I <span className="underline text-pink-500">love</span> music. <span className="muted">Here's what I'm listening to right now.</span></h1>
                    <NowPlaying />
                    <h1 className="text-2xl text-white font-bold mb-5 sm:mb-0">and here are my <span className="underline text-purple-500">top ten songs</span>!</h1>
                    <TopTracks />
                </div>
                <BouncingArrow />
            </Fade>
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