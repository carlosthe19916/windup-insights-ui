import CreateProject from './CreateProject';
import { connect } from 'react-redux';
import { migrationProjectActions } from '../../store/migrationProject';
import { createMapStateToProps } from '../../store/common';

const mapStateToProps = createMapStateToProps(state => ({
  
}));

const mapDispatchToProps = {
  fetchMigrationProjectIdByName: migrationProjectActions.fetchMigrationProjectIdByName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
