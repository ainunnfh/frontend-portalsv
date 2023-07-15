import { BANNER_APPS } from "../../constants";

export default function BannerDetailApps() {
  return (
    <div className="min-h-[50vh] bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-6 md:flex md:flex-row-reverse justify-between items-center lg:px-[10vw]">
      <div className="flex justify-center md:block">
        <img src={BANNER_APPS} alt="" className="w-3/4 md:w-3/4 lg:w-full" />
      </div>

      <div className="w-full">
        <div className=" w-full md:w-1/2">
          <h2 className="bg-secondary md:text-[2rem] text-[1.3rem] py-0.5 px-1 inline-block mb-3 font-bold text-white mt-5 text-4xl">
            Baby Meal Planner
          </h2>
          <h4 className="text-[#4B5563]">
            Manajemen Industri Jasa Makanan dan Gizi
          </h4>
        </div>

        <div className="flex gap-3 items-center mt-3">
          <button className="bg-primary py-1 px-10 text-white text:xs rounded-lg font-semibold">
            Install
          </button>

          <button className="text-sm text-[#9B9B9B]"> ❤ Like</button>
        </div>
      </div>
    </div>
  );
}
