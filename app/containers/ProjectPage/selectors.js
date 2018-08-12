import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectProject = state => state.get('project', initialState);

const selectorLoading = () =>
  createSelector(selectProject, projectState => projectState.get('isLoading'));

const selectorError = () =>
  createSelector(selectProject, projectState => projectState.get('haveError'));

const selectorProjects = () =>
  createSelector(selectProject, projectState =>
    projectState.get('projectList'),
  );

const selectorLoadingDetail = () =>
  createSelector(selectProject, projectState =>
    projectState.get('isDetailLoading'),
  );

const selectorErrorDetail = () =>
  createSelector(selectProject, projectState =>
    projectState.get('haveDetailError'),
  );

const selectorProjectDetail = () =>
  createSelector(selectProject, projectState =>
    projectState.get('projectDetail'),
  );

const selectorCurrentProject = () =>
  createSelector(selectProject, projectState =>
    projectState.get('currentProject'),
  );

export {
  selectorLoading,
  selectorError,
  selectorProjects,
  selectorLoadingDetail,
  selectorErrorDetail,
  selectorProjectDetail,
  selectorCurrentProject,
};
