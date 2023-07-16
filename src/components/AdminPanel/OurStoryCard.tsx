import CardContent from "./CardContent";

export default function OurStoryCard() {
  return (
    <>
      {/* <div className="px-6 lg:px-[10vw] mt-6 lg:mt-10">
        <div className="mb-10 bg-gradient-to-r from-[#7DBEFF] via-[#FF80FB] to-[#F078ED] inline-block p-4 rounded-lg">
          <h1 className="text-white text-left text-4xl ml-4 mt-3 font-semibold">
            Our story in numbers.
          </h1>

          <section className="px-6 lg:px-[10vw] mt-6 lg:mt-10">
            <div className="grid grid-cols-1 p-6 rounded-lg gap-3 md:grid-cols-2">
              <div className="flex gap-2 justify-center md:flex-col lg:flex-col">
                <CardContent count="17" title="Program Studi" />
                <CardContent count="5" title="Aplikasi Kolaborasi" />
                <CardContent count="17" title="Akun Manajemen" />
              </div>
            </div>
          </section>
        </div>
      </div> */}

      <section className="px-6 lg:px-[10vw] mt-6 lg:mt-10">
        <div className="mb-10 bg-gradient-to-r from-[#7DBEFF] via-[#FF80FB] to-[#F078ED] inline-block p-4 rounded-lg ml-7">
          <div className="text-white text-left text-2xl lg:text-4xl mt-3 font-semibold">
            Our Story In Numbers.
          </div>

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
