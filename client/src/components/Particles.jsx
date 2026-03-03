import { useEffect } from "react";
import "../style/particles.css";

function Particles(){

  useEffect(()=>{

    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles=[];

    for(let i=0;i<80;i++){
      particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5),
        dy:(Math.random()-0.5)
      });
    }

    function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height);

      particles.forEach(p=>{
        p.x+=p.dx;
        p.y+=p.dy;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(56,189,248,0.6)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

  },[]);

  return <canvas id="particles"></canvas>;
}

export default Particles;