import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }
    if(loading){
        return <progress className="progress w-5/6 flex justify-center items-center"></progress>;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;