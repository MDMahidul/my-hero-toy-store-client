import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="min-h-screen progress w-56"></progress>;
    }
    
    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;