import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserPage from '../pages/UserPage';
import CompanyPage from '../pages/CompanyPage';

const Routes = () => {
    const routes = [
        { path: '/', exact: true, component: UserPage },
        { path: '/companies', exact: true, component: CompanyPage },
    ];

    return (
        <Switch>
            <Suspense fallback={<div />}>
                {routes.map(route => (
                    <Route {...route} key={route.path} component={route.component} />
                ))}
            </Suspense>
        </Switch>
    );
};

export default Routes;
