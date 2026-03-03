import "../style/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar(){

const [scrolled,setScrolled] = useState(false);
const navigate = useNavigate();

useEffect(()=>{
const handleScroll = ()=>{
setScrolled(window.scrollY > 30);
};

window.addEventListener("scroll",handleScroll);
return ()=> window.removeEventListener("scroll",handleScroll);
},[]);

const handleAdminClick = () => {
const token = localStorage.getItem("token");

if(token){
navigate("/admin/dashboard");
}else{
navigate("/admin/login");
}
};

return(
<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

<NavLink to="/" className="logo">

<svg
width="180"
height="50"
viewBox="0 0 420 100"
xmlns="http://www.w3.org/2000/svg"
>

<defs>
<linearGradient id="nirGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" stopColor="#00E5FF"/>
<stop offset="100%" stopColor="#3B82F6"/>
</linearGradient>
</defs>

<path
d="M20 80 V20 L70 80 V20"
stroke="url(#nirGradientDark)"
strokeWidth="10"
fill="none"
strokeLinecap="round"
strokeLinejoin="round"
/>

<circle cx="85" cy="22" r="6" fill="#00E5FF"/>

<text
x="120"
y="65"
fontFamily="Poppins, sans-serif"
fontSize="42"
fill="#FFFFFF"
fontWeight="600"
>
Nirspace
</text>

<text
x="122"
y="88"
fontFamily="Poppins, sans-serif"
fontSize="16"
fill="#94A3B8"
letterSpacing="2"
>
TECHNOLOGIES
</text>

</svg>

</NavLink>

<div className="nav-links">

<NavLink to="/" end>
Home
</NavLink>

<NavLink to="/about">
About
</NavLink>

<NavLink to="/contact">
Contact
</NavLink>

<button
className="admin-btn"
onClick={handleAdminClick}
>
Admin
</button>

</div>

</nav>
);
}

export default Navbar;