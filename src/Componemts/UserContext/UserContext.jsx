import React, { createContext } from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';

export let UserInfo = createContext(null)

const UserContext = ({children}) => {

    const auth = getAuth(app);

    let [user, setUser] = useState(null)

    let [loading , setLoading] = useState(true);

    let check = 'check';


    let createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, newUser=>{
          
                console.log('from onAuth', newUser);
                setUser(newUser);
                setLoading(false);
            
        })

        return ()=> unsubscribe();
    },[])

    let logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    let info = {
        user,
        createUser,
        check,
        login,
        logout,
        loading
    }


    return (
        <UserInfo.Provider value={
            info
        }>
            {children}

        </UserInfo.Provider>
    );
};

export default UserContext;