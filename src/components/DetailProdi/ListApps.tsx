import { ICON_IPB } from "../../constants";

export interface DetailProdiProps {
  no: number;
  title: string;
  likes: number;
  imgHero: string;
}

const ListApps = (props: DetailProdiProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <h1 className="text-[#6B7280] text-xl">{props.no}</h1>
      <img src={props.imgHero} alt="" />
      <div className="">
        <h3 className="text-[#111827] font-semibold">
          {props.title}
          PMB Verifikasi Berkas Multistrata
        </h3>
        <div className="flex items-center gap-2 text-[#9B9B9B]">
          <span> {props.likes} Likes</span>
          <button>❤</button>
        </div>
      </div>
    </div>
  );
};

export default ListApps;
