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
  
  const oldPosts = [
    { 
      published: true, 
      ghostRoute: '/stoked-on-meteor-the-goal-is-to-learn', 
      currentUrl: 'https://medium.com/hack-learn-make/stoked-on-meteor-the-goal-is-to-learn-syllabus-8e490848d57c'
    },
    { 
      published: true, 
      ghostRoute: '/stoked-on-meteor-discover-meteor', 
      currentUrl: 'https://medium.com/hack-learn-make/stoked-on-meteor-join-the-adventure-with-discover-meteor-1d71dc6abcc7'
    },
    { 
      published: false, 
      ghostRoute: '/stoked-on-meteor-the-meteor-chef', 
      currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/themeteorchef.md'
    },
    { 
      published: false, 
      ghostRoute: '/build-bulletproofs-meteor-apps-with-kadira', 
      currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/kadira.md'
    },
    { 
      published: false, 
      ghostRoute: '/become-a-meteor-ninja-with-the-spacedojo', 
      currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/spacedojo.md'
    },
    { 
      published: false, 
      ghostRoute: '/meteor-weekly-newsletter', 
      currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/weekly.md'
    },
    { 
      published: false, 
      ghostRoute: 'surf', 
      currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/flipflops.md'
    },
    { 
      published: false, 
      ghostRoute: 'transmission', 
      currentUrl: 'https://github.com/xavcz/hack-learn-make/blob/master/drafts/transmission.md'
    },
  ];
  
  oldPosts.map(post => Posts.insert(post));
});