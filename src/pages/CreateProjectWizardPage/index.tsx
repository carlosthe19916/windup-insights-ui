import { connect } from 'react-redux';
import CreateProjectWizardPage from './CreateProjectWizardPage';
import { migrationProjectListActions } from '../../store/migrationProjectList';

const mapDispatchToProps = {
  deleteProvisionalProjects: migrationProjectListActions.deleteProvisionalProjects
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProjectWizardPage);
