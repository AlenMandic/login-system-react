import React from 'react'

export default function Signup() {

    function handleBack() {
        location.reload();
    }

    return (
        <div style={{margin: '50px', padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1 style={{color: 'white'}}>REGISTRATION PAGE</h1>
        <h2 style={{color: 'white'}}>Sign-up here</h2>
        { }
        <h3 style={{color: 'white'}}>Work in progress...coming soon!</h3>
        { }
        <button onClick={handleBack} style={{
              padding: '5px 10px',
              fontSize: '16px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              overflow: 'hidden',
              transition: '.5s',
              marginTop: '20px',
              letterSpacing: '4px',
        }}>GO BACK</button>
        </div>
    )
}