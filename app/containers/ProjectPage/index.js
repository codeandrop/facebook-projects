import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  selectorProjects,
  selectorLoading,
  selectorError,
  selectorLoadingDetail,
  selectorErrorDetail,
  selectorProjectDetail,
  selectorCurrentProject,
} from './selectors';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import ProjectList from '../../components/ProjectList';
import ProjectDetail from '../../components/ProjectDetail';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

import { getProjects, getProjectDetail } from './actions';
import './ProjectPage.css';

export class ProjectPage extends React.PureComponent {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const {
      projectList,
      isLoading,
      haveError,
      currentProject,
      projectDetail,
      isDetailLoading,
      haveDetailError,
    } = this.props;

    if (isLoading) {
      return <Loading />;
    }
    if (haveError) {
      return <ErrorMessage />;
    }
    return (
      <div>
        <h1 className="title">Facebook Projects</h1>
        <div className="ProjectPage">
          <div className="NavBar">
            <ProjectList
              projects={projectList}
              getProjectDetail={this.props.getProjectDetail}
              sortField="watchers"
              sortDirection="desc"
            />
          </div>
          <div className="detail">
            <ProjectDetail
              isDetailLoading={isDetailLoading}
              haveDetailError={haveDetailError}
              currentProject={currentProject}
              projectDetail={projectDetail}
              detailType="contributors"
            />
          </div>
        </div>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  isLoading: PropTypes.bool,
  haveError: PropTypes.object,
  projectList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  currentProject: PropTypes.object,
  projectDetail: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  getProjects: PropTypes.func,
  getProjectDetail: PropTypes.func,
  isDetailLoading: PropTypes.bool,
  haveDetailError: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    getProjects: () => dispatch(getProjects()),
    getProjectDetail: (projectName, detailType) =>
      dispatch(getProjectDetail(projectName, detailType)),
  };
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectorLoading(),
  haveError: selectorError(),
  projectList: selectorProjects(),
  isDetailLoading: selectorLoadingDetail(),
  haveDetailError: selectorErrorDetail(),
  currentProject: selectorCurrentProject(),
  projectDetail: selectorProjectDetail(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'project', reducer });
const withSaga = injectSaga({ key: 'project', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectPage);
