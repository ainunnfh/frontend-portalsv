import MajorCard from "./MajorCard";

const Major = () => {
  return (
    <section className="px-6 lg:px-[10vw]">
      <div className="mb-5 mt-5">
        <p className="text-[#111827] font-semibold text-2xl">Our Majors</p>
        <p className="text-secondary">Find your passions here </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        
        <MajorCard />
        <MajorCard />
        <MajorCard />
        <MajorCard />
        <MajorCard />
      </div>

      {/* <div className="grid grid-cols-2 ">
        <button>
          <a href="#1">
            <img className="w-6" src={SLIDER_PREF} alt="" />
          </a>
        </button>

        <button>
          <a href="#2">
            <img className="w-6" src={SLIDER_NEXT} alt="" />
          </a>
        </button>
      </div> */}
    </section>
  );
};

export default Major;
