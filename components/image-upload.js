import { API_URL } from 'config'
import { useState } from 'react'

export const ImageUpload = ({ devId, imageUploaded, token }) => {
  const [image, setImage] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'devs')
    formData.append('refId', devId)
    formData.append('field', 'image')

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    if (res.ok) {
      imageUploaded()
    }
  }

  const handleFileChange = e => {
    setImage(e.target.files[0])
  }

  return (
    <div>
      <h1>Upload Dope Dev Image</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" />
      </form>
    </div>
  )
}
