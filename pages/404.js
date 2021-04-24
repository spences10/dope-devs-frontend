import { Layout } from '@/components/layout'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Layout title="Page not found.">
      <h1>404</h1>
      <h4>Sorry that route doesn't exist.</h4>
      <Link href="/">Go back home</Link>
    </Layout>
  )
}
