import Head from '../components/head'
import Nav from '../components/nav'
import FadeIn from 'react-fade-in';
import Card from '../components/card'
import InlineProfile from '../components/inline-profile'
import Link from 'next/link'
import Social from '../components/social'

export default function ProjectsPage() {
    return (
        <>
            <Head />
            <Nav />
            <FadeIn delay="100">
                <div className="mx-8 md:mx-10 lg:mx-16 mt-4">
                    <h1 className="heading inline-block w-auto">
                        Projects
                    </h1>
                    <div className="grid grid-cols-1 gap-8 w-1/2 mt-2">
                        <Card title="Website" href="/" icon="home-2-line" description="This current website. Made with Next and Tailwind."/>
                        <Card title="Zoom Dashboard" href="https://github.com/sarthaktexas/zoom-dashboard" icon="layout-grid-fill" description="Dashboard of Zoom links to make it easier to join zoom classes. Previously using Express, transitioning to Next."/>
                        <Card title="Resource Bank" href="https://rb.srtk.me" icon="bank-line" description="Bank of resources for school. SAT to AP Prep Books, Test Banks, Quiz Banks all-in-one."/>
                        <Card title="Link Shortener" href="https://srtk.me" icon="link" description="Shorten super-long links using my short domain. Accepts parameters at the end of links too!"/>
                        <Card title="Rudolph" href="https://github.com/hackclub/rudolph" icon="coins-line" description="Carrot-eating monster. Rudolph is a gp-giving bot for Hack Club that awards Hack Clubbers during the month of December for making pull requests! Made in Swift."/>
                    </div>
                    <Link href="https://github.com/sarthaktexas/"><p className="pointer-events-none mt-8 italic text-white text-opacity-75">View more of my projects at my Github!</p></Link>
                    <Social />
                </div>
            </FadeIn>
        </>
    )
}