import React from 'react'
import Navbar from './Navbar'
export default function Profile() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
          <p className="text-gray-600">Help us personalize your interview preparation journey</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <div className="space-y-8">
            {/* Basic Info */}
            <div>
              <h2 className="text-xl font-bold mb-4">Basic Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full p-3 border rounded-lg" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border rounded-lg" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full p-3 border rounded-lg" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input type="text" className="w-full p-3 border rounded-lg" placeholder="San Francisco, CA" />
                </div>
              </div>
            </div>

            {/* Career Goals */}
            <div>
              <h2 className="text-xl font-bold mb-4">Career Goals</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Role</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Select a role</option>
                    <option>Software Engineer</option>
                    <option>Product Manager</option>
                    <option>Data Scientist</option>
                    <option>UX Designer</option>
                    <option>DevOps Engineer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Companies</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix', 'Uber', 'Airbnb'].map(company => (
                      <button key={company} className="px-3 py-1 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-300">
                        {company}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Entry Level (0-2 years)</option>
                    <option>Mid Level (3-5 years)</option>
                    <option>Senior Level (6-8 years)</option>
                    <option>Staff Level (9+ years)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Skills Assessment */}
            <div>
              <h2 className="text-xl font-bold mb-4">Current Skills</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Programming Languages</label>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'Swift', 'Kotlin'].map(lang => (
                      <button key={lang} className="px-3 py-1 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-300">
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Data Structures & Algorithms',
                      'System Design',
                      'Database Design',
                      'API Development',
                      'Cloud Platforms',
                      'DevOps & CI/CD',
                      'Machine Learning',
                      'Frontend Frameworks'
                    ].map(skill => (
                      <div key={skill} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">{skill}</span>
                        <select className="text-sm border rounded px-2 py-1">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interview Preferences */}
            <div>
              <h2 className="text-xl font-bold mb-4">Interview Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Interview Types</label>
                  <div className="space-y-2">
                    {['Technical Coding', 'System Design', 'Behavioral', 'Case Study', 'Portfolio Review'].map(type => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <select className="w-full p-3 border rounded-lg">
                      <option>Timezone</option>
                      <option>Pacific Time (PT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                    </select>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Preferred Schedule</option>
                      <option>Mornings (8AM-12PM)</option>
                      <option>Afternoons (12PM-6PM)</option>
                      <option>Evenings (6PM-10PM)</option>
                      <option>Weekends Only</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Save Draft
              </button>
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
              >
                Complete Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
