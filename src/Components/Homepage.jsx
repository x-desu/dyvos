import gsap from "gsap";
import Faq from "./Faq";
import Feature from "./Feature";
import Footer from "./Footer";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Review from "./Review";
import Services from "./Services";
import Sub_1 from "./Sub_1";
import Team from "./Team";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from "react";

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
     <Review/>
     <Newsletter/>
    </>
  );
};

export default Homepage;
