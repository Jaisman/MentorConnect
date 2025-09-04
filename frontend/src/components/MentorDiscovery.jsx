import React from 'react'
import {FaStar} from 'react-icons/fa'
import Navbar from './Navbar'
export default function MentorDiscovery() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Mentor</h1>
          <p className="text-gray-600">Connect with industry experts who can help you succeed</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <select className="w-full p-2 border rounded-lg">
                <option>All Companies</option>
                <option>Google</option>
                <option>Meta</option>
                <option>Amazon</option>
                <option>Microsoft</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select className="w-full p-2 border rounded-lg">
                <option>All Roles</option>
                <option>Software Engineer</option>
                <option>Product Manager</option>
                <option>Data Scientist</option>
                <option>UX Designer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              <select className="w-full p-2 border rounded-lg">
                <option>All Levels</option>
                <option>1-3 years</option>
                <option>4-7 years</option>
                <option>8+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <select className="w-full p-2 border rounded-lg">
                <option>All Times</option>
                <option>This Week</option>
                <option>Next Week</option>
                <option>This Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {i === 1 ? 'SC' : i === 2 ? 'MJ' : i === 3 ? 'AR' : i === 4 ? 'LW' : i === 5 ? 'KP' : 'DS'}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {i === 1 ? 'Sarah Chen' : i === 2 ? 'Michael Johnson' : i === 3 ? 'Arjun Ravi' : 
                       i === 4 ? 'Lisa Wong' : i === 5 ? 'Kevin Park' : 'Diana Smith'}
                    </h3>
                    <p className="text-gray-600">
                      {i === 1 ? 'Senior PM at Google' : i === 2 ? 'Staff SWE at Meta' : i === 3 ? 'Principal Engineer at Amazon' : 
                       i === 4 ? 'ML Lead at Netflix' : i === 5 ? 'VP Engineering at Uber' : 'Design Director at Apple'}
                    </p>
                    <div className="flex items-center mt-1">
                      <FaStar className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Product Strategy</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">System Design</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Leadership</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  "5+ years at Google leading product initiatives. Specialized in helping candidates prepare for PM interviews..."
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">
                    ${i === 1 ? '120' : i === 2 ? '150' : i === 3 ? '180' : i === 4 ? '140' : i === 5 ? '200' : '160'}/session
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
