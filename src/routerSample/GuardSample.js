import React from 'react'
import { Navigate } from 'react-router-dom';

function GuardSample({children}) {

    console.log('CHILDREN', children);

    let userLoginStatus = false;

    if(userLoginStatus){
        return children
    }else{
        return <Navigate to="/login" replace={true} />
    }
}

export default GuardSample