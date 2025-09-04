import  { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaBrain, FaEnvelope, FaLock } from "react-icons/fa"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [userType, setUserType] = useState("student")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const validate = () => {
    setError("")
    if (!name.trim()) return "Full name is required."
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email."
    if (password.length < 6) return "Password must be at least 6 characters."
    if (password !== confirm) return "Passwords do not match."
    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (v) return setError(v)
    setLoading(true)
    // Replace this block with real API call
    setTimeout(() => {
      setLoading(false)
      // after signup, route based on user type
      if (userType === "mentor") navigate("/mentordash")
      else navigate("/stu")
    }, 900)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
            <FaBrain className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Create your PrepMaster account</h1>
            <p className="text-sm text-gray-500">Join mentors, book sessions, and track progress.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-sm text-red-600">{error}</div>}

          <label className="block">
            <span className="text-sm text-gray-700">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Jane Doe"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaEnvelope />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Password</span>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaLock />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Create a password"
                required
                minLength={6}
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Confirm password</span>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Repeat password"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">I am a</span>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </label>

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          <div className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}