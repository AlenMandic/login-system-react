export default function LoggedIn({ourLoggedInUser}) {

 function handleSignOut() {
   location.reload();
 }

    return (
        <>
        <h2 style={{color: 'white'}}>Welcome to your profile</h2>
        { }
        <h1 style={{color: 'white'}}>{ourLoggedInUser}</h1>
        { }
        <h3 style={{color: 'white'}}>YOUR POSTS: COMING SOON...</h3>
        { }
        <button onClick={handleSignOut}>SIGN OUT</button>
        </>
    )
}