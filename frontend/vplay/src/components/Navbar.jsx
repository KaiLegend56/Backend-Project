import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 shadow">
      <Link to="/" className="text-xl font-bold">VideoApp</Link>

      <div className="flex gap-4">
        <Link to="/upload">Upload</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to ="/register">Register</Link>
      </div>
    </div>
  );
}
