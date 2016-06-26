import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Posts from '/imports/data/collection';

export default resolvers = {
  Query: {
    async posts() {
      return await Posts.find({}).fetch();
    }
  }
}
