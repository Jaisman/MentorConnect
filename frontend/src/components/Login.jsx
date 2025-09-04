import  { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaGoogle, FaGithub, FaBrain } from "react-icons/fa"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (!email) return setError("Email is required.")
    if (!password) return setError("Password is required.")
    setLoading(true)

    // Simulate auth request (replace with real API call)
    setTimeout(() => {
      setLoading(false)
      // crude demo routing: emails with "mentor" -> mentor dashboard
      if (email.includes("mentor")) navigate("/mentordash")
      else navigate("/stu")
    }, 900)
  }

  const handleSocial = (provider) => {
    // stub for social login
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/stu")
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
            <FaBrain className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Sign in to PrepMaster</h1>
            <p className="text-sm text-gray-500">Access mentors, mock interviews and learning paths</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <button
            onClick={() => handleSocial("google")}
            className="flex items-center justify-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50 transition text-sm"
            aria-label="Sign in with Google"
            disabled={loading}
          >
            <FaGoogle className="text-red-500" />
            Google
          </button>
          <button
            onClick={() => handleSocial("github")}
            className="flex items-center justify-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50 transition text-sm"
            aria-label="Sign in with GitHub"
            disabled={loading}
          >
            <FaGithub />
            GitHub
          </button>
        </div>

        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2 text-gray-500">or with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-sm text-red-600">{error}</div>}

          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Password</span>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot?
              </button>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <span className="text-sm text-gray-500">New? <button type="button" onClick={() => navigate("/profile")} className="text-blue-600 hover:underline">Create account</button></span>
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  )
}