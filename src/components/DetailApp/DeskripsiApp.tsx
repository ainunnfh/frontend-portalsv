import { useState } from "react";
import ModalDeskripsiApp from "./ModalDeskripsiApp";

export default function DeskripsiApp() {
  const [first, setfirst] = useState(false);

  return (
    <>
      <div className="px-6 lg:px-[10vw]">
        <div className="mt-5 flex w-1/2 gap-2 md:w-full lg:justify-center">
          <img src="/images/image5.png" alt="" />
          <img src="/images/image6.png" alt="" />
        </div>

        <button
          className="mt-5 text-[#02274C] font-bold"
          onClick={() => setfirst(true)}
        >
          Deskripsi ➡
        </button>
        <p className="text-xs text-[#4B5563] mt-3">
          Baby Meal Planner adalah aplikasi perencanaan menu untuk bayi usia
          6-12 bulan yang dapat membantu Ibu dalam mengetahui status gizi bayi,
          merencanakan, dan membuat hidangan yang beragam, bergizi, seimbang,
          dan aman...
        </p>
      </div>
      <ModalDeskripsiApp isOpenModal={first} onClose={() => setfirst(false)} />
    </>
  );
}
