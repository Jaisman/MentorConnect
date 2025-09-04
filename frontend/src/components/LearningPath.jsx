import { FaAward, FaCheckCircle, FaClock } from "react-icons/fa"
import Navbar from "./Navbar"
export default function LearningPath() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Learning Path</h1>
          <p className="text-gray-600">Personalized curriculum based on your goals and current skill level</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Overall Progress</h2>
            <span className="text-2xl font-bold text-blue-600">68%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{width: '68%'}}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">12 of 18 modules completed</p>
        </div>

        {/* Learning Modules */}
        <div className="grid gap-6">
          {[
            {
              title: "Data Structures Fundamentals",
              description: "Arrays, linked lists, stacks, queues, and hash tables",
              progress: 100,
              status: "completed",
              modules: 8,
              timeSpent: "12 hours"
            },
            {
              title: "Algorithm Design & Analysis",
              description: "Sorting, searching, and algorithm complexity",
              progress: 85,
              status: "in-progress",
              modules: 6,
              timeSpent: "8 hours"
            },
            {
              title: "Dynamic Programming",
              description: "DP patterns, memoization, and optimization problems",
              progress: 45,
              status: "in-progress",
              modules: 10,
              timeSpent: "4 hours"
            },
            {
              title: "System Design Basics",
              description: "Scalability, load balancing, and distributed systems",
              progress: 0,
              status: "locked",
              modules: 12,
              timeSpent: "0 hours"
            },
            {
              title: "Behavioral Interview Prep",
              description: "STAR method, leadership stories, and communication",
              progress: 90,
              status: "almost-done",
              modules: 5,
              timeSpent: "6 hours"
            }
          ].map((path, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">{path.title}</h3>
                    {path.status === 'completed' && <FaCheckCircle className="w-6 h-6 text-green-500" />}
                    {path.status === 'in-progress' && <FaClock className="w-6 h-6 text-blue-500" />}
                    {path.status === 'locked' && <div className="w-6 h-6 bg-gray-300 rounded-full" />}
                    {path.status === 'almost-done' && <FaAward className="w-6 h-6 text-yellow-500" />}
                  </div>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                    <span>{path.modules} modules</span>
                    <span>{path.timeSpent} completed</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          path.status === 'completed' ? 'bg-green-500' :
                          path.status === 'in-progress' ? 'bg-blue-500' :
                          path.status === 'almost-done' ? 'bg-yellow-500' :
                          'bg-gray-300'
                        }`}
                        style={{width: `${path.progress}%`}}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="ml-6">
                  {path.status === 'locked' ? (
                    <button disabled className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed">
                      Locked
                    </button>
                  ) : path.status === 'completed' ? (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                      Review
                    </button>
                  ) : (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {/* Module breakdown for in-progress paths */}
              {path.status === 'in-progress' && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Recent Modules</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: "Binary Search Trees", completed: true },
                      { name: "Graph Traversal (BFS/DFS)", completed: true },
                      { name: "Greedy Algorithms", completed: false, current: true },
                      { name: "Divide & Conquer", completed: false }
                    ].map((module, idx) => (
                      <div key={idx} className={`flex items-center space-x-2 text-sm p-2 rounded ${
                        module.current ? 'bg-blue-50 border border-blue-200' : ''
                      }`}>
                        {module.completed ? (
                          <FaCheckCircle className="w-4 h-4 text-green-500" />
                        ) : module.current ? (
                          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        <span className={module.current ? 'font-medium text-blue-700' : ''}>{module.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Study Schedule */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">This Week's Study Schedule</h2>
          <div className="grid md:grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="text-center">
                <div className="font-medium text-gray-700 mb-2">{day}</div>
                <div className={`h-20 rounded-lg flex items-center justify-center text-xs ${
                  i < 3 ? 'bg-blue-100 text-blue-700' :
                  i === 3 ? 'bg-green-100 text-green-700' :
                  i < 6 ? 'bg-purple-100 text-purple-700' :
                  'bg-gray-100 text-gray-500'
                }`}>
                  {i < 3 ? 'DP Practice' :
                   i === 3 ? 'Mock Interview' :
                   i < 6 ? 'System Design' :
                   'Rest Day'}
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
