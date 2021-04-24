import { PER_PAGE } from 'config'
import Link from 'next/link'

export const Pagination = ({ page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE)
  return (
    <>
      {page > 1 && (
        <Link href={`/devs?page=${page - 1}`}>
          <a>Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/devs?page=${page + 1}`}>
          <a>Next</a>
        </Link>
      )}
    </>
  )
}
