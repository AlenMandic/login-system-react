import "./style.css";
import { useState } from "react";
import DefaultPage from "./components.jsx/Default-page";

//simulate some database data
const registeredUsers = [
  { username: "jAck-", password: "aa123", id: 1 },
  { username: "john323", password: "bb456", id: 2 },
  { username: "drew_own55", password: "cc789", id: 3 },
];

export default function App() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [successfullLogin, setSuccesfullLogin] = useState(false);

  function resetForm() {
    setUsername("");
    setPassword("");
    setPasswordVisibility(false);
    setLoginAttempt(false);
  }

  function togglePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
  }

  function handleLogin(e) {
    e.preventDefault();
    setLoginAttempt(true);
    if (username === "" || password === "") {
      alert("Please fill out both fields.");
      resetForm();
      return;
    }

    // simulating a network request using a promise.
    const simulateNetworkRequest = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const userId = registeredUsers.findIndex(
            (user) => user.username === username
          );

          if (userId === -1) {
            reject("Username not found.");
          } else if (registeredUsers[userId].password === password) {
            resolve();
          } else {
            reject("Incorrect password");
          }
        }, 2500);
      });
    };

    setLoginAttempt(true);

    if (username === "" || password === "") {
      alert("Please fill out both fields.");
      resetForm();
      return;
    }

    simulateNetworkRequest()
    // if the Promise resolves, do this.
      .then(() => {
        setSuccesfullLogin(!successfullLogin);
      })
      // if the promise doesn't resolve, throw a relevant error.
      .catch((error) => {
        alert(error);
        resetForm();
      });
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
    <DefaultPage ourUsername={username} handleOurUsername={handleUsername} ourPasswordInput={password} ourPasswordVisibility={passwordVisibility} toggleOurPasswordVisibility={togglePasswordVisibility} handleOurLogin={handleLogin} ourLoginAttempt={loginAttempt}  ourRegisteredUsers={registeredUsers} handleOurPassword={handlePassword} isOurLoginSuccessfull={successfullLogin} />
    </>
  );
}
