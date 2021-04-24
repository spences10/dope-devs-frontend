import Head from 'next/head'

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

      <div>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Dope Devs',
  description: 'The Dopest Devs on the intertetz',
  keywords: 'developer, web developer, app developer',
}
