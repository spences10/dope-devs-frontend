import Image from 'next/image'
import Link from 'next/link'

export const DevItem = ({ dev }) => {
  return (
    <div>
      <div>
        <Image
          src={
            dev.image
              ? dev.image.formats.thumbnail.url
              : '/images/twitter-egg.jpg'
          }
          width={170}
          height={170}
        />
      </div>

      <div>
        <h3>{dev.name}</h3>
      </div>

      <div>
        <Link href={`/devs/${dev.slug}`}>
          <a>Details</a>
        </Link>
      </div>
    </div>
  )
}
