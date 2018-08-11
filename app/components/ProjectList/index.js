import React from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';

import ProjectListItem from '../../components/ProjectListItem';

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
    const { projects, sortDirection } = this.state;

    let projectsSorted = projects.sort(this.sortProject);

    if (sortDirection && sortDirection.toLowerCase() === 'asc') {
      projectsSorted = projectsSorted.reverse();
    }

    const projectList = projectsSorted.map(project => (
      <div key={project.id}>
        <ProjectListItem
          project={project}
          getProjectDetail={this.props.getProjectDetail}
        />
      </div>
    ));

    return <div className="ProjectList">{projectList}</div>;
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
