import React, { Component } from 'react';
import { AxiosError } from 'axios';
import { Bullseye, Button } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, ICell, IRow, IActions } from '@patternfly/react-table';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import Welcome from '../../PresentationalComponents/Welcome';
import { ExtendedMigrationProject } from '../../models/windup';
import { migrationProjectListActions } from '../../store/migrationProjectList';
import { FetchStatus } from '../../store/common';
import { deleteDialogActions } from '../../store/deleteDialog';

interface StateToProps {
  projects: ExtendedMigrationProject[];
  error: AxiosError | null;
  status: FetchStatus;
}

interface DispatchToProps {
  // fetchMigrationProjects(): typeof migrationProjectListActions.fetchMigrationProjects;
  fetchMigrationProjects(): Promise<void>;
  showDeleteDialog: typeof deleteDialogActions.openModal;
  closeDeleteDialog: typeof deleteDialogActions.closeModal;
}

export interface Props extends StateToProps, DispatchToProps {}

export interface State {
  columns: (ICell | string)[];
  rows: (IRow | string[])[];
  actions: IActions;
}

class ProjectListPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name' },
        { title: 'Description' },
        {
          title: ''
        }
      ],
      rows: [],
      actions: [
        {
          title: 'Edit',
          onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
        }
      ]
    };
  }

  // lifecycle

  componentDidMount() {
    this.refreshData();
  }

  //

  refreshData = () => {
    const { fetchMigrationProjects } = this.props;
    fetchMigrationProjects().then(() => {
      this.filtersInRowsAndCells();
    });
  };

  filtersInRowsAndCells = () => {
    const projects: ExtendedMigrationProject[] = this.props.projects ? Object.values(this.props.projects) : [];

    let rows: IRow[] = [];
    if (projects.length > 0) {
      rows = projects.map((project: ExtendedMigrationProject) => {
        const onDelete = () => {
          this.handleDeleteReport(project);
        };

        return {
          cells: [
            {
              title: project.title
            },
            {
              title: project.description
            },
            {
              title: (
                <Button variant={'secondary'} onClick={onDelete}>
                  Delete
                </Button>
              )
            }
          ]
        };
      });
    }

    this.setState({ rows });
  };

  // Handlers

  handleDeleteReport = (project: ExtendedMigrationProject) => {
    const { showDeleteDialog, closeDeleteDialog } = this.props;

    showDeleteDialog({
      name: project.title,
      type: 'project',
      onDelete: () => {
        // deleteReport(project.id, project.reportName).then(() => {
        //   closeDeleteDialog();
        //   this.refreshData();
        // });
      },
      onCancel: () => {
        closeDeleteDialog();
      }
    });
  };

  // render

  renderWelcome = () => {
    return <Welcome />;
  };

  renderError = () => {
    return <Welcome />;
  };

  renderLoading = () => {
    return (
      <Bullseye>
        <p>Loading...</p>
      </Bullseye>
    );
  };

  renderProjectList = () => {
    const { columns, rows, actions } = this.state;

    return (
      <React.Fragment>
        <PageHeader>
          <PageHeaderTitle title={'Projects'} />
        </PageHeader>
        <Main>
          <Table aria-label="Simple Table" cells={columns} rows={rows} actions={actions}>
            <TableHeader />
            <TableBody />
          </Table>
        </Main>
      </React.Fragment>
    );
  };

  render() {
    const { projects, error, status } = this.props;

    if (error) {
      return this.renderError();
    }

    if (status != FetchStatus.complete) {
      return this.renderLoading();
    }

    if (projects.length == 0) {
      return this.renderWelcome();
    }

    return this.renderProjectList();
  }
}

export default ProjectListPage;
