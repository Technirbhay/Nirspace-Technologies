import "../style/process.css";

function Process(){

const steps=[
{
title:"Discussion",
desc:"Understanding your business goals and requirements."
},
{
title:"Planning",
desc:"Creating structure and modern UI strategy."
},
{
title:"Development",
desc:"Building fast and scalable web solutions."
},
{
title:"Launch",
desc:"Deploying and delivering final product."
}
];

return(

<section className="process section">

<div className="container">

<h2 className="process-title">
How We Work
</h2>

<div className="process-grid">

{steps.map((step,i)=>(
<div key={i} className="process-card">

<h3>0{i+1}</h3>
<h4>{step.title}</h4>
<p>{step.desc}</p>

</div>
))}

</div>

</div>

</section>

);
}

export default Process;