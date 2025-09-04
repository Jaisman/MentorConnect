import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";
export default function Booking() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book a Session with Sarah Chen</h1>
          <p className="text-gray-600">Senior Product Manager at Google</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mentor Profile */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                SC
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sarah Chen</h2>
                <p className="text-gray-600">Senior PM at Google</p>
                <div className="flex items-center mt-2">
                  <FaStar className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="ml-1 text-gray-600">4.9 (127 reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Product Strategy</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">System Design</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Leadership</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Career Growth</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-gray-600 text-sm">
                  5+ years at Google leading product initiatives for Search and Assistant. 
                  Previously at Microsoft and startup experience. I specialize in helping 
                  candidates prepare for PM interviews at top tech companies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Session Types</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Mock PM Interview</p>
                      <p className="text-sm text-gray-500">60 min • Product sense + execution</p>
                    </div>
                    <span className="font-bold">$120</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Resume Review</p>
                      <p className="text-sm text-gray-500">30 min • Feedback + optimization</p>
                    </div>
                    <span className="font-bold">$60</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Career Coaching</p>
                      <p className="text-sm text-gray-500">45 min • Strategy + guidance</p>
                    </div>
                    <span className="font-bold">$90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Calendar */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Select Date & Time</h3>
            
            <div className="mb-6">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                    {day}
                  </div>
                ))}
                {Array.from({length: 35}, (_, i) => {
                  const day = i - 6;
                  const isCurrentMonth = day > 0 && day <= 30;
                  const isSelected = day === 15;
                  return (
                    <button
                      key={i}
                      className={`p-2 text-sm rounded ${
                        !isCurrentMonth 
                          ? 'text-gray-300' 
                          : isSelected 
                            ? 'bg-blue-600 text-white' 
                            : 'hover:bg-gray-100'
                      }`}
                    >
                      {isCurrentMonth ? day : ''}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Available Times (March 15)</h4>
              <div className="grid grid-cols-3 gap-2">
                {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM', '7:00 PM'].map(time => (
                  <button 
                    key={time}
                    className="p-2 text-sm border rounded hover:border-blue-500 hover:bg-blue-50 transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Session Type</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>Mock PM Interview - $120</option>
                  <option>Resume Review - $60</option>
                  <option>Career Coaching - $90</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea 
                  className="w-full p-3 border rounded-lg" 
                  rows="3"
                  placeholder="Tell Sarah about your goals, current situation, or specific areas you'd like to focus on..."
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Book Session - $120
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
