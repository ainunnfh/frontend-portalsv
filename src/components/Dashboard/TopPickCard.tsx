import { CARD_COVER, ICON_IPB } from "../../constants";
import { Link } from 'react-router-dom'

const TopPickCard = () => {
  return (
    <Link to="/detailApp" className="border rounded-xl w-full block">
      <img src={CARD_COVER} alt="" className="w-full" />
      <div className="flex gap-2 p-5">
        <div>
          <img
            className="w-12 object-cover aspect-square"
            src={ICON_IPB}
            alt=""
          />
        </div>
        <div>
          <button className="font-semibold text-sm">PMB Verifikasi Berkas Multisrata</button>
          <p className="text-sm text-[#9B9B9B]">100 Likes ❤ </p>
        </div>
      </div>
    </Link>
  );
};

export default TopPickCard;
