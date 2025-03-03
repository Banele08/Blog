import React from 'react';

const Blog = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-8">BLOG POSTS</h2>

            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              
              <img
                src="https://via.placeholder.com/200"
                alt="Blog Post 1"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Mayor Launches Re-Election Campaign Amid Community Debates</h3>
                <p className="text-gray-600 mb-4">
                As the municipal elections draw near, the mayor of [Your City] has officially launched their re-election campaign. With a strong focus on infrastructure development, economic growth, and crime prevention, the mayor is rallying support from local residents. However, opposition groups and some community leaders have raised concerns about unfulfilled promises from the previous term. Supporters praise the mayor’s achievements in public service delivery and urban renewal projects. The campaign launch event, held at a packed community center, saw enthusiastic crowds waving banners. Key campaign promises include improved public transport, housing, and local job creation. With the race now in full swing, the coming months will be crucial for the mayor’s political future.
                </p>
                
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Leave a comment"
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              
              <img
                src="https://via.placeholder.com/200"
                alt="Blog Post 2"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eastern Cape Premier Inaugurates Long-Awaited Bridge Project</h3>
                <p className="text-gray-600 mb-4">
                he Premier of the Eastern Cape has officially opened a newly built bridge that promises to transform connectivity in the province. Located over the [Name of River], the bridge aims to ease transportation for thousands of daily commuters and improve access to essential services. The multi-million-rand project was in development for years and faced several delays due to budget constraints. Speaking at the inauguration ceremony, the Premier emphasized the bridge’s role in fostering economic growth and trade. Local businesses and residents have welcomed the project, hoping it will attract more investment. The bridge is also expected to enhance road safety by replacing dangerous river crossings. This milestone marks another step in the province’s broader infrastructure development plans.
                </p>
                
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Leave a comment"
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
             
              <img
                src="https://via.placeholder.com/200"
                alt="Blog Post 3"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
             
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Government Proposes Tariff on International Alcohol to Boost Local Brands</h3>
                <p className="text-gray-600 mb-4">
                A new bill introduced by the Minister of Trade and Industry seeks to impose tariffs on imported alcohol brands. The proposed legislation aims to promote locally produced alcoholic beverages and support small-scale distilleries and breweries. Supporters argue that the tariff will boost the domestic industry, create jobs, and encourage local innovation in beverage production. However, critics warn that it could lead to price hikes and trade disputes with international partners. The bill is currently being debated in Parliament, with lawmakers from different parties weighing in on its economic impact. If passed, the tariff will be implemented in phases over the next year. The move aligns with the government’s broader economic strategy to protect and empower local industries.
                </p>
              
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Leave a comment"
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

        
          <div className="lg:col-span-1">
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Join our community to stay updated and connect with others.
              </p>
            </div>

           
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shop Our Magazines</h3>
              <p className="text-gray-600">
                Explore our latest magazines and publications.
              </p>
            </div>
          </div>
        </div>

        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Post Your Blog</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

          
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Local, Provincial, or National</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="local">Local</option>
                <option value="provincial">Provincial</option>
                <option value="national">National</option>
              </select>
            </div>

          
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Comments</label>
              <textarea
                placeholder="Write your comments here"
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="5"
              />
            </div>

           
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;