import "../style/services.css";

function Services(){

const services=[
{
title:"Web Development",
desc:"Modern MERN stack websites for startups and businesses."
},
{
title:"AI Automation",
desc:"Business automation using AI chatbots and workflow systems."
},
{
title:"AI Chatbot Integration",
desc:"Custom AI assistants for websites and customer support."
},
{
title:"Portfolio & Branding",
desc:"Personal branding websites for creators and developers."
},
{
title:"Landing Pages",
desc:"High converting landing pages for marketing campaigns."
},
{
title:"AI Content Systems",
desc:"Automated content and social media AI solutions."
}
];

return(
<section className="services section">

<div className="container">

<h2 className="section-title">
AI & Development Services
</h2>

<div className="service-grid">

{services.map((s,i)=>(
<div key={i} className="service-card">

<h3>{s.title}</h3>
<p>{s.desc}</p>

</div>
))}

</div>

</div>

</section>
);
}

export default Services;