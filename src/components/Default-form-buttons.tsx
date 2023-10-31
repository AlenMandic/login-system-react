import React from 'react'

interface DefaultFormButtonsProps {
    handleOurLogin: (parameterOne: React.SyntheticEvent) => void,
    ourLoginAttempt: boolean,
    handleOurNotRegistered: () => void,
}

export function DefaultFormButtons({
    handleOurLogin,
    ourLoginAttempt,
    handleOurNotRegistered
  }:DefaultFormButtonsProps) {
    return <div className="button-box">
            <button onClick={handleOurLogin} disabled={ourLoginAttempt}>
              Sign in
            </button>
            <button onClick={handleOurNotRegistered} disabled={ourLoginAttempt}>
              Not registered?
            </button>
          </div>;
  }