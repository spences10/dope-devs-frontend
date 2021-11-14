import { gql } from '@urql/svelte'

export const developersQuery = gql`
  query Developers {
    developers {
      name
      avatar
      bio
      slug
      country {
        latitude
        longitude
      }
      technologies {
        name
      }
      profileImage {
        url(
          transformation: {
            image: { resize: { width: 200, height: 200, fit: clip } }
          }
        )
      }
    }
  }
`

export const developerQuery = gql`
  query Developer($slug: String!) {
    developer(where: { slug: $slug }) {
      name
      avatar
      bio
      country {
        latitude
        longitude
      }
      technologies {
        name
      }
    }
  }
`
