import React from 'react'
import Navbar from './Navbar'
import {FaChartLine, FaCode, FaCircle, FaTrophy, FaBook, FaCheck, FaCheckCircle} from 'react-icons/fa'
export default function Feedback() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Interview Feedback & Analytics</h1>
          <p className="text-gray-600">Track your progress and identify areas for improvement</p>
        </div>

        {/* Performance Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Overall Score</h3>
              <FaChartLine className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">85</div>
            <p className="text-sm text-green-600">+12 from last week</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Technical Skills</h3>
              <FaCode className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">78</div>
            <p className="text-sm text-blue-600">Focus area</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Communication</h3>
              <FaCircle className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">92</div>
            <p className="text-sm text-purple-600">Excellent</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Confidence</h3>
              <FaTrophy className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">87</div>
            <p className="text-sm text-yellow-600">Strong</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Skill Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6">Skill Breakdown</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Data Structures</span>
                  <span className="text-sm font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Algorithms</span>
                  <span className="text-sm font-bold">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">System Design</span>
                  <span className="text-sm font-bold">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '68%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Problem Solving</span>
                  <span className="text-sm font-bold">91%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '91%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6">AI Recommendations</h2>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex items-start space-x-3">
                  <FaCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Focus on System Design</h4>
                    <p className="text-sm text-yellow-700">Your system design score is below average. Practice designing scalable systems.</p>
                    <button className="text-yellow-800 text-sm font-medium hover:underline mt-1">
                      Start System Design Course →
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <div className="flex items-start space-x-3">
                  <FaBook className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Algorithm Practice</h4>
                    <p className="text-sm text-blue-700">Continue practicing dynamic programming problems to improve your algorithms score.</p>
                    <button className="text-blue-800 text-sm font-medium hover:underline mt-1">
                      Practice DP Problems →
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">Excellent Communication</h4>
                    <p className="text-sm text-green-700">Your communication skills are outstanding. Keep leveraging this strength!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Interview Analysis */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-bold mb-6">Recent Interview Analysis</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Technical Interview - Arrays & Strings</h3>
                  <p className="text-sm text-gray-500">AI Mock Interview • 2 days ago</p>
                </div>
                <div className="text-2xl font-bold text-green-600">82/100</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Strengths</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clear problem breakdown</li>
                    <li>• Efficient time complexity</li>
                    <li>• Good edge case handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Areas to Improve</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Code optimization</li>
                    <li>• Variable naming</li>
                    <li>• Test case creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Recommended Practice</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Two-pointer problems</li>
                    <li>• String manipulation</li>
                    <li>• Hash table usage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Behavioral Interview</h3>
                  <p className="text-sm text-gray-500">Session with Sarah Chen • 5 days ago</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">88/100</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Strengths</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• STAR method usage</li>
                    <li>• Authentic examples</li>
                    <li>• Confident delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Areas to Improve</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• More specific metrics</li>
                    <li>• Leadership examples</li>
                    <li>• Failure stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Next Steps</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Practice conflict resolution</li>
                    <li>• Prepare leadership stories</li>
                    <li>• Quantify achievements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
