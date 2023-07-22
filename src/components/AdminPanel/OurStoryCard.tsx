import CardContent from "./CardContent";

export default function OurStoryCard() {
  return (
    <>
      <section className="px-6 lg:px-[10vw] mt-6 lg:mt-10 w-full">
        <div className="mb-10 bg-gradient-to-r block from-[#7DBEFF] via-[#FF80FB] to-[#F078ED] p-4 rounded-lg">
          <h2 className="text-white text-left text-2xl lg:text-4xl mt-3 font-semibold">
            Our Story In Numbers.
          </h2>

          <div className="flex gap-2 justify-center lg:px-[20vw] mt-16 mb-7">
            <CardContent count="17" title="Program Studi" />
            <CardContent count="5" title="Aplikasi Kolaborasi" />
            <CardContent count="17" title="Akun Manajemen" />
          </div>
        </div>
      </section>
    </>
  );
}
