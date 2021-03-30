import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'

function HomePage() {
  return (
    <div>
      <div className="site-container">
        <div className={'space-y-4'}>
          <h1 className={'text-2xl font-bold'}>
            Ben Yusuf. <br></br> Üniversite öğrencisi ve Web geliştiriciyim.
          </h1>

          <p>
            Çukurova Üniversitesi Otomotiv Mühendisliği öğrencisiyim. Boş
            zamanlarımda ise Web geliştirme, müzik prodiksiyonu ve sokak
            fotoğrafçılığı ile ilgileniyorum.
          </p>
        </div>
      </div>
      <div className={'max-w-3xl mx-auto mt-10 px-6'}>
        <img src="/ben.jpeg" />
      </div>

      <footer className="my-10 text-2xl flex justify-center space-x-8 flex-row ">
        <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
          <Link
            href="https://github.com/yusufxcingoz"
            className="hover:text-gray-400"
          >
            <AiOutlineGithub />
          </Link>
        </div>

        <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
          <Link
            href="https://www.linkedin.com/in/yusuf-cingoz/"
            className="hover:text-gray-400"
          >
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
          <Link
            href="https://twitter.com/lokiod1nson"
            className="hover:text-gray-400"
          >
            <AiOutlineTwitter />
          </Link>
        </div>
        <div className="hover:text-gray-500 hover:cursor-pointer duration-300">
          <Link href="https://www.instagram.com/yusf.wav/" className="">
            <FaInstagram />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
