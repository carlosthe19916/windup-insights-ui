import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { createStandardAction } from 'typesafe-actions';
import { MigrationProject } from '../../models/windup';
import { get, getIdByName } from '../../api/migrationProjects';

interface MigrationProjectActionMeta {
  projectId: number;
}

interface MigrationProjectByNameActionMeta {
  projectName: string;
}

export const fetchMigrationProjectRequest = createStandardAction('migrationProject/fetch/request')<
  MigrationProjectActionMeta
>();
export const fetchMigrationProjectSuccess = createStandardAction('migrationProject/fetch/success')<
  MigrationProject,
  MigrationProjectActionMeta
>();
export const fetchMigrationProjectFailure = createStandardAction('migrationProject/fetch/failure')<
  AxiosError,
  MigrationProjectActionMeta
>();

export const fetchMigrationProjectIdByNameRequest = createStandardAction('migrationProjectGetIdByName/fetch/request')<
  MigrationProjectByNameActionMeta
>();
export const fetchMigrationProjectIdByNameSuccess = createStandardAction('migrationProjectGetIdByName/fetch/success')<
  number | null,
  MigrationProjectByNameActionMeta
>();
export const fetchMigrationProjectIdByNameFailure = createStandardAction('migrationProjectGetIdByName/fetch/failure')<
  AxiosError,
  MigrationProjectByNameActionMeta
>();

export const fetchMigrationProject = (projectId: number) => {
  return (dispatch: Dispatch) => {
    const meta: MigrationProjectActionMeta = {
      projectId: projectId
    };

    dispatch(fetchMigrationProjectRequest(meta));

    return get(projectId)
      .then((res: AxiosResponse<MigrationProject>) => {
        dispatch(fetchMigrationProjectSuccess(res.data, meta));
      })
      .catch((err: AxiosError) => {
        dispatch(fetchMigrationProjectFailure(err, meta));
      });
  };
};

export const fetchMigrationProjectIdByName = (projectName: string) => {
  return (dispatch: Dispatch) => {
    const meta: MigrationProjectByNameActionMeta = {
      projectName: projectName
    };

    dispatch(fetchMigrationProjectIdByNameRequest(meta));

    return getIdByName(projectName)
      .then((res: AxiosResponse<number | null>) => {
        dispatch(fetchMigrationProjectIdByNameSuccess(res.data, meta));
        return res.data;
      })
      .catch((err: AxiosError) => {
        dispatch(fetchMigrationProjectIdByNameFailure(err, meta));
      });
  };
};
