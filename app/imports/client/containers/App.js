import React, { Component } from 'react';
import { connect } from 'react-apollo';
import { Meteor } from 'meteor/meteor';

import Layout from '../components/Layout.jsx';

function mapQueriesToProps() {
  return {
    data: {
      query: gql`
          {
            posts {
              _id,
              published,
              currentUrl,
              ghostRoute,
            },
          }
        `,
      forceFetch: true
    }
  };
}

// This container brings in Apollo GraphQL data
const AppWithData = connect({mapQueriesToProps})(Layout);

export default AppWithData;
