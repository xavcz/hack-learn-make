export default schema = [`
type Post {
  _id: String
  published: Boolean
  currentUrl: String
  ghostRoute: String
}
type Query {
  posts: [Post]
}
schema {
  query: Query
}
`];
