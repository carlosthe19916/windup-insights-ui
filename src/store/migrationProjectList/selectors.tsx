import { RootState } from '../rootReducer';
import { stateKey } from './reducer';

export const projectsState = (state: RootState) => state[stateKey];

export const projects = (state: RootState) => {
  const srcs = projectsState(state).projects;
  if (srcs) {
    return srcs;
  }
  return [];
};

export const status = (state: RootState) => projectsState(state).status;
export const error = (state: RootState) => projectsState(state).error;
