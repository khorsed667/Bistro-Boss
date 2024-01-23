import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signup');


    return (
        <div>
            { isLogin || <Nav></Nav>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;