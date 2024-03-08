import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Config/firebase.config';
// import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handelGoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Current User: ', currentUser);
            setLoading(false);

            // Access token validation
            // if(currentUser){
            //     axios.post('https://bistro-boss-server-9677.onrender.com/jwt', {email : currentUser.email})
            //     .then(data =>{
            //         // console.log(data.data.token);
            //         localStorage.setItem('access-token', data.data.token)
            //     })
            // }
            if(currentUser){
                const loggedUser = {
                    email : currentUser.email
                  }
                fetch('https://bistro-boss-server-9677.onrender.com/jwt',{
                    method: "POST",
                    headers:{
                    "content-type": "application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data =>{
                    localStorage.setItem('access-token', data.token);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        });
        return () =>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        handelGoogleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;