import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <div className="sticky top-0 lg:fixed w-full lg:p-6 lg:px-[10vw]">
      <nav className="justify-between items-center flex bg-secondary text-white font-semibold p-3 w-full lg:rounded-xl lg:shadow ">
        <Link to="/" className="text-2xl">
          Portal<span className="text-primary">SV</span>
        </Link>
        <div className="flex gap-2 lg:justify-end">
          <p className="text-sm">Program Studi</p>
          <p className="text-sm">Aplikasi</p>
          <p className="text-sm">Manajemen Studi</p>
        </div>
        <button className="bg-primary py-2 px-4 text-white text:xs rounded-lg font-semibold">
          Login
        </button>
      </nav>
    </div>
  );
}
