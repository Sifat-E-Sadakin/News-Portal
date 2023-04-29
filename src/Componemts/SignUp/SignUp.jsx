import React from 'react';
import './SignUp.css'
import MainNav from '../Nav/Nav';
import { useContext } from 'react';
import { UserInfo } from '../UserContext/UserContext';

const SignUp = () => {

    let {createUser}= useContext(UserInfo)

    let handelSignUp = (event)=>{
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        console.log(name , email , password);

        createUser(email, password)
        .then(user=>{
            let newUser = user.user;
            console.log(newUser);
        })
        .catch(err=>{
            console.log(err.message);
        })



        
    }




    return (
        <div>
            <MainNav></MainNav>
            <form className="SignUpForm" onSubmit={handelSignUp}>
                <h2>Sign Up</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default SignUp;