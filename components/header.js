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
      <header className=" py-6 flex justify-between site-container">
        <nav
          className={'space-x-4 items-center flex justify-between flex-row   '}
        >
          <div className={' font-medium hover:text-gray-500 duration-300'}>
            <Link href="/" className={'bg-black'}>
              <a>About Me.</a>
            </Link>
          </div>

          <div className={'hover:text-gray-500 duration-300'}>
            <Link href="/blog" className={'mx'}>
              <a>Writings.</a>
            </Link>
          </div>
          <div className={'hover:text-gray-500 duration-300'}>
            <Link href="/photos" className={'mx'}>
              <a>Photos.</a>
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
            </div>
          ) : (
            <div>
              <div></div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Header
