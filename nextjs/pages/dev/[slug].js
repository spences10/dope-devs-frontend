import sanityClient from "../../sanity-client";

export default function DevPage() {
  return <p>Yo OY</p>;
}

export async function getStaticProps() {
  const devs = await sanityClient.fetch(
    `*[_type == 'dev']{ 
      'slug': slug.current 
    }`
  );
  return { props: {} };
}

export async function getStaticPaths() {
  const devs = await sanityClient.fetch(
    `*[_type == 'dev']{ 
      'slug': slug.current 
    }`
  );

  return {
    paths: devs.map(({ slug }) => `/dev/${slug}`),
    fallback: false,
  };
}
