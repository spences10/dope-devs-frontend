import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; Dope Devs {`${new Date().getFullYear()}`}
      </p>
      <p>
        <Link href="/about">
          <a>About this project.</a>
        </Link>
      </p>
    </footer>
  )
}
