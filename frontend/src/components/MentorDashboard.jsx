import React from 'react'
import Navbar from './Navbar'
import { FaChartLine, FaStar, FaUser, FaVideo } from 'react-icons/fa'
export default function MentorDashboard() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mentor Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your mentoring overview</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Sessions</h3>
              <FaVideo className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">47</p>
            <p className="text-sm text-blue-600">+3 this week</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Students Helped</h3>
              <FaUser className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">28</p>
            <p className="text-sm text-green-600">Across all time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
              <FaStar className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9</p>
            <p className="text-sm text-yellow-600">Based on 45 reviews</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Earnings</h3>
              <FaChartLine className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$2,340</p>
            <p className="text-sm text-purple-600">This month</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {i === 1 ? 'A' : i === 2 ? 'M' : 'J'}
                    </div>
                    <div>
                      <p className="font-medium">
                        {i === 1 ? 'Alex Johnson' : i === 2 ? 'Maria Garcia' : 'James Wilson'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {i === 1 ? 'Technical Interview Prep' : i === 2 ? 'System Design Practice' : 'Behavioral Interview'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {i === 1 ? 'Today, 3:00 PM' : i === 2 ? 'Tomorrow, 10:00 AM' : 'Friday, 2:00 PM'}
                    </p>
                    <button className="text-blue-600 text-sm hover:underline">Start Session</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Recent Feedback</h2>
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {i === 1 ? 'S' : i === 2 ? 'R' : 'L'}
                      </div>
                      <span className="font-medium text-sm">
                        {i === 1 ? 'Sarah Kim' : i === 2 ? 'Robert Chen' : 'Lisa Park'}
                      </span>
                    </div>
                    <div className="flex text-yellow-500">
                      {[1,2,3,4,5].map(star => (
                        <FaStar key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {i === 1 ? '"Excellent mentor! Very detailed feedback and practical advice."' : 
                     i === 2 ? '"Great system design session. Helped me understand scalability."' : 
                     '"Perfect behavioral interview practice. Boosted my confidence!"'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
