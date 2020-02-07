import { connect } from 'react-redux';
import CreateProjectWizardPage from './EditProjectWizardPage';
import { migrationProjectActions } from '../../store/migrationProject';

const mapDispatchToProps = {
  // fetchMigrationProject: migrationProjectActions.fetchMigrationProject
};

export default connect(
  null,
  // mapDispatchToProps
)(CreateProjectWizardPage);
