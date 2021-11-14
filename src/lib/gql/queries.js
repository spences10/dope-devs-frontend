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
