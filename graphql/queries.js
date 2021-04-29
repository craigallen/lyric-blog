import gql from 'graphql-tag'

export const allArticlesQuery = gql`
query allArticlesQuery {
  articles {
    id
    body
    title
    date
    description
    slug
  }
}
`

export const singleArticleQuery = gql`
query singleArticleQuery($id: ID!) {
  article(id: $id) {
    id
    title
    date
    body
    description
    slug
  }
}
`
