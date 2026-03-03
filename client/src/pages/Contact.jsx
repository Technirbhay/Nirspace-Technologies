import { useLocation } from "react-router-dom";
import "../style/contact.css";
import { useState } from "react";
import axios from "axios";

function Contact(){

const location = useLocation();
const selectedPlan = location.state?.plan || "";

const [form,setForm] = useState({
name:"",
email:"",
project:"",
budget:selectedPlan
});

const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);
const [error,setError] = useState("");

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e)=>{
e.preventDefault();

setError("");

// 🔥 Basic Validation
if(form.name.length < 3){
setError("Name must be at least 3 characters");
return;
}

if(!form.email.includes("@")){
setError("Enter valid email address");
return;
}

if(form.project.length < 10){
setError("Project description too short");
return;
}

try{

setLoading(true);

await axios.post(
"http://localhost:5000/api/leads/create",
form
);

setSuccess(true);

setForm({
name:"",
email:"",
project:"",
budget:selectedPlan
});

setTimeout(()=>{
setSuccess(false);
},3000);

}catch(err){
setError("Server Error. Try again.");
}

setLoading(false);
};

return(

<section className="contact section">

<div className="container">

<h2 className="contact-title">
Start Your Project
</h2>

{success && (
<div className="success-box">
Project Submitted Successfully 🚀
</div>
)}

{error && (
<div className="error-box">
{error}
</div>
)}

<form
className="contact-form"
onSubmit={handleSubmit}
>

<input
type="text"
name="name"
value={form.name}
placeholder="Your Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
value={form.email}
placeholder="Your Email"
onChange={handleChange}
required
/>

<input
type="text"
name="budget"
value={form.budget}
placeholder="Selected Plan"
onChange={handleChange}
/>

<textarea
name="project"
value={form.project}
placeholder="Tell us about your project..."
onChange={handleChange}
required
/>

<button type="submit" disabled={loading}>
{loading ? "Sending..." : "Send Message"}
</button>

</form>

</div>

</section>
);
}

export default Contact;