import Link from 'next/link'

function Header() {
  return (
    <header className="site-container py-6">
      <nav className={'space-x-4 flex flex-row'}>
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
      </nav>
    </header>
  )
}

export default Header
