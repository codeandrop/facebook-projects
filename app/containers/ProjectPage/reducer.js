import { fromJS } from 'immutable';

import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  GET_PROJECT_DETAIL,
  GET_PROJECT_DETAIL_SUCCESS,
  GET_PROJECT_DETAIL_ERROR,
} from './constants';

export const initialState = fromJS({
  isLoading: false,
  haveError: null,
  projectList: [],
  isDetailLoading: false,
  haveDetailError: null,
  currentProject: {},
  projectDetail: [],
});

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return state
        .set('isLoading', true)
        .set('haveError', null)
        .set('projectList', []);
    case GET_PROJECTS_SUCCESS:
      return state.set('projectList', action.projects).set('isLoading', false);
    case GET_PROJECTS_ERROR:
      return state.set('haveError', action.error).set('isLoading', false);
    case GET_PROJECT_DETAIL:
      return state
        .set('isDetailLoading', true)
        .set('haveDetailError', null)
        .set('projectDetail', []);
    case GET_PROJECT_DETAIL_SUCCESS:
      return state
        .set('currentProject', action.currentProject)
        .set('projectDetail', action.projectDetail)
        .set('isDetailLoading', false);
    case GET_PROJECT_DETAIL_ERROR:
      return state
        .set('haveDetailError', action.error)
        .set('isDetailLoading', false);
    default:
      return state;
  }
}

export default projectReducer;
