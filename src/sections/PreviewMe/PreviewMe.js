// Modules.
import React from 'react';
import classnames from 'classnames';
import mrTImage from 'src/static/img/mr-t.jpg';

// Styles.
import styles from './PreviewMe.css';

export default class PreviewMe extends React.Component {

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
    }
  }

  render() {
    const classes = classnames({
      [styles.PreviewMe]: true,
    });
    return (
      <div className={classes}>
        <h1>This is the page to be previewed</h1>
        <img src={mrTImage}/>
      </div>
    );

  }

}
