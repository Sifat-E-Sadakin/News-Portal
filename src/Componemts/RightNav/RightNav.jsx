import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import './RightNav.css'
import picture1 from './../../../public/Pictures/qZone1.png'
import picture2 from './../../../public/Pictures/qZone2.png'
import picture3 from './../../../public/Pictures/qZone3.png'

const RightNav = () => {
    return (
        <div className='text-start my-2 py-1'>
            <h4>Login With</h4>
            <div className='d-flex flex-column gap-1 py-2'>
                <Button variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-primary"><FaGithub /> Login With GitHub</Button>

            </div>

            <div className='my-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                   
                </ListGroup>
            </div>

            <div className='bg-secondary-subtle text-center my-5 py-3' >
                <h4>Q-Zone</h4>
                <div >
                    <img src={picture1} alt="" />
                    <img src={picture2} alt="" />
                    <img src={picture3} alt="" />
                </div>
            </div>

            <div>
                 <div className='forBg'>
                    <h2>Create an Amazing Newspaper</h2>

                    <p>
                        Discover thousand of options, easy to customize layouts, one-click to improve demo and much more
                    </p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>

        </div>
    );
};

export default RightNav;