import React from 'react';
import MainLayout from '../layouts/MainLayout';
import UserProvider from '../providers/UserProvider';
import ListData from '../containers/ListData';

const MainPage = props => {
    console.log('props', props);
    return (
        <MainLayout active={0}>
            <UserProvider entity>
                <ListData endpoint="users" />
                {/* <AddData /> */}
            </UserProvider>
        </MainLayout>
    );
};

export default MainPage;
