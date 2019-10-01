import React, { Fragment, Component } from 'react';

import {
    Main,
    PageHeader,
    PageHeaderTitle
} from '@redhat-cloud-services/frontend-components';

interface Props {
    title: React.ReactNode
    mainStyle?: any;
};

interface State {
}

class StandardPage extends Component<Props, State> {

    public render() {
        const { title, mainStyle, children } = this.props;

        return (
            <Fragment>
                <PageHeader>
                    <PageHeaderTitle title={ title } />
                </PageHeader>
                <Main style={ mainStyle }>
                    { children }
                </Main>
            </Fragment>
        );
    }
};

export default StandardPage;
