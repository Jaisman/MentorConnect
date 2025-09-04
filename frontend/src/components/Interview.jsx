import React from 'react'
import {FaBrain, FaUser, FaCode, FaChartBar, FaCircle} from 'react-icons/fa'
import Navbar from './Navbar'
export default function Interview() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mock Interview Practice</h1>
          <p className="text-gray-600">Choose your interview type and start practicing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaBrain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Mock Interview</h3>
                <p className="text-blue-100">Available 24/7, instant feedback</p>
              </div>
            </div>
            <p className="mb-4">Practice with our advanced AI interviewer that adapts to your responses and provides detailed analysis.</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
              Start AI Interview
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaUser className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Live Mentor Interview</h3>
                <p className="text-green-100">Real-time feedback from experts</p>
              </div>
            </div>
            <p className="mb-4">Book sessions with industry mentors for personalized interview practice and career guidance.</p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
              Book Mentor Session
            </button>
          </div>
        </div>

        {/* Interview Types */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Choose Interview Type</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition">
              <div className="flex items-center space-x-3 mb-3">
                <FaCode className="w-6 h-6 text-blue-500" />
                <h3 className="font-semibold">Technical Coding</h3>
              </div>
              <p className="text-gray-600 text-sm">Data structures, algorithms, and problem-solving</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-green-500 cursor-pointer transition">
              <div className="flex items-center space-x-3 mb-3">
                <FaChartBar className="w-6 h-6 text-green-500" />
                <h3 className="font-semibold">System Design</h3>
              </div>
              <p className="text-gray-600 text-sm">Scalability, architecture, and trade-offs</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-purple-500 cursor-pointer transition">
              <div className="flex items-center space-x-3 mb-3">
                <FaCircle className="w-6 h-6 text-purple-500" />
                <h3 className="font-semibold">Behavioral</h3>
              </div>
              <p className="text-gray-600 text-sm">Leadership, teamwork, and problem-solving stories</p>
            </div>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-bold mb-6">Recent Interview Sessions</h2>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i === 1 ? 'bg-blue-100' : i === 2 ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    {i === 1 ? <FaCode className="w-5 h-5 text-blue-600" /> : 
                     i === 2 ? <FaChartBar className="w-5 h-5 text-green-600" /> : 
                     <FaCircle className="w-5 h-5 text-purple-600" />}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {i === 1 ? 'Technical Coding Interview' : i === 2 ? 'System Design Practice' : 'Behavioral Interview'}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {i === 1 ? '2 days ago with AI' : i === 2 ? '5 days ago with Sarah Chen' : '1 week ago with AI'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${i === 1 ? 'text-yellow-600' : i === 2 ? 'text-green-600' : 'text-blue-600'}`}>
                    {i === 1 ? '75/100' : i === 2 ? '88/100' : '92/100'}
                  </p>
                  <button className="text-blue-600 text-sm hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
