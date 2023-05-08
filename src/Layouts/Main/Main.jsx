import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='font-Rancho'>
            <Outlet />
        </div>
    );
};

export default Main;