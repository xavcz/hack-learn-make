import React, { Component } from 'react';

class GoToArticleButton extends Component {
  
  showLoading() {
    return (<div>Incoming data...</div>)
  }

  showButton() {
    // default button properties
    let button = {
      location: 'https://medium.com/hack-learn-make',
      icon: 'medium',
      value: 'read the blog'
    };

    // get the path
    const { pathname } = window.location;

    // check if the post is stored
    const potentialPost = _.filter(this.props.posts, post => pathname.indexOf(post.ghostRoute) > -1);

    // ok there is a post
    if (!_.isEmpty(potentialPost)) {
      const post = potentialPost[0];

      button = {
        location: post.currentUrl,
        icon: post.published ? 'medium' : 'github',
        value: `read the ${post.published ? 'post' : 'draft' }`,
      }
    }

    return (
      <button onClick={ () => window.location = button.location }>
        <i className={ `fa fa-${ button.icon }` }></i><span>{ button.value }</span>
      </button>
    )
  }

  render() {
    return this.props.loading ? this.showLoading() : this.showButton();
  }
}



export default GoToArticleButton;