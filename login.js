import React from "react"
const Login=()=>{
return(
<div>
<h1>Login</h1>
<p>Login Form</p>
</div>
)
}
export default LoginPage



const LoginPage=()=>(
<Layout>
<h1>Login</h1>
<FancyParagraph
paragraphText="Styled with CSS
Modules."/>
</Layout>
)

const [errorMessages,setErrorMessages]=useState({});
const [isSubmitted,setIsSubmitted]=useState(false);

// Generate JSX code for error message
const renderErrorMessage=(name)=>
name===errorMessages.name &&(
<div className="error">{errorMessages.message}</div>
);

// JSX code login form
const renderForm=(
<div className="form">
<form>
<div classNme="input-container">
<label>Username</label>
<input type="text" name="uname"required/>
{renderErrorMessage("uname")}
</div>
<div className="input-container">
<label>Password</label>
<input type="password" name="pass" required/>
{renderErrorMessage("pass")}
</div>
<div className="button-container">
<input type="submit"/>
</div>
</form>
</div>

const handleSubmit=(event)=>{
// Prevent page reload
event.preventDefault();
};
<form onSubmit={handleSubmit}>

// User Login info
const database=[
{
username:"user1",
password:"pass1"
},
{
username:"user2",
password:"pass2"
}
];

const errors={
uname:"invalid username",
pass:"invalid password"
};
const handleSubmit=(event)
// Prevent page reload 
event.preventDefault();
var{uname,pass}=document.forms[0];

// Find user login info
const userData=database.find((user)=>user.username===uname.value);

// Compare user info 
if (userData){
if (userData.password !==pass.value){
// Invalid password
setErrorMessages({name:"pass",message:errors.pass});
}else{
setIsSubmitted(true);
}
}else{
// Username not found
setErrorMessages({name:"uname",message:errors.uname});
}
};

<div className="login-form">
<div className="title">Sign In</div>
{isSubmitted?<div>User is succesfully logged in</div>:renderForm}















