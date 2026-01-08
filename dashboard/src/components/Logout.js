import React from 'react'

function Logout() {
    return ( 
        <>
        <h1>logout</h1>
        <button
            onClick={() => {
                // Redirect to landing page (e.g., "/")
                window.location.href = "http://localhost:3000";
            }}
        >
            Logout
        </button>
        </>
     );
}

export default Logout;