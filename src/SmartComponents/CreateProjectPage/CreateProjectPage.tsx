import React, { Component } from 'react';
import { Wizard } from '@patternfly/react-core';
import CreateProject from './CreateProject/CreateProject';

class CreateProjectPage extends Component {
  render() {
    const steps = [
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
        component: <p>Configure the Analysis</p>,
        hideCancelButton: true,
        nextButtonText: 'Close'
      }
    ];

    return (
      <div style={{ height: '400px' }}>
        <Wizard
          isOpen={true}
          isFullHeight
          isFullWidth
          onClose={() => console.log('closed')}
          steps={steps}
          title="Create project"
          description="Follow the steps to create a project"
        />
      </div>
    );
  }
}

export default CreateProjectPage;
