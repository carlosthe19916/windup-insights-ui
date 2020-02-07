// import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { notifications } from '@redhat-cloud-services/frontend-components-notifications';

import { migrationProjectListStateKey, migrationProjectListReducer } from './migrationProjectList';
import { migrationProjectStateKey, migrationProjectReducer } from './migrationProject';
import { deleteDialogStateKey, deleteDialogReducer } from './deleteDialog';

export type RootState = StateType<typeof rootReducer>;

export const rootReducer = {
  notifications,
  [migrationProjectListStateKey]: migrationProjectListReducer,
  [migrationProjectStateKey]: migrationProjectReducer,
  [deleteDialogStateKey]: deleteDialogReducer
};
