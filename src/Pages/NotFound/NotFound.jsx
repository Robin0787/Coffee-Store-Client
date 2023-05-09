import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../assets/images/404/404.gif";
const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={notFound} alt="" className=''/>
            <Link to={'/'} className='text-md font-semibold flex items-center gap-1'><ArrowLeftIcon className='w-5 h-5' /> Back To Home</Link>
        </div>
    );
};

export default NotFound;