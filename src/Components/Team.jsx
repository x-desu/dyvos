const Team = () => {
    return (
      <div className="bg-light mt-5 py-16 px-8">
        <div className="max-w-7xl py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="text-center mb-10">
            <div className="border rounded-full px-4 py-2 inline-block text-sm mb-4">
              Meet Our Team
            </div>
            <h1 className="text-3xl font-semibold mb-4">Our Experts</h1>
            <p className="text-secondary">
              Meet our talented team of professionals who are passionate about delivering
              innovative AI solutions for your business.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition-all ease-in-out duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h5 className="font-semibold text-lg mb-2">John Doe</h5>
              <p className="text-sm text-gray-600 mb-4">AI Specialist</p>
              <p className="text-sm text-gray-600">
                Expert in developing AI models that drive business success.
              </p>
            </div>
  
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition-all ease-in-out duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h5 className="font-semibold text-lg mb-2">Jane Smith</h5>
              <p className="text-sm text-gray-600 mb-4">Data Scientist</p>
              <p className="text-sm text-gray-600">
                Specializes in predictive analytics and data-driven insights.
              </p>
            </div>
  
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition-all ease-in-out duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h5 className="font-semibold text-lg mb-2">Emily Johnson</h5>
              <p className="text-sm text-gray-600 mb-4">ML Engineer</p>
              <p className="text-sm text-gray-600">
                Building scalable machine learning pipelines for various industries.
              </p>
            </div>
  
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition-all ease-in-out duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h5 className="font-semibold text-lg mb-2">Michael Lee</h5>
              <p className="text-sm text-gray-600 mb-4">Robotics Engineer</p>
              <p className="text-sm text-gray-600">
                Designing and implementing robotic automation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  