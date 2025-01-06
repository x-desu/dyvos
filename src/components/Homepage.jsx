import gsap from "gsap";
import Faq from "./Faq";
import Feature from "./Feature.jsx";
import Hero from "./Hero.jsx";
import Newsletter from "./Newsletter.jsx";
import Services from "./Services.jsx";
import Sub_1 from "./Sub_1.jsx";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import Reviews from "./Reviews.jsx";

gsap.registerPlugin(ScrollTrigger);
const Homepage = () => {

  useEffect(() => {
    let mm = gsap.matchMedia()
    mm.add("(max-width: 1024px)",()=>{
      gsap.fromTo(".sub-1-section >*", {
        opacity: 0,
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        stagger:0.3,
        delay:0.5,
        duration:1,
        scrollTrigger: {
          trigger: ".sub-1-section",
          start: "top 70%",
          end: "top 0",
          scrub: true,
          once: true,
        }
      });
    })
    // desktop
    mm.add("(min-width: 1025px)",()=>{
      gsap.fromTo(".sub-1-section >*", {
        opacity: 0,
        y: 100,
      }, {
        opacity: 2,
        y: 0,
        stagger:0.3,
        duration:1,
        delay:0.5
      });
    })
    
  }, []);

  return (
    <>
     <Hero/>
     <Sub_1 className="sub-1-section"/>
     <Services/>
     <Feature/>
     <Faq/>
     <Reviews/>
     <Newsletter/>
    </>
  );
};

export default Homepage;
