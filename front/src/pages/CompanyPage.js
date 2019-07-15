import React from 'react';
import MainLayout from '../layouts/MainLayout';
// import UserProvider from '../providers/UserProvider';
import ListData from '../containers/ListData';

const MainPage = () => (
    <MainLayout active={1}>
        <ListData endpoint="companies" />
        {/* <UserProvider>
            <AddUser />
        </UserProvider> */}
    </MainLayout>
);

export default MainPage;
