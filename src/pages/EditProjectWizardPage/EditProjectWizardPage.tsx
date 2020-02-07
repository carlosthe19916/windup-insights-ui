import React, { Component } from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';
import CreateProject from '../../SmartComponents/CreateProject';
import { migrationProjectActions } from 'src/store/migrationProject';

interface StateToProps {}

interface DispatchToProps {
  fetchMigrationProject(): typeof migrationProjectActions.fetchMigrationProject;
}

export interface Props extends StateToProps, DispatchToProps {
  history: any;
}

interface State {
  steps: WizardStep[];
}

class CreateProjectWizardPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      steps: [
        {
          name: 'Create Project',
          component: <CreateProject />
        },
        {
          name: 'Add Applications',
          component: <p>Add Applications</p>
        },
        {
          name: 'Configure the Analysis',
          component: <p>Configure the Analysis</p>
        }
      ]
    };
  }

  componentDidMount() {}

  handleCandel = () => {
    const { history } = this.props;
    history.push('/project-list');
  };

  render() {
    const { steps } = this.state;

    return (
      <div style={{ height: '400px' }}>
        <Wizard
          isOpen={true}
          isFullHeight
          isFullWidth
          onClose={this.handleCandel}
          steps={steps}
          title="Create project"
          description="Follow the steps to create a project"
        />
      </div>
    );
  }
}

export default CreateProjectWizardPage;
