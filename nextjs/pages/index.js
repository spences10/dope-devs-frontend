import Head from "next/head";
import Link from "next/link";
import sanityClient from "../sanity-client";
import styles from "../styles/Home.module.css";

export default function Home({ devs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {devs.map((dev) => {
          return (
            <article key={dev._id}>
              <h2>
                <Link href={`dev/${dev.slug}`}>
                  <a>{dev.name}</a>
                </Link>
              </h2>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const devs = await sanityClient.fetch(
    `*[_type == 'dev']{ 
      _id,
      name,
      'slug': slug.current 
    }`
  );

  return {
    props: {
      devs,
    },
  };
}
