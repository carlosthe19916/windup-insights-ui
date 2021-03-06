import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { createStandardAction } from 'typesafe-actions';
import { ProjectListItem } from '../../models/windup';
import { getAll, deleteProvisional } from '../../api/migrationProjects';

export const fetchMigrationProjectListRequest = createStandardAction('migrationProjectList/fetch/request')();
export const fetchMigrationProjectListSuccess = createStandardAction('migrationProjectList/fetch/success')<
  ProjectListItem[]
>();
export const fetchMigrationProjectListFailure = createStandardAction('migrationProjectList/fetch/failure')<
  AxiosError
>();

export const deleteProvisionalProjectsRequest = createStandardAction('deleteProvisionalProjects/fetch/request')();
export const deleteProvisionalProjectsSuccess = createStandardAction('deleteProvisionalProjects/fetch/success')();
export const deleteProvisionalProjectsFailure = createStandardAction('deleteProvisionalProjects/fetch/failure')<
  AxiosError
>();

export function fetchMigrationProjects() {
  return (dispatch: Dispatch) => {
    dispatch(fetchMigrationProjectListRequest());

    return getAll()
      .then((res: AxiosResponse<ProjectListItem[]>) => {
        dispatch(fetchMigrationProjectListSuccess(res.data));
      })
      .catch((err: AxiosError) => {
        dispatch(fetchMigrationProjectListFailure(err));
      });
  };
}

export const deleteProvisionalProjects = () => {
  return (dispatch: Dispatch) => {
    dispatch(deleteProvisionalProjectsRequest());

    return deleteProvisional()
      .then(() => {
        dispatch(deleteProvisionalProjectsSuccess());
      })
      .catch((err: AxiosError) => {
        dispatch(deleteProvisionalProjectsFailure(err));
      });
  };
};

// export const removeProject = (id: number) => {
//   return (dispatch: Dispatch) => {
//     dispatch(removeSourceRequest());
//     dispatch(deleteDialogActions.processing());

//     return apiRemoveSource(uuid)
//       .then(res => {
//         fetchSources()(dispatch);
//         dispatch(deleteDialogActions.closeModal());
//       })
//       .catch(err => {
//         dispatch(removeSourceFailure(err));
//         dispatch(deleteDialogActions.error(err));
//       });
//   };
// };
