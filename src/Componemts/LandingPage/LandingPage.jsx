import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import LeftNav from '../LeftNav/LeftNav';
import News from '../News/News';
import RightNav from '../RightNav/RightNav';
import './Landing.css'
import MainNav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';


const LandingPage = () => {
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

export default LandingPage;