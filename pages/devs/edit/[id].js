import { ImageUpload } from '@/components/image-upload'
import { Layout } from '@/components/layout'
import { Modal } from '@/components/modal'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function EditDevPage({ dev, token }) {
  const [values, setValues] = useState({
    name: '',
    about: '',
    website: '',
  })

  const [imagePreview, setImagePreview] = useState(
    dev.image ? dev.image.formats.thumbnail.url : null
  )
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(values).some(
      element => element === ''
    )

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    }

    const res = await fetch(`${API_URL}/devs/${dev.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthorized')
        return
      }
      toast.error('Something Went Wrong')
    } else {
      const dev = await res.json()
      router.push(`/devs/${dev.slug}`)
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const imageUploaded = async e => {
    const res = await fetch(`${API_URL}/devs/${dev.id}`)
    const data = await res.json()
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
  }

  return (
    <Layout title="Add Edit Dope Dev">
      <Link href="/devs">Go Back</Link>
      <h1>Edit Dope Dev</h1>

      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Dev Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              id="website"
              value={values.website}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="about">About</label>
            <textarea
              type="text"
              name="about"
              id="about"
              value={values.about}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <input type="submit" value="Update Dope Dev" />
      </form>

      <h2>Dope Dev Image</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={170} />
      ) : (
        <div>
          <p>No image uploaded</p>
        </div>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Set Image</button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          devId={dev.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/devs/${id}`)
  const dev = await res.json()

  return {
    props: {
      dev,
      token,
    },
  }
}
