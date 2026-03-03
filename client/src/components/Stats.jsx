import "../style/stats.css";

function Stats(){

const stats=[
{
number:"10+",
title:"Projects Built"
},
{
number:"5+",
title:"Technologies"
},
{
number:"100%",
title:"Client Focus"
},
{
number:"24/7",
title:"Support"
}
];

return(

<section className="stats section">

<div className="container">

<div className="stats-grid">

{stats.map((s,i)=>(
<div key={i} className="stat-card">

<h2>{s.number}</h2>
<p>{s.title}</p>

</div>
))}

</div>

</div>

</section>

);
}

export default Stats;