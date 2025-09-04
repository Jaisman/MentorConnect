// ...existing code...
import  { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaBrain, FaEnvelope, FaLinkedin, FaLock, FaPlus, FaTrash } from "react-icons/fa"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [userType, setUserType] = useState("student")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [linkedin, setLinkedinUrl] = useState("")
  const navigate = useNavigate()

  // Mentor-specific state
  const [yearsOfExperience, setYearsOfExperience] = useState("")
  const [expertise, setExpertise] = useState([""])
  const [companies, setCompanies] = useState([{ name: "", role: "", description: "" }])
  const [hourlyRate, setHourlyRate] = useState("")
  const [availability, setAvailability] = useState([
    { day: "Mon", start: "", end: "", timezone: "" },
  ])

  const validate = () => {
    setError("")
    if (!name.trim()) return "Full name is required."
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email."
    if (password.length < 6) return "Password must be at least 6 characters."
    if (password !== confirm) return "Passwords do not match."
    if (userType === "mentor") {
      if (!yearsOfExperience || Number(yearsOfExperience) < 0) return "Enter valid years of experience."
      if (!expertise.filter(e => e.trim()).length) return "Add at least one expertise."
      if (hourlyRate && Number(hourlyRate) < 0) return "Hourly rate must be positive."
    }
    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (v) return setError(v)
    setLoading(true)

    // build payload for API
    const payload = {
      role: userType,
      fullName: name,
      email,
      password, // server should hash; adjust if your API expects passwordHash
      linkedIn: linkedin,
      bio: "",
      // mentor fields
      ...(userType === "mentor" && {
        yearsOfExperience: Number(yearsOfExperience),
        expertise: expertise.filter(e => e.trim()),
        companiesWorked: companies.filter(c => c.name.trim()),
        hourlyRate: hourlyRate ? Number(hourlyRate) : undefined,
        availability: availability.filter(a => a.start && a.end),
      }),
      // student fields can be added here if needed
    }

    // TODO: replace with real API call (fetch/axios)
    console.log("signup payload", payload)

    setTimeout(() => {
      setLoading(false)
      if (userType === "mentor") navigate("/mentordash")
      else navigate("/stu")
    }, 900)
  }

  /* helpers for mentor arrays */
  const addExpertise = () => setExpertise(prev => [...prev, ""])
  const updateExpertise = (idx, val) =>
    setExpertise(prev => prev.map((v,i) => i === idx ? val : v))
  const removeExpertise = (idx) =>
    setExpertise(prev => prev.filter((_,i) => i !== idx))

  const addCompany = () => setCompanies(prev => [...prev, { name: "", role: "", description: "" }])
  const updateCompany = (idx, field, val) =>
    setCompanies(prev => prev.map((c,i) => i === idx ? { ...c, [field]: val } : c))
  const removeCompany = (idx) => setCompanies(prev => prev.filter((_,i) => i !== idx))

  const addAvailability = () => setAvailability(prev => [...prev, { day: "Mon", start: "", end: "", timezone: "" }])
  const updateAvailability = (idx, field, val) =>
    setAvailability(prev => prev.map((a,i) => i === idx ? { ...a, [field]: val } : a))
  const removeAvailability = (idx) => setAvailability(prev => prev.filter((_,i) => i !== idx))

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <label className="block">
            <span className="text-sm text-gray-700">Linkedin url</span>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaLinkedin />
              </div>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="https://www.linkedin.com/in/your-profile"
              />
            </div>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

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

          {/* Mentor-specific fields */}
          {userType === "mentor" && (
            <div className="bg-gray-50 p-4 rounded-md border">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Mentor details</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <label className="block md:col-span-1">
                  <span className="text-sm text-gray-700">Years of experience</span>
                  <input
                    type="number"
                    min="0"
                    value={yearsOfExperience}
                    onChange={e => setYearsOfExperience(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="e.g. 5"
                  />
                </label>

                <label className="block md:col-span-1">
                  <span className="text-sm text-gray-700">Hourly rate (optional)</span>
                  <input
                    type="number"
                    min="0"
                    value={hourlyRate}
                    onChange={e => setHourlyRate(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="e.g. 40"
                  />
                </label>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Expertise</span>
                  <button type="button" onClick={addExpertise} className="text-blue-600 text-sm flex items-center gap-1">
                    <FaPlus /> Add
                  </button>
                </div>
                <div className="space-y-2">
                  {expertise.map((exp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        value={exp}
                        onChange={e => updateExpertise(idx, e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="e.g. System Design"
                      />
                      <button type="button" onClick={() => removeExpertise(idx)} className="text-red-500 p-2">
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Companies worked</span>
                  <button type="button" onClick={addCompany} className="text-blue-600 text-sm flex items-center gap-1">
                    <FaPlus /> Add
                  </button>
                </div>

                <div className="space-y-2">
                  {companies.map((c, idx) => (
                    <div key={idx} className="p-2 bg-white border rounded-md">
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          value={c.name}
                          onChange={e => updateCompany(idx, "name", e.target.value)}
                          className="flex-1 px-3 py-2 border rounded-md"
                          placeholder="Company name"
                        />
                        <button type="button" onClick={() => removeCompany(idx)} className="text-red-500 p-2">
                          <FaTrash />
                        </button>
                      </div>
                      <input
                        value={c.role}
                        onChange={e => updateCompany(idx, "role", e.target.value)}
                        className="w-full mb-2 px-3 py-2 border rounded-md"
                        placeholder="Role"
                      />
                      <textarea
                        value={c.description}
                        onChange={e => updateCompany(idx, "description", e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Short description (optional)"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Availability</span>
                  <button type="button" onClick={addAvailability} className="text-blue-600 text-sm flex items-center gap-1">
                    <FaPlus /> Add
                  </button>
                </div>

                <div className="space-y-2">
                  {availability.map((a, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 items-end">
                      <select value={a.day} onChange={e => updateAvailability(idx, "day", e.target.value)} className="px-3 py-2 border rounded-md">
                        <option>Mon</option><option>Tue</option><option>Wed</option><option>Thu</option><option>Fri</option><option>Sat</option><option>Sun</option>
                      </select>
                      <input type="time" value={a.start} onChange={e => updateAvailability(idx, "start", e.target.value)} className="px-3 py-2 border rounded-md" />
                      <input type="time" value={a.end} onChange={e => updateAvailability(idx, "end", e.target.value)} className="px-3 py-2 border rounded-md" />
                      <div className="flex items-center gap-2">
                        <input type="text" value={a.timezone} onChange={e => updateAvailability(idx, "timezone", e.target.value)} placeholder="Timezone (e.g. UTC+5)" className="px-3 py-2 border rounded-md flex-1" />
                        <button type="button" onClick={() => removeAvailability(idx)} className="text-red-500 p-2">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`py-2 px-4 rounded-md text-white ${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            <div className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:underline"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
// ...existing