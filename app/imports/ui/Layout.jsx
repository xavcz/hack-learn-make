import React, { Component } from 'react';

//import { DocHead } from 'meteor/kadira:dochead';

class Layout extends Component {
  render() {

    //DocHead.setTitle('{ Hack, Learn } = Make');
    //DocHead.addMeta({ name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, shrink-to-fit=no' });

    return (
      <div className="main">
        <header>
          <h1 className="title">{`{ Hack, Learn } = Make`}</h1>
          <div className="subtitle">The blog spacetraveled to Medium</div>
        </header>
        <div className="cta">
          <button>
            <span>read the blog</span>
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