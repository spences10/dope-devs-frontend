import { DashboardDev } from '@/components/dashboard-dev'
import { Layout } from '@/components/layout'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import { useRouter } from 'next/router'

export default function DashboardPage({ devs, token }) {
  const router = useRouter()

  const deleteDev = async id => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/devs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        router.reload()
      }
    }
  }

  return (
    <Layout title="User Dashboard">
      <div>
        <h1>Dashboard</h1>
        <h3>My Dope Devs</h3>

        {devs.map(dev => (
          <DashboardDev
            key={dev.id}
            dev={dev}
            handleDelete={deleteDev}
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/devs/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const devs = await res.json()

  return {
    props: {
      devs,
      token,
    },
  }
}
