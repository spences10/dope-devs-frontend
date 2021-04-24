import { DevItem } from '@/components/dev-item'
import { Layout } from '@/components/layout'
import { API_URL } from 'config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import qs from 'qs'

export default function SearchPage({ devs }) {
  const router = useRouter()

  return (
    <Layout title="Search Results">
      <Link href="/devs">Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {devs.length === 0 && <h3>No events to show</h3>}

      {devs.map(dev => (
        <DevItem key={dev.id} dev={dev} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ name_contains: term }, { about_contains: term }],
    },
  })

  const res = await fetch(`${API_URL}/devs?${query}`)
  const devs = await res.json()

  return {
    props: { devs },
  }
}
