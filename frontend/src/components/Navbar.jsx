import React, {useState} from 'react'
import { FaBrain, FaUser } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
export default function Navbar() {
      const [userType, setUserType] = useState('student');
      const navigate = useNavigate();
  return (
    <div>
       <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBrain className="w-5 h-5 text-white" onClick={()=>{navigate('/')}}/>
              </div>
              <span className="text-xl font-bold text-gray-800" onClick={()=>{navigate('/')}}>PrepMaster</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigate('/stu')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Dashboard
              </button>
              <button 
                onClick={() => navigate('/ment')}
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
                onClick={() => navigate('/path')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Learning Path
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={()=>{navigate('/login')}}>Login</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <FaUser className="w-5 h-5" onClick={()=>{navigate('/profile')}}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
