//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import useForm from './useForm';
import LoginForm from './LoginForm';
import { useState } from 'react';
import UserName from './UserName'

const App = (props) => {

  const {values, handleChange, handleSubmit } = useForm(login);
  const [name, SetName] = useState("");
  const [loggedIn, setLoggedin] = useState(false);

  function login(){
    const email = values.email;
    const password = values.password;
    axios.post('http://127.0.0.1:5000/auth/login', {email, password})
    .then(res =>{
      const token = res.data.token;
      const user = jwt.decode(token);
      SetName(user.name);
      setLoggedin(true);
    })
  }


  return (
    <div className="App">
      {loggedIn ?
      <UserName user = {name}/> :
      <LoginForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
