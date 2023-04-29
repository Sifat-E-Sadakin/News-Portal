import React from 'react';
import MainNav from '../Nav/Nav';
import { useContext } from 'react';
import { UserInfo } from '../UserContext/UserContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    let {login}= useContext(UserInfo)

    let navigate = useNavigate();

    let location = useLocation();
    console.log(location);

    let from = location.state?.from?.pathname || '/';

    let handelLogin = event =>{
        event.preventDefault();

        let email = event.target.email.value
        let password = event.target.password.value
        console.log(email, password);
        login(email, password)
        .then(user=>{
            let newUser = user.user;
            console.log(newUser);
            navigate(from)
            
        })
        .catch(err=> console.log(err.message))
    }

    return (
        <div>
             <MainNav></MainNav>
            <form className="SignUpForm" onSubmit={handelLogin}>
                <h2>Login</h2>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
               
                <button type="submit">Submit</button>
            </form>

            
        </div>
    );
};

export default Login;