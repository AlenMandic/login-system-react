import { useState } from 'react';
import Signup from './Sign-up-page';
import LoggedIn from './Succesfull-login-page';

export default function DefaultPage({ourUsername, handleOurUsername, ourPasswordInput, ourPasswordVisibility, toggleOurPasswordVisibility, handleOurLogin, ourLoginAttempt, ourLoginAnimation, ourRegisteredUsers, handleOurPassword, isOurLoginSuccessfull }) {

  const[showSignupPage, setShowSignupPage] = useState(false);

  function handleOurNotRegistered() {
    setShowSignupPage(!showSignupPage)
  }
  //{`animation-div ${ourLoginAnimation ? "visible" : "hidden"}`}

    const passwordInput = ourPasswordVisibility ? (
        <input
          type="text"
          name="password"
          required
          placeholder="Password"
          value={ourPasswordInput}
          onChange={handleOurPassword}
          autoComplete="true"
        ></input>
      ) : (
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={ourPasswordInput}
          onChange={handleOurPassword}
          autoComplete="true"
        ></input>
      );

      return (
        <>
          {showSignupPage ? (
            <Signup />
          ) : isOurLoginSuccessfull ? (
            <LoggedIn ourLoggedInUser={ourUsername} />
          ) : (
            <div>
              <div className="form">
        <form id="contact-form" className={`${ourLoginAnimation ? "addOpacity" : "removeOpacity"}`}>
          <h2 id="contact-title">Welcome to our site.</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Username"
            onChange={handleOurUsername}
            value={ourUsername}
            autoComplete="true"
          ></input>
          {passwordInput}
          <div className="passwordBox">
            <p>Show password</p>
            <input
              type="checkbox"
              checked={ourPasswordVisibility}
              onChange={toggleOurPasswordVisibility}
              id="password-toggler"
            ></input>
          </div>
        </form>

        <div className="button-box">
          <button onClick={handleOurLogin} disabled={ourLoginAttempt}>
            Sign in
          </button>
          <button onClick={handleOurNotRegistered} disabled={ourLoginAttempt}>
            Not registered?
          </button>
        </div>

        <div
          className={`animation-div ${ourLoginAnimation ? "visible" : "hidden"}`}
        ></div>
      </div>

      <div className={`users ${ourLoginAnimation ? "addOpacity" : "removeOpacity"}`}>
        <p>Hacked list of available users...</p>
        <ul>
          {ourRegisteredUsers.map((user) => (
            <li key={user.id} style={{fontWeight: '600'}}>
              Username: {user.username} || Password: {user.password}
            </li>
          ))}
        </ul>
      </div>
            </div>
          )}
        </>
      );
    }

