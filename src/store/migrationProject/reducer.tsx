import { AxiosError } from "axios";
import { ActionType, getType } from "typesafe-actions";
import { MigrationProject } from "../../models/windup";
import { FetchStatus } from "../common";
import {
  fetchMigrationProjectRequest,
  fetchMigrationProjectSuccess,
  fetchMigrationProjectFailure
} from './actions';

export const stateKey = 'migrationProject';

export type MigrationProjectState = Readonly<{
  byId: Map<number, MigrationProject>;
  errors: Map<number, AxiosError | null>;
  fetchStatus: Map<number, FetchStatus>;
}>;

export const defaultState: MigrationProjectState = {
  byId: new Map(),
  errors: new Map(),
  fetchStatus: new Map()
};

export type MigrationProjectAction = ActionType<
  | typeof fetchMigrationProjectRequest
  | typeof fetchMigrationProjectSuccess
  | typeof fetchMigrationProjectFailure
>;

export function migrationProjectReducer(
  state = defaultState,
  action: MigrationProjectAction
): MigrationProjectState {
  switch (action.type) {
    case getType(fetchMigrationProjectRequest):
      return {
        ...state,
        fetchStatus: new Map(state.fetchStatus).set(
          action.payload.projectId,
          FetchStatus.inProgress
        ),
      };
    case getType(fetchMigrationProjectSuccess):
      return {
        ...state,
        fetchStatus: new Map(state.fetchStatus).set(
          action.meta.projectId,
          FetchStatus.complete
        ),
        byId: new Map(state.byId).set(action.meta.projectId, {
          ...action.payload,
        }),
        errors: new Map(state.errors).set(action.meta.projectId, null),
      };
    case getType(fetchMigrationProjectFailure):
      return {
        ...state,
        fetchStatus: new Map(state.fetchStatus).set(
          action.meta.projectId,
          FetchStatus.complete
        ),
        errors: new Map(state.errors).set(action.meta.projectId, action.payload),
      };
    default:
      return state;
  }
}
