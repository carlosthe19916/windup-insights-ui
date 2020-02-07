import ApiClient from './apiClient';
import { AxiosPromise } from 'axios';
import { ProjectListItem, MigrationProject } from '../models/windup';

const GET_MIGRATION_PROJECTS_URL = '/migrationProjects/list';
const DELETE_PROVISIONAL_PROJECTS_URL = '/migrationProjects/deleteProvisional';
const GET_MIGRATION_PROJECT_URL = '/migrationProjects/get';
const GET_ID_BY_NAME_URL = '/migrationProjects/id-by-name';

export const getAll = (): AxiosPromise<ProjectListItem[]> => {
  return ApiClient.get<ProjectListItem[]>(GET_MIGRATION_PROJECTS_URL);
};

export const deleteProvisional = () => {
  return ApiClient.delete(DELETE_PROVISIONAL_PROJECTS_URL);
};

export const get = (id: number): AxiosPromise<MigrationProject> => {
  return ApiClient.get<MigrationProject>(GET_MIGRATION_PROJECT_URL + '/' + id);
};

export const getIdByName = (name: string): AxiosPromise<number | null> => {
  return ApiClient.get(GET_ID_BY_NAME_URL + '/' + encodeURIComponent(name));
};
