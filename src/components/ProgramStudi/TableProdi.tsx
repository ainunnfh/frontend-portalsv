export default function TableProdi() {
  return (
    <>
      <div className="lg:p-6 lg:px-[10vw]">
        <h2 className="text-2xl font-bold text-white inline-block bg-secondary p-1 mb-5 mt-20">
          Daftar Program Studi
        </h2>

        <div className="border shadow-sm rounded-lg p-3">
          <div className="flex gap-3 mb-3">
            <p className="text-[#B9B9B9]">tampilkan</p>

            <select
              name="number"
              id="number"
              className="border rounded-md text-[#B9B9B9] px-3"
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>

            <p className="text-[#B9B9B9]">entri</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-center border">
              <thead className="table-header">
                <tr>
                  <th className="table-border">No</th>
                  <th className="table-border">Logo</th>
                  <th className="table-border">Nama Prodi</th>
                  <th className="table-border">Singkatan</th>
                  <th className="table-border">Deskripsi</th>
                  <th className="table-border">Aksi</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="table-border bg-blue-100">1</td>
                  <td className="table-border bg-blue-100">inf</td>
                  <td className="table-border  bg-blue-100">inf</td>
                  <td className="table-border  bg-blue-100">inf</td>
                  <td className="table-border  bg-blue-100">inf adalah</td>
                  <td className="table-border  bg-blue-100">edit delete</td>
                </tr>

                <tr>
                  <td className="table-border">2</td>
                  <td className="table-border">inf</td>
                  <td className="table-border">inf</td>
                  <td className="table-border">inf</td>
                  <td className="table-border">inf adalah</td>
                  <td className="table-border">edit delete</td>
                </tr>
                <tr>
                  <td className="table-border bg-blue-100">3</td>
                  <td className="table-border bg-blue-100">inf</td>
                  <td className="table-border bg-blue-100">inf</td>
                  <td className="table-border bg-blue-100">inf</td>
                  <td className="table-border bg-blue-100">inf adalah</td>
                  <td className="table-border bg-blue-100">edit delete</td>
                </tr>
                <tr>
                  <td className="table-border">4</td>
                  <td className="table-border">inf</td>
                  <td className="table-border">inf</td>
                  <td className="table-border">inf</td>
                  <td className="table-border">inf adalah</td>
                  <td className="table-border">edit delete</td>
                </tr>
              </tbody>
            </table>

            <div className="flex mt-3 justify-between">
              <p className="text-[#B9B9B9] text-sm">
                Menampilkan 1 sampai 10 dari 30 entri
              </p>

              <div className="flex items-center">
                <p className="number-border">◀</p>
                <p className="number-border">1</p>
                <p className="number-border">2</p>
                <p className="number-border">3</p>
                <p className="number-border">▶</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
