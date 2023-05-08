import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/more/logo1.png";

const NavigationMenu = () => {
    return (
        <div className="navbar text-white mb-5 md:mb-0">
            <div className="navbar-start">
                <Link to={'/'} className='flex justify-center items-center gap-3 cursor-pointer'>
                    <img src={logo} alt="" className='h-14 w-14' />
                    <span className='text-xl'>Coffee Hunt</span>
                </Link>
            </div>
            <div className="navbar-center lg:navbar-end hidden lg:flex justify-center items-center gap-12">
                <Link to={'/'}>Home</Link>
                <Link to={'/add-coffee'}>Add Coffee</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box absolute right-0 w-40 space-y-3 text-center">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/add-coffee'}>Add Coffee</Link>
                        <Link to={'/about'}>About</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;