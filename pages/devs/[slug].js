import { Layout } from '@/components/layout'
import { API_URL } from 'config'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DevPage({ dev }) {
  return (
    <Layout>
      <div>
        <h1>{dev.name}</h1>

        <ToastContainer />

        {dev.image && (
          <div>
            <Image src={dev.image.url} width={400} height={400} />
          </div>
        )}

        <h3>About:</h3>
        <p>{dev.about}</p>

        <Link href="/devs">
          <a>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/devs?slug=${slug}`)
  const devs = await res.json()

  return {
    props: {
      dev: devs[0],
    },
  }
}
