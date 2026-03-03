import '../style/home.css';
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Pricing from '../components/Pricing';
import Founder from "../components/Founder";
import Process from "../components/Process";
import Stats from "../components/Stats";


function Home(){
  return(
    <main className="home">
      <Hero/>
      <Services/>
      <Projects/>
      <Pricing/>
      <Process/>
      <Stats/>
      <Founder/>
    </main>
  );
}

export default Home;