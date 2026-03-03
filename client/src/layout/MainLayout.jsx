import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Particles from "../components/Particles";
import CursorGlow from "../components/CursorGlow";
import WhatsAppButton from "../components/WhatsAppButton";

function MainLayout(){
  return(

    <div className="layout">

      <Particles />
      <CursorGlow/>

      <Navbar/>

      <main className="main-content">
        <Outlet/>
      </main>

      <Footer/>

      <WhatsAppButton/>

    </div>

  );
}

export default MainLayout;