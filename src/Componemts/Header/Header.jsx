import Button from 'react-bootstrap/Button';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { UserInfo } from '../UserContext/UserContext';




const Header = () => {

   
    return (
        <div>
            <img src="./Pictures/logo.png" alt="" />
            <p className='fw-medium'>Journalism Without Fear or Favour</p>
            <p className='fw-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
            <div className='text-start bg-dark-subtle d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </div>
    );
};

export default Header;