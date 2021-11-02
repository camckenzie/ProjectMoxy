import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  //Check login details with this
  const adminUser = {
    name: "Chris",
    email: "chris@gmail.com",
    password: "password"
  }

  //array back from set state function, where we get user
  //once we login, info will be set
  const [user, setUser] = useState({name: "", email: ""});
  //Catch if else errors
  const [error, setError] = useState("");

  //Function called when we attempt to login
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
      
    }
  }

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    });
  }

  return (
    <div className="App">
      {/* If user email is not equal to nothing then welcome screen */}
      {(user.email != "") ? (
        <div className="welcome">
          <h2> Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
        // Then if not locked in, display login form
      ) : ( 
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
