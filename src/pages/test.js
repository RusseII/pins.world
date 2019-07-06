import React from 'react'

const AuthorList = ({ authors }) => (
  <div>
    {authors.map((a, i) => (
      <div key={i}>
        <h2>{a.name}</h2>
      </div>
    ))}
  </div>
)

const Index = ({ data }) => (
  <div>
    <h1>My Authors </h1>
    <AuthorList authors={data.hasura.author} />
  </div>
)
export const query = graphql`
  query AuthorQuery {
    hasura {
      # <- fieldName as configured in the gatsby-config
      author {
        # Normal GraphQL query
        id
        name
      }
    }
  }
`
export default Index