import React from 'react';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
          LATEST UPDATES
          </h1>
          <p className="text-gray-600 text-lg mb-8">
          Welcome to LATEST UPDATES, your go-to source for the latest political news at the local, provincial, and national levels. We bring you real-time updates, in-depth analysis, and expert opinions on key policy decisions, elections, and governance. Our team is dedicated to keeping you informed about the issues that impact your community and country. Whether it's city council debates, provincial legislation, or federal policies, we cover it all with accuracy and insight. Stay engaged, stay informed, and join the conversation on the political issues that matter most.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
              Register
            </button>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-5x1 font-bold text-gray-900 mb-6'>
                     CONTRIBUTE A BLOG:
                    </h2>
        
          <p className="text-center text-gray-600 text-lg mb-12">
          Submit a blog of the latest updates and comment of issues related to the Political Space.
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">Local Legislation</h2>
              <p className="text-gray-600">Blog about Local governance</p>
            </div>

           
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">Provincial Legislation</h2>
              <p className="text-gray-600">Blog about Provincial governance</p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">National Legislation</h2>
              <p className="text-gray-600">Blog about Provincial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;