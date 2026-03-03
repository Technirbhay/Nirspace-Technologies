import "../style/projectform.css";
import { useState } from "react";

function ProjectForm() {

const [form,setForm]=useState({
name:"",
email:"",
project:"",
budget:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit = async (e)=>{
e.preventDefault();

try{

await fetch(
"http://localhost:5000/api/leads/create",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
}
);

alert("Project Submitted ✅");

}catch(err){
console.log(err);
}

};

return(

<section className="project-form section">

<div className="container">

<h2>Fill Project Details</h2>

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Your Name"
onChange={handleChange}
required
/>

<input
name="email"
placeholder="Your Email"
onChange={handleChange}
required
/>

<textarea
name="project"
placeholder="Describe your project..."
onChange={handleChange}
required
/>

<select
name="budget"
onChange={handleChange}
required
>
<option value="">Select Budget</option>
<option>₹3k - ₹5k</option>
<option>₹5k - ₹10k</option>
<option>₹10k+</option>
</select>

<button type="submit">
Submit Project
</button>

</form>

</div>

</section>

);
}

export default ProjectForm;