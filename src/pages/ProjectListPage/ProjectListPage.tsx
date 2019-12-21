import React, { Component } from 'react';
import { AxiosError } from 'axios';
import {
  Bullseye,
  Button,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  TextInput,
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  DropdownItem,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { Table, TableHeader, TableBody, ICell, IRow, IActions } from '@patternfly/react-table';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import { ListUlIcon, SortAlphaDownIcon, TableIcon } from '@patternfly/react-icons';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';
import Welcome from '../../PresentationalComponents/Welcome';
import { ExtendedMigrationProject } from '../../models/windup';
import { migrationProjectListActions } from '../../store/migrationProjectList';
import { FetchStatus } from '../../store/common';
import { deleteDialogActions } from '../../store/deleteDialog';
import { Link } from 'react-router-dom';

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
          title: '',
          props: {
            className: 'pf-u-text-align-right'
          }
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
              title: project.description ? (
                project.description
              ) : (
                <Text component={TextVariants.small}>No description</Text>
              )
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

  buildSearchBox = () => {
    return <TextInput type="search" aria-label="search text input" />;
  };

  buildDropdown = () => {
    return (
      <Dropdown
        position={DropdownPosition.right}
        toggle={<DropdownToggle>All</DropdownToggle>}
        dropdownItems={[
          <DropdownItem key="item-1">Item 1</DropdownItem>,
          <DropdownItem key="item-2">Item 2</DropdownItem>,
          <DropdownItem key="item-3">Item 3</DropdownItem>,
          <DropdownItem isDisabled key="all">
            All
          </DropdownItem>
        ]}
      />
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
          <div className="ins-c-table__toolbar">
            <Toolbar className="pf-l-toolbar pf-u-justify-content-space-between pf-u-mx-xl pf-u-my-md">
              <ToolbarGroup>
                <ToolbarItem className="pf-u-mr-xl">{this.buildSearchBox()}</ToolbarItem>
                <ToolbarItem className="pf-u-mr-md">{this.buildDropdown()}</ToolbarItem>
                <ToolbarItem>
                  <Button variant="plain" aria-label="Sort A-Z">
                    <SortAlphaDownIcon />
                  </Button>
                </ToolbarItem>
              </ToolbarGroup>
              <ToolbarGroup>
                <ToolbarItem>
                  <Button variant="plain" aria-label="Insert Table">
                    <TableIcon />
                  </Button>
                </ToolbarItem>
                <ToolbarItem className="pf-u-mx-md">
                  <Button variant="plain" aria-label="Insert Bulleted List">
                    <ListUlIcon />
                  </Button>
                </ToolbarItem>
                <ToolbarItem className="pf-u-mx-md">
                  <Link to="/create-project">
                    <Button aria-label="Action 2">New Project</Button>
                  </Link>
                </ToolbarItem>
              </ToolbarGroup>
            </Toolbar>
          </div>

          <Divider component="div" />

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
