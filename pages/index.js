import Head from '../components/head'
import Nav from '../components/nav'
import Social from '../components/social'
import FadeIn from 'react-fade-in';
import Snow from 'resnow'

export default function IndexPage() {
  return (
    <div className="overflow-hidden md:fixed md:w-screen">
      <div className="hidden sm:block -mb-4">
        <Snow style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, marginBottom: 0 }} />
      </div>
      <Head />
      <Nav />
      <FadeIn delay="100">
        <div className="mx-8 md:mx-10 lg:mx-16">
          <h1 className="heading mt-4">
            Hey! I'm Sarthak Mohanty.
          </h1>
          <div>
            <h3 className="text-left text-white text-xl font-sans leading-normal lg:pt-4 md:max-w-screen-sm lg:max-w-screen-sm">
              I'm an ambitious high schooler with a keen eye for <span className="text-pink-500 underline">design</span> and I love expressing my <span className="text-purple-400 underline">creativity</span> in various ways. You can often catch me designing the school yearbook or the newest, weirdest idea that came out of my noggin.
            </h3>
            <h3 className="text-left text-white text-xl font-sans leading-normal pt-4 md:max-w-screen-sm lg:max-w-screen-sm">
              I currently live and attend school down in the heart of the Texas hill country with my playful (and more responsible) friends. I'm a stacked AP student with an interest in going into the biomedical or creative arts field.
            </h3>
          </div>
          <Social />
        </div>
      </FadeIn>
    </div>
  )
}