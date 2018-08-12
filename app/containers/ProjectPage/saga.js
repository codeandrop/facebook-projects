import { all, call, put, takeLatest, fork, select } from 'redux-saga/effects';
import request from 'utils/request';
import { selectorProjects } from './selectors';
import { GET_PROJECTS, GET_PROJECT_DETAIL } from './constants';
import {
  projectsReady,
  projectsError,
  projectDetailReady,
  projectDetailError,
} from './actions';

import { username } from '../../config';

export function* getProjects() {
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&per_page=100`;

  try {
    const projects = yield call(request, requestURL);
    yield put(projectsReady(projects));
  } catch (err) {
    yield put(projectsError(err));
  }
}

export function* watchProjects() {
  yield takeLatest(GET_PROJECTS, getProjects);
}

export function* getProjectDetail({ projectName, detailType }) {
  const allProjects = yield select(selectorProjects());

  const currentProject = allProjects.find(
    element => element.full_name === projectName,
  );

  const requestURL = `https://api.github.com/repos/${projectName}/${detailType}?per_page=100`;

  try {
    const projectDetail = yield call(request, requestURL);
    yield put(projectDetailReady(currentProject, projectDetail));
  } catch (err) {
    yield put(projectDetailError(err));
  }
}

export function* watchProjectDetail() {
  yield takeLatest(GET_PROJECT_DETAIL, getProjectDetail);
}

export default function* rootSaga() {
  yield all([fork(watchProjects), fork(watchProjectDetail)]);
}
