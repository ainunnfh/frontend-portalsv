import { ICON_IPB } from "../../constants";
import ListApps from "./ListApps";

const OurApps = () => {
  return (
    <div className="p-6 md:px-[10vw]">
      <div className="mb-10">
        <h2 className="text-2xl inline text-[#02274C] font-bold">Our Apps</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ListApps no={1} title={""} likes={25} imgHero={ICON_IPB} />
        <ListApps no={2} title={""} likes={60} imgHero={ICON_IPB} />
        <ListApps no={3} title={""} likes={70} imgHero={ICON_IPB} />
        <ListApps no={4} title={""} likes={43} imgHero={ICON_IPB} />
        <ListApps no={5} title={""} likes={90} imgHero={ICON_IPB} />
        <ListApps no={6} title={""} likes={100} imgHero={ICON_IPB} />
      </div>
    </div>
  );
};

export default OurApps;
