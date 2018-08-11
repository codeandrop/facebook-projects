import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetailItem from '../../components/ProjectDetailItem';

class ProjectDetail extends React.Component {
  render() {
    const {
      projectDetail,
      detailType,
      isDetailLoading,
      haveDetailError,
    } = this.props;

    if (!projectDetail) {
      return <div>Select one project on side nav to display details</div>;
    }

    if (isDetailLoading) {
      return <div>Loading detail...</div>;
    }

    if (haveDetailError) {
      return <div>There was an error loading the info</div>;
    }

    return projectDetail.map(item => (
      <div key={item.id}>
        <ProjectDetailItem item={item} detailType={detailType} />
      </div>
    ));
  }
}

ProjectDetail.propTypes = {
  projectDetail: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  detailType: PropTypes.string,
  isDetailLoading: PropTypes.bool,
  haveDetailError: PropTypes.object,
};

export default ProjectDetail;
