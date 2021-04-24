import Link from 'next/link'

export const DashboardDev = ({ dev, handleDelete }) => {
  return (
    <div>
      <h4>
        <Link href={`/devs/${dev.slug}`}>
          <a>{dev.name}</a>
        </Link>
      </h4>
      <Link href={`/devs/edit/${dev.id}`}>
        <a>
          <span>Edit Dev</span>
        </a>
      </Link>
      <a href="#" onClick={() => handleDelete(dev.id)}>
        x <span>Delete</span>
      </a>
    </div>
  )
}
