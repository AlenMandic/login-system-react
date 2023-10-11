import { DemoAccounts } from "./Demo-accounts";
import { DefaultFormButtons } from "./Default-form-buttons";
import { DefaultForm } from "./Default-form";
import { useState } from "react";
import Signup from "./Sign-up-page";
import LoggedIn from "./Succesfull-login-page";

export default function DefaultPage({
  ourUsername,
  handleOurUsername,
  ourPasswordInput,
  ourPasswordVisibility,
  toggleOurPasswordVisibility,
  handleOurLogin,
  ourLoginAttempt,
  ourRegisteredUsers,
  handleOurPassword,
  isOurLoginSuccessfull,
}) {
  const [showSignupPage, setShowSignupPage] = useState(false);

  function handleOurNotRegistered() {
    setShowSignupPage(!showSignupPage);
  }

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
        <div className="main-wrapper">
          <div className="form">
            <DefaultForm
              ourLoginAttempt={ourLoginAttempt}
              handleOurUsername={handleOurUsername}
              ourUsername={ourUsername}
              passwordInput={passwordInput}
              ourPasswordVisibility={ourPasswordVisibility}
              toggleOurPasswordVisibility={toggleOurPasswordVisibility}
            />

            <DefaultFormButtons
              handleOurLogin={handleOurLogin}
              ourLoginAttempt={ourLoginAttempt}
              handleOurNotRegistered={handleOurNotRegistered}
            />

            <div className={`animation-div ${ ourLoginAttempt ? "visible" : "hidden" }`}></div>
           </div>

          <DemoAccounts
            ourLoginAttempt={ourLoginAttempt}
            user={ourRegisteredUsers}
          />
        </div>
      )}
    </>
  );
}
