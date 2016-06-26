import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Posts from '/imports/data/collection';

export default resolvers = {
  Query: {
    async posts() {
      const posts = await Posts.find({}).fetch();
      console.log(posts);
      return posts;
    }
  }
}
