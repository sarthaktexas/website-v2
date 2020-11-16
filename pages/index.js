import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Signature from '../components/signature'
import Social from '../components/social'

export default function IndexPage() {
  return (
    <>
      <Head />
      <Nav />
      <div className="mx-16 mt-4">
        <h1 className="heading">
          Hey! I'm Sarthak Mohanty.
        </h1>
        <div>
          <h3 className="text-left text-white text-xl font-sans leading-normal lg:pt-4 md:max-w-screen-sm lg:max-w-screen-sm">
            I'm an ambitious high schooler with a keen eye for <span className="text-pink-500 underline">design</span> and I love expressing my <span className="text-purple-400 underline">creativity</span> in various ways. You can often catch me designing the school yearbook or the newest, weirdest idea that came out of my noggin.
          </h3>
          <h3 className="text-left text-white text-xl font-sans leading-normal pt-4 md:max-w-screen-sm lg:max-w-screen-sm">
            I currently live and attend school down in the heart of the Texas hill country with my playful (and more responsible) friends. I'm a stacked AP student with an interest in going into the biomedical or creative arts fields.
          </h3>
          {/* <div id="manifesto-button" className="my-4">
            <a href="/manifesto" className="bg-transparent bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 text-white font-bold hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">
            Read my Manifesto
          </a>
          </div> */}
        </div>
        <Social />
      </div>
    </>
  )
}