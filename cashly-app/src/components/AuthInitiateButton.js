import React from 'react';

const AuthInitiateButton = () => {
    const initiateOAuth = async () => {
        // Redirect to server route that initiates OAuth
        window.location.href = 'http://localhost:3001/auth/initiate';
    };

    return <button onClick={initiateOAuth}>Authorize with GoHighLevel</button>;
};

export default AuthInitiateButton;
