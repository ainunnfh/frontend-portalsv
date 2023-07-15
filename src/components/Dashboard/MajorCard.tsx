import { LOGO_PRODI } from "../../constants";

const MajorCard = () => {
  return (
    <div className="justify-left mt-3">
      <div className="flex justify-center items-center">
        <img
          className="w-12 flex justify-center items-center"
          src={LOGO_PRODI}
          alt=""
        />
      </div>

      <div>
        <p className="font-semibold text-sm text-center">TRK</p>
        <p className="text-sm text-[#4B5563] text-center">
          Teknologi Rekayasa Komputer
        </p>
      </div>
    </div>
  );
};

export default MajorCard;
