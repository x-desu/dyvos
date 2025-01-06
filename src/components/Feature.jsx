import { CheckCircle, Users } from "lucide-react";
import FeatureImg from '../assets/feature.png'
import { useEffect } from "react";
import gsap from "gsap";
const Feature = () => {
  useEffect(()=>{
    gsap.fromTo('.feature > *',
      {opacity:0,y:"50vh"},
      {opacity:1,
        y:0,
        duration:2.5,
        stagger:0.5,
        scrollTrigger:{
          trigger:'.feature',
          start:'top 80%',
          end:'top 30%',
          scrub: true,
          ease: 'power4.out' }
        }
    )
  },[])
  return (
    <div className="bg-primary py-16 px-8">
      
        <div className="flex flex-col lg:flex-row pt-16 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-8 ">
          <div className="lg:w-1/2 mb-8 feature ">
            <div className="border text-white text-base px-3 py-1 rounded-full mb-3 w-fit">Why Choose Us</div>
            <h1 className="text-white mb-4 text-2xl font-bold">
            Innovative AI Solutions Tailored for Healthcare Needs
            </h1>
            <p className="text-light mb-4">
            Though we are a new company, DYVOS brings fresh perspectives and innovative solutions to the AI and healthcare industry. Our dedicated team is driven to provide exceptional service, and we’re committed to using the latest advancements in AI technology to create smarter healthcare systems.
            </p>
            <div className="flex flex-col gap-2">
            <div className="flex items-center text-white mb-3">
              <div className="bg-white text-primary rounded-full p-2 mr-3">
                <CheckCircle size={20} />
              </div>
              <span>Focused on Innovation</span>
            </div>
            <div className="flex items-center text-white mb-3">
              <div className="bg-white text-primary rounded-full p-2 mr-3">
                <CheckCircle size={20} />
              </div>
              <span>Fresh Ideas for Healthcare Transformation</span>
            </div>
            <div className="flex items-center text-white mb-3">
              <div className="bg-white text-primary rounded-full p-2 mr-3">
                <CheckCircle size={20} />
              </div>
              <span>Affordable, Transparent Solutions</span>
            </div>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center bg-opacity-10 bg-white p-3 rounded-lg w-1/2">
                <Users size={32} className="text-white" />
                <div className="ml-3">
                  <h2 className="text-white mb-0">999+</h2>
                  <p className="text-white mb-0">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center bg-opacity-10 bg-white p-3 rounded-lg w-1/2">
                <CheckCircle size={32} className="text-white" />
                <div className="ml-3">
                  <h2 className="text-white mb-0">50+</h2>
                  <p className="text-white mb-0">Project Complete</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center mx-auto w-full lg:text-right feature">
            <img className="w-full  mx-auto " src={FeatureImg} alt="Feature" />
          </div>
        </div>
    </div>
  );
};

export default Feature;
