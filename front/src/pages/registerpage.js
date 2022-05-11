import React from 'react'
import{Card} from 'react-bootstrap'
import axios from 'axios'
function Registerpage() {
	const[name,setName]=React.useState('')
	const[email,setEmail]=React.useState('')
	const[password,setPassword]=React.useState('')
	const[confirmPassword,setConfirmPassword]=React.useState('')
	function getName(e){
		setName(e.target.value)
	}
	function getEmail(e){
		setEmail(e.target.value)
	}
	function getPassword(e){
		setPassword(e.target.value)
	}
	function getConfirmPassword(e){
		setConfirmPassword(e.target.value)
	}
	var url="http://localhost:8080/register"
	function register() {
		if(name!=='' && email!=='' && password!=='' && confirmPassword!==''){
			if(password===confirmPassword){
				const md5 = require('md5')
				var hash=md5(password)
				//axios register
				axios.post(url, {
					params: {
						name:name
						,email:email
						,password:hash
					}
				})
				.then(function (response) {
					if(response.data.status==='success'){
						alert('Register Successful')
						console.log(response)
						window.location.href='/login'
					}else{
						alert('Register Failed')
					}
				
				})
				.catch(function (error) {
					console.log(error);
				})
			}else{
				alert('Password and Confirm Password are not the same')
			}
		}else{
			alert('Please fill in all the fields')
		}
	}

		
	
  return (
	<body style={{backgroundColor: "purple",width:"100%"}} >
      
	<br></br>
	<br></br>
	<br></br>
	<center>
	  <Card style={{ paddingLeft:"10rem", paddingRight: "10rem",paddingBottom: "10rem", width: '50%',height:"35rem" }}>
      
      <Card.Body>
	<Card.Title><h1>Register</h1></Card.Title>
	<br></br>
	<Card.Text>
	  <form>
	  <div className="form-group">
	      <label for="exampleInputEmail1">Name</label>
	      <input type="text" required="true" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Name" />
	      
	    </div>
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
	    <div className="form-group">
	      <label for="exampleInputPassword1">RetypePassword</label>
	      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
	    </div>
	    <br></br>
	    
	    
	    <button type="submit" onClick={register} className="btn btn-primary">Register</button>
	  </form>
	</Card.Text>
	<Card.Footer>
	  <small className="text-muted">All ready Has an account ? <a href="/register">Signup</a></small>
	</Card.Footer>
      </Card.Body>
  
	  </Card>
	  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
	  </center>
	 
      </body>
  )
}

export default Registerpage