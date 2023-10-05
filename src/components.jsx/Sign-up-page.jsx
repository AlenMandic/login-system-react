export default function Signup() {

    function handleBack() {
        location.reload();
    }

    return (
        <div style={{margin: '50px', padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1.5rem'}}>
        <h1 style={{color: 'white'}}>REGISTRATION PAGE</h1>
        <h2 style={{color: 'white'}}>Sign-up here</h2>
        { }
        <h3 style={{color: 'white'}}>Work in progress...coming soon!</h3>
        { }
        <button onClick={handleBack}>GO BACK</button>
        </div>
    )

}