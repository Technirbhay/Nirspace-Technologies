import "../style/projects.css";

function Projects(){

const projects=[
{
title:"Gym Website",
desc:"Modern fitness business website with responsive layout.",
img:"https://picsum.photos/500/300?1"
},
{
title:"Restaurant Website",
desc:"Online food ordering landing page.",
img:"https://picsum.photos/500/300?2"
},
{
title:"Portfolio Website",
desc:"Developer personal branding platform.",
img:"https://picsum.photos/500/300?3"
}
];

return(
<section className="projects section">

<div className="container">

<h2 className="section-title">
Our Projects
</h2>

<div className="project-grid">

{projects.map((p,i)=>(
<div key={i} className="project-card">

<img src={p.img} alt="" />

<div className="project-overlay">
<h3>{p.title}</h3>
<p>{p.desc}</p>
<button>View Project</button>
</div>

</div>
))}

</div>

</div>

</section>
);
}

export default Projects;