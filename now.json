{
  "version": 2,
  "name": "pins-world",
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build",
      "config": { "distDir": "public" }
    }
  ],
    "build": {
      "env": {
        "NODE_ENV": "DEVELOPMENT",
        "HASURA_GRAPHQL_URL": "@hasura-url-development",
        "HASURA_GRAPHQL_ADMIN_SECRET": "@hasura-secret"
      }
  }
}