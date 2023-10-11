export function DefaultFormButtons({
  handleOurLogin,
  ourLoginAttempt,
  handleOurNotRegistered
}) {
  return <div className="button-box">
          <button onClick={handleOurLogin} disabled={ourLoginAttempt}>
            Sign in
          </button>
          <button onClick={handleOurNotRegistered} disabled={ourLoginAttempt}>
            Not registered?
          </button>
        </div>;
}
