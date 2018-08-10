import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './index.css';

import Project from '../../components/Project';

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <Project className="item" />
      </div>
    );
  }
}

ProjectList.propTypes = {};

export default ProjectList;
