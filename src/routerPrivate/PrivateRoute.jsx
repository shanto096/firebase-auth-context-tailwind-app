import React, { Children, useContext } from 'react';
import  { AuthContext } from '../Componets/provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Children}) => {
    const {data, loading} = useContext(AuthContext)
    if (loading) {
        return <><span>loading....</span></>
    }

    if (data) {
        return Children;
        
    } 
   return <Navigate to='/login' replace={true}></Navigate>
    
    
};

export default PrivateRoute;