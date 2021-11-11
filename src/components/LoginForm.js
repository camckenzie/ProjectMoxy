import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

function LoginForm() {
    let history = useHistory();

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

    //
    //FOR WHEN YOU LOGIN CORRECTLY
    //
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
      history.push("/menu")
      

    } else {
      console.log("Details do not match!");
      //Below is what is actually displayed on screen
      setError("Details do not match!");
      
    }
  }

  // const Logout = () => {
  //   setUser({
  //     name: "",
  //     email: ""
  //   });
  // }
    //Local details for form
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    //Prevent errors
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error!="") ? ( <div className="error">{error}</div> ) : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        {/* Changes details after typing in but only updating name */}
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN" />
                    
                </div>
            </form>
        </div>
        
        
    )
}

export default LoginForm;
