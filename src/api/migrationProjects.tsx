import ApiClient from './apiClient';
import { AxiosPromise } from 'axios';
import { ProjectListItem } from '../models/windup';

const MIGRATION_PROJECTS = '/migrationProjects';

export const getAll = (): AxiosPromise<ProjectListItem[]> => {
  return ApiClient.get<ProjectListItem[]>(MIGRATION_PROJECTS + '/list');
};

export const deleteProvisional = () => {
  return ApiClient.delete(MIGRATION_PROJECTS + '/deleteProvisional');
};
