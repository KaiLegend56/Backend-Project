import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UploadVideo from "./pages/UploadVideo";
import WatchVideo from "./pages/WatchVideo";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/watch/:id" element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  );
}
