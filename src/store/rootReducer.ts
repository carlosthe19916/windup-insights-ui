// import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { notifications } from '@redhat-cloud-services/frontend-components-notifications';

import { migrationProjectListStateKey, migrationProjectListReducer } from './migrationProjectList';
import { deleteDialogStateKey, deleteDialogReducer } from './deleteDialog';

export type RootState = StateType<typeof rootReducer>;

// export const rootReducer = combineReducers({
//   [migrationProjectListStateKey]: migrationProjectListReducer
// });
export const rootReducer = {
  notifications,
  [migrationProjectListStateKey]: migrationProjectListReducer,
  [deleteDialogStateKey]: deleteDialogReducer
};
