import { BANNER_ILLUSTRATION } from "../../constants";

export default function Banner() {
  return (
    <div className="min-h-[50vh] flex flex-col md:flex-row-reverse items-center px-6 lg:px-[10vw]">
      <div className="flex justify-center items-center">
        <img src={BANNER_ILLUSTRATION} alt="" className="w-3/4 md:w-1/2 lg:3/4" />
      </div>
      <div className="px-6 w-full md:w-1/2">
        <h2 className="bg-secondary md:text-[2rem] text-[1.3rem] py-0.5 px-1 inline-block mb-3 font-bold text-white">
          PortalSV
        </h2>
        <p className="text-title">
          PortalSV adalah tempat dimana terhimpunnya semua program studi dan
          aplikasi yang dimiliki Sekolah Vokasi IPB University.
        </p>
      </div>
    </div>
  );
}
