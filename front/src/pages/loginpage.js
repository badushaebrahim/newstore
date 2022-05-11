import React from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import { useHref } from 'react-router'
function Loginpage() {
 const[email,setEmail]=React.useState('')
 const[password,setPassword]=React.useState('')
 function getEmail(e){
    setEmail(e.target.value)
  }
  function getPassword(e){
    setPassword(e.target.value)
  }
    var url="http://localhost:8080/login"
  function login() {
  if(email!=='' && password!==''){
    const md5 = require('md5')
    var hash=md5(password)
    //axios login
    axios.post(url, {
      params: {
        name:email
        ,password:hash
      }
    })
    .then(function (response) {
      if(response.data.status==='success'){
        alert('Login Successful')
        console.log(response)
        
      }else{
        alert('Login Failed')
      }

    })
    .catch(function (error) {
      console.log(error);
    })
  }

  }


  return (
    <body style={{backgroundColor: "lightblue",width:"100%"}} >
      
      <br></br>
      <br></br>
      <br></br>
      <center>
        <Card style={{ paddingLeft:"10rem", paddingRight: "10rem",paddingBottom: "10rem", width: '50%',height:"35rem" }}>
    
    <Card.Body>
      <Card.Title><h1>Login</h1></Card.Title>
      <br></br>
      <Card.Text>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <br></br>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <br></br>
          
          <button type="submit" onClick={login} className="btn btn-primary">Login</button>
        </form>
      </Card.Text>
      <Card.Footer>
        <small className="text-muted">New User? <a href="/register">Register</a></small>
      </Card.Footer>
    </Card.Body>

        </Card>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </center>
       
    </body>
  )
}

export default Loginpage