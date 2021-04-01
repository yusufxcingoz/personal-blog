import Link from 'next/link'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
  const {
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated,
    user,
    logout
  } = useAuth0()
  return (
    <div className=" flex items-center">
      <header className="site-container  py-6 flex justify-between">
        <nav
          className={'space-x-4 items-center flex justify-between flex-row '}
        >
          <div className={' font-medium hover:text-gray-500 duration-300'}>
            <Link href="/" className={'bg-black'}>
              <a>Hakkımda</a>
            </Link>
          </div>

          <div className={'hover:text-gray-500 duration-300'}>
            <Link href="/blog" className={'mx'}>
              <a>Yazılar</a>
            </Link>
          </div>

          {isAuthenticated ? (
            <div className=" flex items-center space-x-4 ">
              <div>
                <a>{user.name}</a>
              </div>
              <div className={'hover:text-gray-500 duration-300'}>
                <img src={user.picture} width={30} className="rounded-full" />
              </div>
              <button
                className="bg-red-300 hover:bg-red-400 duration-500 rounded-lg px-2 py-1"
                onClick={() =>
                  logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
                }
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <div>
                <button
                  className="bg-blue-300 hover:bg-blue-400 duration-500 rounded-lg px-2 py-1"
                  onClick={() => loginWithPopup()}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Header
