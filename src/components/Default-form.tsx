import React from 'react'

interface DefaultFormProps {
    ourUsername: string,
    handleOurUsername: (parameterOne: React.SyntheticEvent) => void,
    passwordInput: React.JSX.Element,
    ourPasswordVisibility: boolean,
    toggleOurPasswordVisibility: () => void,
    ourLoginAttempt: boolean,
}

export function DefaultForm({
    ourLoginAttempt,
    handleOurUsername,
    ourUsername,
    passwordInput,
    ourPasswordVisibility,
    toggleOurPasswordVisibility
  }:DefaultFormProps) {
  
    return <form id="contact-form" className={`${ourLoginAttempt ? "addOpacity" : "removeOpacity"}`}>
            <h2 id="contact-title">Welcome to our site.</h2>
            <input type="text" name="name" required placeholder="Username" onChange={handleOurUsername} value={ourUsername} autoComplete="true"></input>
            {passwordInput}
            <div className="passwordBox">
              <p>Show password</p>
              <input type="checkbox" checked={ourPasswordVisibility} onChange={toggleOurPasswordVisibility} id="password-toggler"></input>
            </div>
          </form>;
  }