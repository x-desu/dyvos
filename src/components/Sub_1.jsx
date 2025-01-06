import { Check } from 'lucide-react';
import AboutImg from '../assets/about-img.jpg';


const Sub_1 = ({className}) => {

  return (
    <div className={`py-16 px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto ${className}`}>
      <div className="flex flex-col lg:flex-row gap-12 px-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="about-img">
            <img className="w-full h-auto" src={AboutImg} alt="About Us" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 sub1section">
          <div className="mb-6">
            <div className="inline-block py-1 px-3 mb-4 text-primary border border-primary rounded-full text-sm">About Us</div>
            <h1 className="text-3xl font-bold mb-4">
            We Empower Healthcare with Advanced Artificial Intelligence Solutions
            </h1>
            <p className="mb-4 text-base">
            At DYVOS, we leverage cutting-edge AI technologies to enhance healthcare systems and optimize business processes. Our AI-enabled CMS systems, comprehensive reporting dashboards, collaborative tools, and cross-training solutions empower healthcare professionals to deliver smarter, more efficient services.
            </p>
            <p className="mb-4 text-base">
            From AI-driven healthcare technology to streamlined collaboration platforms, we transform the way the healthcare industry operates, ensuring better outcomes for both providers and patients.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-start space-x-2">
                <Check color="#3161c4" strokeWidth={3} />
                <h6>Award-Winning AI Solutions</h6>
              </div>
              <div className="flex items-start space-x-2">
                <Check color="#3161c4" strokeWidth={3} />
                <h6>Expert Healthcare Tech Professionals</h6>
              </div>
              <div className="flex items-start space-x-2">
                <Check color="#3161c4" strokeWidth={3} />
                <h6>24/7 Support</h6>
              </div>
              <div className="flex items-start space-x-2">
              <Check color="#3161c4" strokeWidth={3} />
                <h6>Fair and Transparent Pricing</h6>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-blue-500 text-white  px-6 py-2 rounded-full hover:bg-blue-600">Read More</a>
              <div className="flex space-x-2">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub_1;
