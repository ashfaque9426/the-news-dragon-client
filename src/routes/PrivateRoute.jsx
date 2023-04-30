import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { Audio } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // <Spinner animation="border" variant="danger" />

    if (loading) return <div style={{width: "100vw", height: "100vh"}} className='row'>
        <div className='col-6'>
            <div style={{ width: "100%", height: "50%" }} className='d-flex justify-content-center align-items-center'>
                <Audio
                    height="250"
                    width="250"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        </div>
    </div>

    if(user) return children;

    return <Navigate state={{from: location}} to='/login' replace />
};

export default PrivateRoute;