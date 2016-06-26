import { apolloServer } from 'graphql-tools';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import { Meteor } from 'meteor/meteor';
import Posts from '/imports/data/collection.js';
import schema from '/imports/data/schema.js';
import resolvers from '/imports/data/resolvers.js';

const GRAPHQL_PORT = 4000;

const graphQLServer = express();

graphQLServer.use('/graphql', apolloServer(async () => {
  return {
    graphiql: true,
    pretty: true,
    schema,
    resolvers
  };
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));

Meteor.startup(() => {
  const post = Posts.findOne({}, {_id: 1});
  if (post) {
    return;
  }
  
  Posts.insert({ 
    published: false, 
    ghostRoute: '/stoked-on-meteor-discover-meteor', 
    currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/discover.md'
  });
});