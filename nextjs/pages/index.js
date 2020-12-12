import Head from "next/head";
import sanityClient from "../sanity-client";
import styles from "../styles/Home.module.css";

export default function Home({ devs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <pre>{JSON.stringify(devs, null, 2)}</pre>
      <main className={styles.main}>
        <div></div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const devs = await sanityClient.fetch(
    `*[_type == 'dev']{ 'slug': slug.current }`
  );

  return {
    props: {
      devs,
    },
  };
}
