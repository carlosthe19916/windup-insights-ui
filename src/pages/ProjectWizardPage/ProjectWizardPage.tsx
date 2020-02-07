import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateProjectWizardPage from '../CreateProjectWizardPage';
import EditProjectWizardPage from '../EditProjectWizardPage';

class ProjectWizardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={'/'} component={CreateProjectWizardPage} />
          <Route path={'/create-project'} component={CreateProjectWizardPage} />
          <Route path={'/project/{projectId}'} component={EditProjectWizardPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ProjectWizardPage;
