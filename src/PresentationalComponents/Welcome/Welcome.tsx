import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    EmptyStateBody,
    EmptyState,
    Title,
    Bullseye,
    EmptyStateVariant,
    EmptyStateSecondaryActions,
    EmptyStateIcon
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

class Welcome extends Component {
  render() {
    return (
      <Bullseye>
        <EmptyState variant={EmptyStateVariant.full}>
          <EmptyStateIcon icon={CubesIcon} />
          <Title size="lg" headingLevel="h5">Welcome to the Web Console.</Title>
          <EmptyStateBody>
            Red Hat Application Migration Toolkit helps you to quickly assess and perform large-scale application migrations and modernizations.<br/>
            Create a project for your applications.
          </EmptyStateBody>
          <Link to={'/create-project'} className="pf-c-button pf-m-primary">
            New Project
          </Link>
          <EmptyStateSecondaryActions>
            To learn more, visit the&nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/red_hat_application_migration_toolkit/">documentation</a>.
          </EmptyStateSecondaryActions>
        </EmptyState>
      </Bullseye>
    );
  }
}

export default Welcome;
