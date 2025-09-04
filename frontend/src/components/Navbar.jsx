import React from 'react'

export default function Navbar() {
  return (
    <div>
       <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">PrepMaster</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('mentors')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                {userType === 'student' ? 'Find Mentors' : 'My Students'}
              </button>
              <button 
                onClick={() => setCurrentPage('interviews')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Mock Interviews
              </button>
              <button 
                onClick={() => setCurrentPage('community')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Community
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
              className="px-3 py-1 border rounded-md text-sm"
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
