import "../style/founder.css";
import NirbhayImg from "../assets/Nirbhay.png";

function Founder(){

return(

<section className="founder section">

<div className="container founder-wrapper">

<div className="founder-image">

<img
src={NirbhayImg}
alt="Founder"
/>

</div>

<div className="founder-content">

<h2>Meet The Founder</h2>

<h3>Nirbhay Gurjar</h3>

<p>
Founder of Nirspace Technologies, focused on building
modern AI-powered web solutions for startups and
businesses.
</p>

<p>
With expertise in MERN Stack and AI automation,
Nirbhay helps businesses transform their ideas
into scalable digital platforms.
</p>

<p>
Our mission is simple — deliver fast, modern
and intelligent digital experiences that help
brands grow online.
</p>

<button
onClick={()=>window.open(
"https://www.linkedin.com/in/nirbhay-gurjar-a0113428a/",
"_blank"
)}
>
Connect on LinkedIn
</button>

</div>

</div>

</section>

);
}

export default Founder;