import { connect } from 'react-redux';
import ProjectListPage from './ProjectListPage';

import { migrationProjectListActions, migrationProjectListSelectors } from '../../store/migrationProjectList';
import { createMapStateToProps, createMapDispatchToProps } from '../../store/common';
import { deleteDialogActions } from '../../store/deleteDialog';

const mapStateToProps = createMapStateToProps(state => ({
  projects: migrationProjectListSelectors.projects(state) || [],
  error: migrationProjectListSelectors.error(state),
  status: migrationProjectListSelectors.status(state)
}));

// const mapDispatchToProps = createMapDispatchToProps(() =>({
//   fetchMigrationProjects: migrationProjectListActions.fetchMigrationProjects,
//   showDeleteDialog: deleteDialogActions.openModal,
//   closeDeleteDialog: deleteDialogActions.closeModal
// }));
const mapDispatchToProps = {
  fetchMigrationProjects: migrationProjectListActions.fetchMigrationProjects,
  showDeleteDialog: deleteDialogActions.openModal,
  closeDeleteDialog: deleteDialogActions.closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListPage);
