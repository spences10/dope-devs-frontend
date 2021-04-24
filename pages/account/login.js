import { Layout } from '@/components/layout'
import AuthContext from '@/context/auth-context'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = e => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <Layout title="User Login">
      <div>
        <h1>Log In</h1>

        <ToastContainer />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="Login" />
        </form>

        <p>
          Don't have an account?{' '}
          <Link href="/account/register">Register</Link>
        </p>
      </div>
    </Layout>
  )
}
