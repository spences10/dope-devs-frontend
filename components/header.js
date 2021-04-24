import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Dope Devs Logo</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/devs">
              <a>Devs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
