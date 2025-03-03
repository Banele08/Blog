import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h1>

          
          <div className="flex flex-col md:flex-row items-center gap-8">
           
            <div className="flex-1">
              <p className="text-gray-600 text-lg">
              Welcome to LATEST UPDATES, your trusted source for insightful and up-to-date political news. We provide in-depth coverage of local, provincial, and national politics, keeping you informed about key developments that shape our communities and country.

Our mission is to deliver accurate, balanced, and engaging political reporting that highlights the voices of citizens, leaders, and policymakers. From local government decisions affecting your neighborhood to major national policies impacting the economy, we bring you the stories that matter most.

At LATEST UPDATES, we believe in transparency, accountability, and fostering informed discussions. Whether it’s mayoral campaigns, provincial infrastructure projects, or parliamentary debates, we break down complex political issues into clear and accessible insights.

Stay connected with us for breaking news, expert analysis, and exclusive interviews with political figures. Join the conversation and be part of an engaged, politically aware community.
              </p>
            </div>

           
            <div className="flex-1">
              <img
                src="https://via.placeholder.com/400"
                alt="About Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Achievements and Recognition
          </h2>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Won Standard Bank Sikuvile Journalism Award:2018</h3>
              <p className="text-gray-600">This award recognizes outstanding journalistic work in South Africa. The awards are presented in categories such as investigative journalism, breaking news, and feature writing.</p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2"> Won SADC Media Award: 2017 - 2019</h3>
              <p className="text-gray-600">This award recognizes excellence in journalism in print, photo, television, and radio. The awards are open to journalists from SADC member states. </p>
            </div>

           
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The South African Blog Awards (SA Blog Awards):2021 </h3>
              <p className="text-gray-600">Won the most controversial blog category (National Blog Section).</p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vodacom Blog of the Year: 2015 - 2016</h3>
              <p className="text-gray-600">This award recognizes Blogs for their work in giving indipendent Bloggers/ Journalists a platform for Polical Insights.</p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">New Generation Awards: 2023</h3>
              <p className="text-gray-600">This award recognizes new voices in social and digital media. </p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SA Blog Awards:2016 & 2022</h3>
              <p className="text-gray-600">Recognizes Blogs that have an impact in the South Afican Blog Space.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;