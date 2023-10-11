export function DemoAccounts({
  ourLoginAttempt,
  user
}) {
  return <div className={`users ${ourLoginAttempt ? "addOpacity" : "removeOpacity"}`}>
        <p>Hacked list of available users...</p>
        <ul>
          {user.map(user => <li key={user.id} style={{
        fontWeight: '600'
      }}>
              Username: {user.username} || Password: {user.password}
            </li>)}
        </ul>
      </div>;
}
  