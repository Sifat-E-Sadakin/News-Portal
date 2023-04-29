import React from 'react';
import { useContext } from 'react';
import { UserInfo } from '../UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    let {user, loading} = useContext(UserInfo);
    
    let location = useLocation();
    // console.log(location);

    // console.log(user);

    if(loading){
        return <><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner></>;
    }

    if(user){
        return children;
    }

    

    return <Navigate to={'/login'} state={{from : location}}></Navigate>
};

export default PrivateRoute;