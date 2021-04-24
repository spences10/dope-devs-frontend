import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from './footer'
import { Header } from './header'
import { Showcase } from './showcase'
export const Layout = ({
  title,
  keywords,
  description,
  children,
}) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Dope Devs',
  description: 'The Dopest Devs on the intertetz',
  keywords: 'developer, web developer, app developer',
}
