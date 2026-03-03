import { useNavigate } from "react-router-dom";
import "../style/pricing.css";

function Pricing(){
const navigate = useNavigate();
const plans=[
{
title:"Starter",
price:"₹2,999",
features:[
"1 Page Website",
"Responsive Design",
"Basic SEO",
"Delivery in 3 Days"
]
},
{
title:"Business",
price:"₹7,999",
features:[
"5 Page Website",
"Modern UI Design",
"SEO Optimization",
"Contact Form",
"Deployment Included"
]
},
{
title:"AI Pro",
price:"₹14,999",
features:[
"Full MERN Website",
"Admin Dashboard",
"AI Integration",
"Database Setup",
"Premium Support"
]
}
];

return(

<section className="pricing section">

<div className="container">

<h2 className="pricing-title">
Pricing Plans
</h2>

<div className="pricing-grid">

{plans.map((plan,i)=>(
<div key={i} className="pricing-card">

<h3>{plan.title}</h3>
<h1>{plan.price}</h1>

<ul>
{plan.features.map((f,index)=>(
<li key={index}>✓ {f}</li>
))}
</ul>

<button
onClick={()=>navigate("/start-project")}
>
Get Started
</button>

</div>
))}

</div>

</div>

</section>

);
}

export default Pricing;