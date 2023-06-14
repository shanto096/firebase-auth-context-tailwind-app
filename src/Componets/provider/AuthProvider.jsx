import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase.config';
  

 export const AuthContext = createContext(null)
 
 const auth = getAuth(app)

const AuthProvider = ({children}) => {

 const [data, setData] = useState(null)
 const [loading, setLoading] = useState(true)
    


    const createRegister = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const connection = onAuthStateChanged(auth, user=>{
            console.log('paichi',user);
          setData(user)
          setLoading(false)
        });
        return () => {
        connection()
        };
    }, []);





    const authInfo = {
        data,
        loading,
        createRegister,
        login,
        logOut,

    }
   
    return (
         <AuthContext.Provider value = {authInfo}>
               {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;