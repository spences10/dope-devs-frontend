import Head from 'next/head'
import { Footer } from './footer'
import { Header } from './header'

export const Layout = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
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
