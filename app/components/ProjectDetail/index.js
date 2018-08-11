import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetailItem from '../../components/ProjectDetailItem';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import './ProjectDetail.css';

class ProjectDetail extends React.Component {
  render() {
    const {
      currentProject,
      projectDetail,
      detailType,
      isDetailLoading,
      haveDetailError,
    } = this.props;

    if (isDetailLoading) {
      return <Loading />;
    }

    if (haveDetailError) {
      return <ErrorMessage />;
    }

    if (!currentProject || currentProject.size === 0) {
      return (
        <div>
          &nbsp;&nbsp;&nbsp;Select one project on side nav to display details
        </div>
      );
    }

    const detailList = projectDetail.map(item => (
      <div key={item.id}>
        <ProjectDetailItem item={item} detailType={detailType} />
      </div>
    ));

    return (
      <div className="ProjectDetail">
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <p>
          <strong>Last updated:</strong> {currentProject.updated_at}
        </p>
        <h3>Contributor List</h3>
        <div className="DetailList">{detailList}</div>
      </div>
    );
  }
}

ProjectDetail.propTypes = {
  currentProject: PropTypes.object,
  projectDetail: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  detailType: PropTypes.string,
  isDetailLoading: PropTypes.bool,
  haveDetailError: PropTypes.object,
};

export default ProjectDetail;
