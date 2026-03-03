import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "../style/admin.css";

function AdminLayout(){

const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem("token");
  navigate("/admin/login");
};

return(

<div className="admin-layout">

{/* ================= SIDEBAR ================= */}
<div className="sidebar">

<h2 className="logo">Nirspace</h2>

<ul>

<li>
<NavLink 
to="/admin/dashboard"
className={({isActive}) =>
isActive ? "active-link" : ""
}
>
Dashboard
</NavLink>
</li>

<li>
<NavLink 
to="/admin/leads"
className={({isActive}) =>
isActive ? "active-link" : ""
}
>
Leads
</NavLink>
</li>

<li>
<NavLink 
to="/admin/projects"
className={({isActive}) =>
isActive ? "active-link" : ""
}
>
Projects
</NavLink>
</li>

<li className="logout-btn" onClick={logout}>
Logout
</li>

</ul>

</div>


{/* ================= MAIN CONTENT ================= */}
<div className="admin-main">

<Outlet/>

</div>

</div>

);
}

export default AdminLayout;