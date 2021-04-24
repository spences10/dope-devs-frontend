import { DevItem } from '@/components/dev-item'
import { Layout } from '@/components/layout'
import { API_URL } from 'config'
import Link from 'next/link'

export default function HomePage({ devs }) {
  return (
    <Layout>
      <h1>Look at all the dope devs!</h1>
      {devs.length === 0 && <h3>No devs to show</h3>}

      {devs.map(dev => (
        <DevItem key={dev.id} dev={dev} />
      ))}

      {devs.length > 0 && (
        <Link href="/devs">
          <a>View All Devs</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/devs?_sort=name:ASC&_limit=3`)
  const devs = await res.json()

  return {
    props: { devs },
    revalidate: 1,
  }
}
