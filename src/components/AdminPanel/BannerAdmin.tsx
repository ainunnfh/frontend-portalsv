export default function BannerAdmin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-1 mt-14 md:flex-row-reverse">
        <div className="flex justify-center items-center lg:mt-10">
          <img
            src="/images/girl.png"
            alt=""
            className="w-3/4 md:w-1/2 lg:3/4"
          />
        </div>

        <div className="gap-1 flex justify-center flex-col items-center">
          <h2 className="text-white text-3xl font-bold bg-secondary inline-block px-3">
            Welcome to
          </h2>
          <p className=" text-white text-3xl font-bold bg-primary inline-block px-3">
            Admin Panel!
          </p>
          <p className="text-[#034D98] text-md">
            Provide interesting information about your major easily{" "}
          </p>
        </div>
      </div>
    </>
  );
}
