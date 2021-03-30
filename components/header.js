import Link from 'next/link'

function Header() {
  return (
    <header className="site-container py-6">
      <nav className={'space-x-4'}>
        <Link href="/" className={''}>
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog" className={'mx'}>
          <a>Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
