import React from 'react';
import './ErrorMessage.css';

class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="ErrorMessage">There was an error loading the info</div>
    );
  }
}

ErrorMessage.propTypes = {};

export default ErrorMessage;
