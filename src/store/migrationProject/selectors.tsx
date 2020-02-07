import { RootState } from '../rootReducer';
import { stateKey } from './reducer';

export const migrationProjectState = (state: RootState) => state[stateKey];

// Fetch migration project

export const selectMigrationProject = (state: RootState, projectId: number) =>
  migrationProjectState(state).byId.get(projectId);
export const selectMigrationProjectFetchStatus = (state: RootState, projectId: number) =>
  migrationProjectState(state).fetchStatus.get(projectId);
export const selectMigrationProjectError = (state: RootState, projectId: number) =>
  migrationProjectState(state).errors.get(projectId);
