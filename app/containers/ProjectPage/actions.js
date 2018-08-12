import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  GET_PROJECT_DETAIL,
  GET_PROJECT_DETAIL_SUCCESS,
  GET_PROJECT_DETAIL_ERROR,
} from './constants';

export function getProjects() {
  return { type: GET_PROJECTS };
}

export function projectsReady(projects) {
  return { type: GET_PROJECTS_SUCCESS, projects };
}

export function projectsError(error) {
  return { type: GET_PROJECTS_ERROR, error };
}

export function getProjectDetail(projectName, detailType) {
  return { type: GET_PROJECT_DETAIL, projectName, detailType };
}

export function projectDetailReady(currentProject, projectDetail) {
  return { type: GET_PROJECT_DETAIL_SUCCESS, currentProject, projectDetail };
}

export function projectDetailError(error) {
  return { type: GET_PROJECT_DETAIL_ERROR, error };
}
