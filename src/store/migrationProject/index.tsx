import * as migrationProjectActions from './actions';
import * as migrationProjectSelectors from './selectors';
import {
    MigrationProjectAction,
    MigrationProjectState,
    migrationProjectReducer,
    stateKey as migrationProjectStateKey
} from './reducer';

export {
    migrationProjectStateKey,
    migrationProjectActions,
    migrationProjectSelectors,
    MigrationProjectAction as MigrationProjectAction,
    MigrationProjectState as MigrationProjectState,
    migrationProjectReducer as migrationProjectReducer
};
