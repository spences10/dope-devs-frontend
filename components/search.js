import { useRouter } from 'next/router'
import { useState } from 'react'

export const Search = () => {
  const [term, setTerm] = useState('')

  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    router.push(`/devs/search?term=${term}`)
    setTerm('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="Search Devs"
        />
      </form>
    </div>
  )
}
