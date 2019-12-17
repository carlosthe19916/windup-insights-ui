import { AxiosError } from "axios";
import { ActionType, getType } from "typesafe-actions";
import { MigrationProject, ExtendedMigrationProject, ProjectListItem } from "../../models/windup";
import { FetchStatus } from "../common";
import {
  fetchMigrationProjectListRequest,
  fetchMigrationProjectListSuccess,
  fetchMigrationProjectListFailure
} from './actions';

export const stateKey = 'migrationProjectList';

export type MigrationProjectListState = Readonly<{
  projects: ExtendedMigrationProject[] | null;
  error: AxiosError<any> | null;
  status: FetchStatus;
}>;

export const defaultState: MigrationProjectListState = {
  projects: null,
  error: null,
  status: FetchStatus.none,
};

export type MigrationProjectListAction = ActionType<
  | typeof fetchMigrationProjectListRequest
  | typeof fetchMigrationProjectListSuccess
  | typeof fetchMigrationProjectListFailure
>;

export function migrationProjectListReducer(
  state = defaultState,
  action: MigrationProjectListAction
): MigrationProjectListState {
  switch (action.type) {
    case getType(fetchMigrationProjectListRequest):
      return {
        ...state,
        status: FetchStatus.inProgress,
      };
    case getType(fetchMigrationProjectListSuccess):
      const entry: ExtendedMigrationProject[] = action.payload.map((entry: ProjectListItem) => {
        let migrationProject: MigrationProject = Object.assign({}, entry.migrationProject);

        Object.keys(entry).filter(key => key !== 'migrationProject').forEach(key => {
            migrationProject[key] = entry[key];
        });

        return migrationProject;
      });

      return {
        ...state,
        status: FetchStatus.complete,
        error: null,
        projects: entry,
      };
    case getType(fetchMigrationProjectListFailure):
      return {
        ...state,
        status: FetchStatus.complete,
        error: action.payload,
      };
    default:
      return state;
  }
}
