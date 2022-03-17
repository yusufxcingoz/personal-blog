import Link from 'next/link'
import Head from 'next/head'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import PageTransition from '../components/page-transition'

function HomePage() {
  return (
    <PageTransition>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Yusuf Cingöz</title>
      </Head>
      <div className="site-container">
        <div className={'space-y-4'}>
          <h1 className={'text-2xl font-bold'}>
            Hi! I'm Yusuf. <br></br> I am a university student and web
            developer.
          </h1>

          <p>
            Currently I am a student at Bialystok Technical University. I like
            to code, music and and street photography.
          </p>
        </div>
      </div>
      <div className={'max-w-3xl max-h-3xl mx-auto mt-10 px-6 relative'}>
        <img src="/ben.jpeg" />

        <div className=" lg:home__footer md:home__footer sm:my-10 mt-5 text-2xl flex justify-center space-x-8 flex-row  w-full h-full items-center  ">
          <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
            <Link
              href="https://github.com/yusufxcingoz"
              className="hover:text-white"
            >
              <AiOutlineGithub className="lg:home__footer-item md:home__footer-item  " />
            </Link>
          </div>

          <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
            <Link
              href="https://www.linkedin.com/in/yusuf-cingoz/"
              className="hover:text-gray-400"
            >
              <AiFillLinkedin className="lg:home__footer-item md:home__footer-item" />
            </Link>
          </div>
          <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
            <Link
              href="https://twitter.com/lokiod1nson"
              className="hover:text-gray-400"
            >
              <AiOutlineTwitter className="lg:home__footer-item md:home__footer-item " />
            </Link>
          </div>
          <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
            <Link href="https://www.instagram.com/yusf.wav/" className="">
              <FaInstagram className="lg:home__footer-item md:home__footer-item   " />
            </Link>
          </div>
          <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
            <Link
              href="https://open.spotify.com/artist/3Miy5QferhpPgiVjXBf3U2?si=OwiW-ETkQyiyk7S4JRtc5g"
              className=""
            >
              <FaSpotify className="lg:home__footer-item md:home__footer-item " />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default HomePage
