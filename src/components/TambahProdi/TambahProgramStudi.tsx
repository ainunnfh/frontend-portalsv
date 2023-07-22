const TambahProgramStudi = () => {
  return (
    <div className="bg-gradient-purple px-6 py-6 lg:block lg:px-[10vw]">
        <div className="lg:mt-20">
          <h2 className="text-white inline-block bg-secondary text-2xl mt-5 font-semibold">
            Tambah Program Studi
          </h2>

          <div className="grid md:flex md:gap-3 ">
            <input
              type="text"
              placeholder="Nama Program Studi"
              className="border rounded-md mt-4"
            />
            <input
              type="text"
              placeholder="Singkatan"
              className="border rounded-md mt-4"
            />
            <input
              type="text"
              placeholder="Upload Logo"
              className="border rounded-md mt-4"
            />
          </div>

          <div className="grid ">
            <textarea
              placeholder="Deskripsi"
              rows={10}
              className="border rounded-md mt-4"
            />
          </div>

          <div className="flex items-center mt-3 justify-between">
            <button className="bg-white rounded-lg py-1 px-3 text-[#828282]">
              Cancel
            </button>

            <button className="bg-[#D808D2] rounded-lg py-1 px-3 text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
  )
}
export default TambahProgramStudi