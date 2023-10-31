import React from 'react'

interface LoggedInProp {
    ourLoggedInUser: string
}

export default function LoggedIn({ourLoggedInUser}:LoggedInProp) {

    function handleSignOut() {
      location.reload();
    }
   
       return (
         <div style={{margin: '50px', padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
           <h2 style={{color: 'white'}}>Welcome to your profile</h2>
           { }
           <h1 style={{color: 'white', fontSize: '56px'}}>{ourLoggedInUser}</h1>
           { }
           <h3 style={{color: 'white'}}>YOUR POSTS: COMING SOON...</h3>
           { }
           <button onClick={handleSignOut} style={{
             padding: '5px 10px',
             fontSize: '16px',
             textDecoration: 'none',
             textTransform: 'uppercase',
             overflow: 'hidden',
             transition: '.5s',
             marginTop: '20px',
             letterSpacing: '4px',
           }}>SIGN OUT</button>
           </div>
       )
   }