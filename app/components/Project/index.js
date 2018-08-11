import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class Project extends React.Component {
  render() {
    const { project, getProjectDetail } = this.props;
    return (
      <div>
        <button
          onClick={() => getProjectDetail(project.full_name, 'contributors')}
        >
          Project Name: {project.name}
        </button>
        <div>Watchers: {project.watchers}</div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
  getProjectDetail: PropTypes.func,
};

export default Project;
