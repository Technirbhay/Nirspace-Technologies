import { useState } from "react";
import "../style/admin.css";

function AdminLogin(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login = async()=>{

const res = await fetch(
"http://localhost:5000/api/admin/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email,password})
}
);

const data = await res.json();

localStorage.setItem("token",data.token);

window.location="/admin/dashboard";
};

return(

<div className="admin-container">

<div className="admin-box">

<h2>Admin Login</h2>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={login}>
Login
</button>

</div>

</div>

);
}

export default AdminLogin;