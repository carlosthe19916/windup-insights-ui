import React, { Component } from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';
import CreateProject from '../../SmartComponents/CreateProject';
import { migrationProjectListActions } from 'src/store/migrationProjectList';
import { CreateProjectData } from 'src/SmartComponents/CreateProject/CreateProject';

interface StateToProps {}

interface DispatchToProps {
  deleteProvisionalProjects: typeof migrationProjectListActions.deleteProvisionalProjects;
}

export interface Props extends StateToProps, DispatchToProps {
  history: any;
}

interface State {
  createProjectStepData: CreateProjectData | null;
}

class CreateProjectWizardPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      createProjectStepData: null
    };
  }

  componentDidMount() {
    const { deleteProvisionalProjects } = this.props;
    deleteProvisionalProjects();
  }

  handleOnCreateProjectChange = (isValid: boolean, value: CreateProjectData): void => {
    if (isValid) {
      this.setState({
        createProjectStepData: value
      });
    } else {
      this.setState({
        createProjectStepData: null
      });
    }
  };

  handleNext = () => {};

  handleCancel = () => {
    const { history } = this.props;
    history.push('/project-list');
  };

  render() {
    const { createProjectStepData } = this.state;

    const steps: WizardStep[] = [
      {
        name: 'Create Project',
        component: <CreateProject onChange={this.handleOnCreateProjectChange} />,
        enableNext: createProjectStepData != null
      },
      {
        name: 'Add Applications',
        component: <p>Add Applications</p>,
        canJumpTo: false,
        enableNext: false
      },
      {
        name: 'Configure the Analysis',
        component: <p>Configure the Analysis</p>,
        canJumpTo: false,
        enableNext: false
      }
    ];

    return (
      <div style={{ height: '400px' }}>
        <Wizard
          isOpen={true}
          isFullHeight
          isFullWidth
          onNext={this.handleNext}
          onClose={this.handleCancel}
          steps={steps}
          title="Create project"
          description="Follow the steps to create a project"
        />
      </div>
    );
  }
}

export default CreateProjectWizardPage;
