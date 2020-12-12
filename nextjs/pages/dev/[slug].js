import sanityClient from "../../sanity-client";

export default function DevPage({ name, description }) {
  return (
    <>
      <h1>{name}</h1>
      <h3>{description}</h3>
    </>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const [devs] = await sanityClient.fetch(
    `*[_type == 'dev' && slug.current == '${slug}']{ 
      _id,
      name,
      description,
      likes
    }`
  );
  return { props: { ...devs } };
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
