import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: `bssxgfic`,
  dataset: `production`,
  useCdn: process.env.NODE_ENV === 'production',
})
