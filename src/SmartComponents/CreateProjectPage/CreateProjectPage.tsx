import React, { Component } from 'react';
import { Wizard } from '@patternfly/react-core';

class CreateProjectPage extends Component {
  render() {
    const steps = [
      {
        name: 'Create Project',
        component: <p>Create Project</p>
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
        <Wizard isInPage onClose={() => console.log('closed')} steps={steps} />
      </div>
    );
  }
}

export default CreateProjectPage;
