import { DevItem } from '@/components/dev-item'
import { Layout } from '@/components/layout'
import { Pagination } from '@/components/pagination'
import { API_URL, PER_PAGE } from 'config'

export default function DevsPage({ devs, page, total }) {
  return (
    <Layout>
      <h1>Devs Index</h1>
      {devs.length === 0 && <h3>No events to show</h3>}

      {devs.map(dev => (
        <DevItem key={dev.id} dev={dev} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE
  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/devs/count`)
  const total = await totalRes.json()
  // Fetch devs
  const devRes = await fetch(
    `${API_URL}/devs?_sort=name:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const devs = await devRes.json()

  return {
    props: { devs, page: +page, total },
  }
}
