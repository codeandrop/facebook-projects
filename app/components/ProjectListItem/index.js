import React from 'react';
import PropTypes from 'prop-types';
import './ProjectListItem.css';

class Project extends React.Component {
  render() {
    const { project, getProjectDetail } = this.props;
    return (
      <div className="ProjectListItem">
        <hr />
        <button
          className="button"
          onClick={() => getProjectDetail(project.full_name, 'contributors')}
        >
          <strong>Project:</strong> {project.name}
        </button>
        <br />
        <span>
          <strong>Watchers:</strong> {project.watchers}
        </span>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
  getProjectDetail: PropTypes.func,
};

export default Project;
