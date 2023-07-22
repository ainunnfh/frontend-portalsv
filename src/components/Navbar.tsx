import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 lg:fixed w-full lg:p-6 lg:px-[10vw]">
      <nav className="justify-between items-center flex bg-secondary text-white font-semibold p-3 w-full lg:rounded-xl lg:shadow ">
        <Link to="/" className="text-2xl">
          Portal<span className="text-primary">SV</span>
        </Link>
        <button className="bg-primary py-2 px-4 text-white text:xs rounded-lg font-semibold">
          Login
        </button>
      </nav>
    </div>
  );
}
