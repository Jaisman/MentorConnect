import Navbar from "./components/Navbar"
import Home from "./components/Home"
import StudentDashboard from "./components/StudentDashboard"
import MentorDiscovery from "./components/MentorDiscovery"
import Interview from "./components/Interview"
import Feedback from "./components/Feedback"
import Profile from "./components/Profile"
import MentorDashboard from "./components/MentorDashboard"
import Booking from "./components/Booking"
import LearningPath from "./components/LearningPath"
import { BrowserRouter,Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/int" element={<Interview/>}/>
        <Route path="/stu" element={<StudentDashboard/>}/>
        <Route path="/ment" element={<MentorDiscovery/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/mentordash" element={<MentorDashboard/>}/>
        <Route path="/book" element={<Booking/>}/>
        <Route path="/path" element={<LearningPath/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
