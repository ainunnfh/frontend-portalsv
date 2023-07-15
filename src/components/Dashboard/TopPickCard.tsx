import { ICON_IPB } from "../../constants";
import { Link } from "react-router-dom";

export interface TopPickCardProps {
  id: string;
  cover: string;
  totalLikes: number;
  title: string;
}

const TopPickCard = (props: TopPickCardProps) => {
  const { cover, title, totalLikes } = props;
  return (
    <Link to={`/detailApp/${props.id}`} className="border rounded-xl w-full block">
      <img src={cover} alt="" className="w-full h-56 object-cover" />
      <div className="flex gap-2 p-5">
        <div>
          <img
            className="w-12 object-cover aspect-square"
            src={ICON_IPB}
            alt=""
          />
        </div>
        <div>
          <button className="font-semibold text-sm">{title}</button>
          <p className="text-sm text-[#9B9B9B]">{totalLikes} Likes ❤ </p>
        </div>
      </div>
    </Link>
  );
};

export default TopPickCard;
