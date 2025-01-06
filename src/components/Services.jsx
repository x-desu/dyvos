import gsap from "gsap";
import { Bot, Power, GraduationCap, Brain } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(()=>{
    gsap.fromTo('.service > *',
      {opacity:0,y:"100vh"},
      {opacity:1,
        y:0,
        duration:2,
        stagger:0.5,
        scrollTrigger:{
          trigger:'.service',
          start:'top 80%',
          end:'top 30%',
          scrub: true,
          ease: 'power3.out' }
        }
    )
  },[])
  return (
    <div className="bg-light py-16 px-8 ">
      <div className="max-w-7xl py-10  sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="lg:w-5/12 p-8 service">
            <div className="border  rounded-full px-4 py-2 mb-4 inline-block text-sm">
              Our Services
            </div>
            <div>
            <h1 className="text-3xl font-semibold mb-4">
            Transforming Healthcare with Advanced AI Solutions
            </h1>
            </div>
            <div>
            <p className="mb-8 text-secondary">
            Harness the power of AI to revolutionize healthcare. From advanced diagnosis to efficient management systems, we bring cutting-edge solutions tailored to the needs of modern healthcare systems. Empower your business with technology that drives better outcomes for patients and providers alike.
            </p>
            </div>
            <div>
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 "
              >
              Read More
            </a>
              </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 service">
            {/* Card 1 */}
            <div className="bg-white p-8 py-12 rounded-xl group shadow text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
              <div className="flex justify-center items-center bg-light hover:bg-white text-white w-20 h-20 rounded-full mx-auto mb-4">
              <Bot color="#3161c4" size={32} strokeWidth={3} />
              </div>
              <h5 className="font-semibold text-lg mb-3">AI in Diagnosis</h5>
              <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
              Leveraging AI for early and accurate diagnosis, improving patient outcomes through advanced imaging and predictive analytics.
              </p>
              <a
                href="#"
                className="text-primary font-medium hover:underline group-hover:text-white"
              >
                Read More
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 py-12 rounded-xl group shadow text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
              <div className="flex justify-center items-center bg-light hover:bg-white text-white w-20 h-20 rounded-full mx-auto mb-4">
              <Power size={32} color="#3161c4" strokeWidth={3} />
              </div>
              <h5 className="font-semibold text-lg mb-3">AI-Enabled CMS</h5>
              <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
              Streamline healthcare operations with AI-powered Content Management Systems for efficient record-keeping and data insights.
              </p>
              <a
                href="#"
                className="text-primary font-medium hover:underline group-hover:text-white"
              >
                Read More
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 py-12 rounded-xl group shadow text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
              <div className="flex justify-center items-center bg-light text-white w-20 h-20 rounded-full mx-auto mb-4">
              <GraduationCap size={32} color="#3161c4" strokeWidth={3} />
              </div>
              <h5 className="font-semibold text-lg mb-3">
              Cross-Training Solutions
              </h5>
              <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
              Equip healthcare professionals with AI-driven tools and training for adapting to evolving technologies and practices.
              </p>
              <a
                href="#"
                className="text-primary font-medium hover:underline group-hover:text-white"
              >
                Read More
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 py-12 group rounded-xl shadow text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
              <div className="flex justify-center items-center bg-light text-white w-20 h-20 rounded-full mx-auto mb-4">
              <Brain size={32} color="#3161c4" strokeWidth={3} />
              </div>
              <h5 className="font-semibold text-lg mb-3">
              Healthcare Technology
              </h5>
              <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
              Integrating cutting-edge healthcare technologies for smarter and more efficient patient care delivery systems.
              </p>
              <a
                href="#"
                className="text-primary font-medium hover:underline group-hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
