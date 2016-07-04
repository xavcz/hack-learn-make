import React, { Component, PropTypes } from 'react';

import GoToArticleButton from './GoToArticleButton.jsx';

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <h1 className="title">{`{ Hack, Learn } = Make`}</h1>
          <div className="subtitle">The blog spacetraveled to Medium</div>
        </header>
        <div className="cta">
          <GoToArticleButton { ...this.props.data } />
        </div>
        <div className="gif">
          <img src="/telescope_to_rocket.gif" title="Made By Elvis" />
        </div>
      </div>
    )
  }
}

export default Layout;