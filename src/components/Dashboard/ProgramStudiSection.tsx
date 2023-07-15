import { DATA_ILLUSTRATION } from "../../constants";
import SomethingInsideCard from "./SomethingInsideCard";

const ProgramStudiSection = () => {
  return (
    <section className="px-6 lg:px-[10vw] mt-6 lg:mt-10">
      <div className="bg-secondary grid grid-cols-1 p-6 rounded-lg gap-3 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <img src={DATA_ILLUSTRATION} alt="" className="w-1/2" />
        </div>
        <div className="flex gap-2 justify-center md:flex-col">
          <SomethingInsideCard count="17" title="Program Studi" />
          <SomethingInsideCard count="5+" title="Aplikasi Kolaborasi" />
        </div>
      </div>
    </section>
  );
};

export default ProgramStudiSection;
