import Link from 'next/link'
import { Search } from './search'

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Dope Devs Logo</a>
        </Link>
      </div>

      <Search />

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
