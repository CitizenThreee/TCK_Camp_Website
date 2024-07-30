import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Admin from "./pages/Admin"

export default function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Home {...props}></Home>}/>
            <Route path="Info" element={<Info {...props}></Info>}/>
            <Route path="Contact" element={<Contact {...props}></Contact>}/>
            <Route path="Register" element={<Register {...props}></Register>}/>
            <Route path="Admin" element={<Admin {...props}></Admin>}/>
        </Routes>
    )
}