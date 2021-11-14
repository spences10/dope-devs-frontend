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
