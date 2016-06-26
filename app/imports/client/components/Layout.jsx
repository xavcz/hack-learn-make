import React, { Component } from 'react';


class Layout extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <h1 className="title">{`{ Hack, Learn } = Make`}</h1>
          <div className="subtitle">The blog spacetraveled to Medium</div>
        </header>
        <div className="cta">
          <button onClick={ () => window.location = 'https://medium.com/hack-learn-make' }>
            <i className="fa fa-medium"></i><span>read the blog</span>
          </button>
        </div>
        <div className="gif">
          <img src="telescope_to_rocket.gif" title="Made By Elvis" />
        </div>
      </div>
    )
  }
}

export default Layout;