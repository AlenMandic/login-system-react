export default function LoggedIn({ourLoggedInUser}) {

 function handleSignOut() {
   location.reload();
 }

    return (
      <div style={{margin: '50px', padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1.5rem'}}>
        <h2 style={{color: 'white'}}>Welcome to your profile</h2>
        { }
        <h1 style={{color: 'white', fontSize: '56px'}}>{ourLoggedInUser}</h1>
        { }
        <h3 style={{color: 'white'}}>YOUR POSTS: COMING SOON...</h3>
        { }
        <button onClick={handleSignOut}>SIGN OUT</button>
        </div>
    )
}