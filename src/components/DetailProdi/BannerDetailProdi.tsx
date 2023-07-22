import { LOGO_PRODI } from "../../constants";

export default function BannerDetailProdi() {
  return (
    <div className="flex justify-between flex-col-reverse lg:flex-row p-6 lg:p-[10vw] bg-gradient-purple gap-4 lg:min-h-[50vh] items-center">
      <div>
        <h2 className="text-3xl font-bold text-white inline-block bg-secondary">
          Teknologi Rekayasa Komputer
        </h2>
        <p className="text-[#4B5563] mt-3">
          Menghasilkan tenaga ahli madya yang memiliki kemampuan perekayasaan
          perangkat keras berbasis komputer, pengelolaan jaringan komputer,
          pemeliharaan sistem komputer, serta berjiwa kewirausahaan dan
          berakhlak mulia untuk memenuhi kebutuhan masyarakat dan industri.
        </p>
      </div>
      <img src={LOGO_PRODI} alt="" className="w-40 flex-shrink-0" />
    </div>
  );
}
