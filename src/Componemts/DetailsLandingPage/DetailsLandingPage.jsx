import React from 'react';
import Header from '../Header/Header';
import MainNav from '../Nav/Nav';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const DetailsLandingPage = () => {
    return (
        <div>
             <Header></Header>
            <MainNav></MainNav>       

            <div className='container'>

                <LeftNav></LeftNav>

                <div><Outlet></Outlet></div>

                <RightNav></RightNav>

            </div>
            
        </div>
    );
};

export default DetailsLandingPage;