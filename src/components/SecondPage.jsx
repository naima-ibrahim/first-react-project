import React from 'react';
import { useNavigate, useLocation } from 'react-router';

function SecondPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message;
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">

            <h1>Welcome to the Second Page {message}</h1>

            <button
                className="btn btn-success mt-3"
                onClick={() => navigate('/')}
            >
                Back to First Page
            </button>

        </div>
    );
}

export default SecondPage;