import React from "react";
import "./style.css";
import { useState } from "react";
import DefaultPage from "./components/Default-page";
import Notification from "./components/Notifications";

//simulate some database data
const registeredUsers = [
  { username: "jAck-", password: "aa123", id: 1 },
  { username: "john323", password: "bb456", id: 2 },
  { username: "drew_own55", password: "cc789", id: 3 },
];

type notificationState = string | null;

export default function App() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [successfullLogin, setSuccesfullLogin] = useState(false);
  const [showNotification, setShowNotification] = useState<notificationState>(null);

  function resetForm() {
    setUsername("");
    setPassword("");
    setPasswordVisibility(false);
    setLoginAttempt(false);
  }

  function showErrorNotification(message:string) {
    setShowNotification(message)
            resetForm()
            setTimeout(() => {
              setShowNotification(null)
            }, 5000)
  }

  function togglePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
  }

  function handleLogin(e:React.SyntheticEvent) {
    e.preventDefault();
    setLoginAttempt(true);
    if (username === "" || password === "") {
      showErrorNotification("Please fill out both fields.")
      return
    }
    // simulating a network request using a promise.
    const simulateNetworkRequest = () => {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          const userId = registeredUsers.findIndex(
            (user) => user.username === username
          );

          if (userId === -1) {
            showErrorNotification("Username not found.")
            reject("Username not found.")
          } else if (registeredUsers[userId].password === password) {
            resolve();
          } else {
            showErrorNotification("Incorrect password.")
            reject("Incorrect password.")
          }
        }, 3000);
      });
    };

    setLoginAttempt(true)
    simulateNetworkRequest()
    // if the Promise resolves, do this.
      .then(() => {
        setSuccesfullLogin(!successfullLogin);
      })
      // if the promise doesn't resolve, throw a relevant error.
      .catch((error) => {
        console.log(error)
        resetForm();
      });
  }

  function handleUsername(e:React.SyntheticEvent) {
    const trimmedUsername = (e.target as HTMLInputElement).value.trim()
    setUsername(trimmedUsername);
  }

  function handlePassword(e:React.SyntheticEvent) {
    const trimmedPassword = (e.target as HTMLInputElement).value.trim()
    setPassword(trimmedPassword);
  }

  return (
    <>
    <Notification message={showNotification} />
    <DefaultPage ourUsername={username} handleOurUsername={handleUsername} ourPasswordInput={password} ourPasswordVisibility={passwordVisibility} toggleOurPasswordVisibility={togglePasswordVisibility} handleOurLogin={handleLogin} ourLoginAttempt={loginAttempt}  ourRegisteredUsers={registeredUsers} handleOurPassword={handlePassword} isOurLoginSuccessfull={successfullLogin} />
    </>
  );
}
