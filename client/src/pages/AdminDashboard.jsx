import { useEffect, useState } from "react";
import "../style/admin.css";

function AdminDashboard(){

const [leads,setLeads] = useState([]);
const [loading,setLoading] = useState(true);
const [selectedProject,setSelectedProject] = useState(null);

/* ================= FETCH ================= */
useEffect(()=>{

const fetchLeads = async () => {

try{

const token = localStorage.getItem("token");

if(!token){
window.location.href="/admin/login";
return;
}

const res = await fetch(
"http://localhost:5000/api/leads",
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

if(res.status === 401){
localStorage.removeItem("token");
window.location.href="/admin/login";
return;
}

const data = await res.json();
setLeads(Array.isArray(data) ? data : []);

}catch(err){
console.log("Fetch Error:",err);
setLeads([]);
}

setLoading(false);
};

fetchLeads();

},[]);


/* ================= DELETE ================= */
const deleteLead = async (id) => {

try{

const token = localStorage.getItem("token");

await fetch(
`http://localhost:5000/api/leads/${id}`,
{
method:"DELETE",
headers:{
Authorization:`Bearer ${token}`
}
}
);

setLeads(prev =>
prev.filter(lead => lead._id !== id)
);

}catch(err){
console.log("Delete Error:",err);
}

};


/* ================= UPDATE STATUS ================= */
const updateStatus = async (id,newStatus) => {

try{

const token = localStorage.getItem("token");

const res = await fetch(
`http://localhost:5000/api/leads/${id}/status`,
{
method:"PUT",
headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},
body:JSON.stringify({status:newStatus})
}
);

if(!res.ok) return;

const updatedLead = await res.json();

setLeads(prev =>
prev.map(lead =>
lead._id === id ? updatedLead : lead
)
);

}catch(err){
console.log("Status Update Error:",err);
}

};


/* ================= SAFE STATS ================= */

const today = new Date().toDateString();

const safeLeads = Array.isArray(leads) ? leads : [];

const todayLeads = safeLeads.filter(lead =>
lead?.createdAt &&
new Date(lead.createdAt).toDateString() === today
).length;

const closedLeads = safeLeads.filter(
lead => lead?.status === "Closed"
).length;


return(

<div className="admin-main">

<h1>Dashboard</h1>

{/* ================= STATS ================= */}
<div className="stats-box">

<div className="stat">
<h3>{safeLeads.length}</h3>
<p>Total Leads</p>
</div>

<div className="stat">
<h3>{todayLeads}</h3>
<p>Today's Leads</p>
</div>

<div className="stat">
<h3>{closedLeads}</h3>
<p>Closed Deals</p>
</div>

</div>


{/* ================= TABLE ================= */}
{loading ? (

<p>Loading...</p>

) : (

<table>

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Project</th>
<th>Budget</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{safeLeads.map((lead)=>(
<tr key={lead._id}>
<td>{lead.name}</td>
<td>{lead.email}</td>


<td>
<button
className="view-btn"
onClick={()=>setSelectedProject(lead.project)}
>
View
</button>
</td>

<td>{lead.budget}</td>

<td>
<select
value={lead.status || "New"}
onChange={(e)=>
updateStatus(lead._id,e.target.value)
}
className="status-select"
>
<option value="New">New</option>
<option value="Contacted">Contacted</option>
<option value="Closed">Closed</option>
</select>
</td>

<td>
<button
className="delete-btn"
onClick={()=>deleteLead(lead._id)}
>
Delete
</button>
</td>

</tr>
))}

</tbody>

</table>

)}


{/* ================= MODAL ================= */}
{selectedProject && (

<div className="modal-overlay">

<div className="modal-box">

<h3>Project Details</h3>

<p>{selectedProject}</p>

<button
className="close-btn"
onClick={()=>setSelectedProject(null)}
>
Close
</button>

</div>

</div>

)}

</div>

);
}

export default AdminDashboard;