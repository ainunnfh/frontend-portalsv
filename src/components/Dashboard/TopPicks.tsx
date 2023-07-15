import TopPickCard from "./TopPickCard";

const TopPicks = () => {
  return (
    <section className="px-6 lg:px-[10vw]">
      <div className="mb-5">
        <p className="text-[#111827] font-semibold text-center text-2xl mt-10 gap-1">
          Discover Top Pics
        </p>
        <p className="text-secondary text-center">
          Our collaborative applications between majors for specific needs{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
      </div>
    </section>
  );
};

export default TopPicks;
