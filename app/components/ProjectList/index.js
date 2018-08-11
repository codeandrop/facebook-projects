import React from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';

import Project from '../../components/Project';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: this.props.projects,
      sortField: this.props.sortField || 'watchers',
      sortDirection: this.props.sortDirection || 'desc',
    };
  }

  sortProject = (a, b) => b[this.state.sortField] - a[this.state.sortField];

  render() {
    const { projects, sortDirection, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading sidenav...</div>;
    }

    let projectsSorted = projects.sort(this.sortProject);

    if (sortDirection && sortDirection.toLowerCase() === 'asc') {
      projectsSorted = projectsSorted.reverse();
    }

    return projectsSorted.map(project => (
      <div className="item" key={project.id}>
        <Project
          project={project}
          getProjectDetail={this.props.getProjectDetail}
        />
      </div>
    ));
  }
}

ProjectList.propTypes = {
  projects: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  sortField: PropTypes.string,
  sortDirection: PropTypes.string,
  getProjectDetail: PropTypes.func,
};

export default ProjectList;
