import AuthContext from '@/context/auth-context'
import Link from 'next/link'
import { useContext } from 'react'
import { Search } from './search'

export const Header = () => {
  const { user, logout } = useContext(AuthContext)

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
          {user ? (
            // If logged in
            <>
              <li>
                <Link href="/devs/add">
                  <a>Add Dope Dev</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button onClick={() => logout()}>Logout</button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href="/account/login">
                  <a>Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
