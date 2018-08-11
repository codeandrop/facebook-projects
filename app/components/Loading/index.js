import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="Loading">
        Loading... <br />
        <br />
        <img
          src="https://loading.io/spinners/gears/index.dual-gear-loading-icon.svg"
          alt="loading"
        />
      </div>
    );
  }
}

Loading.propTypes = {};

export default Loading;
