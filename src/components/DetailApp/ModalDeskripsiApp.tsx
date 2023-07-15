import { BANNER_APPS } from "../../constants";
import MajorCard from "../Dashboard/MajorCard";

interface Props {
  isOpenModal: boolean;
  onClose: () => void;
}

export default function ModalDeskripsiApp(props: Props) {
  if (!props.isOpenModal) return <></>;

  return (
    <div className="fixed w-full h-full top-0 z-50 bg-white/50 flex justify-center items-center">
      <div className="p-3 bg-white w-3/4 lg:w-1/2 shadow-lg">
        <div className="flex justify-between items-center px-6 pt-2">
          <div className="flex bg-white items-center">
            <img src={BANNER_APPS} alt="" className="w-12" />
            <h2 className="text-[#02274C] font-bold ml-3 ">
              Baby Meal Planner
            </h2>
          </div>

          <div>
            <button onClick={props.onClose}>✖</button>
          </div>
        </div>

        <div className="px-6 mt-5 text-[#374151] font-bold">Deskripsi</div>
        <p className="px-6 mt-5 text-md text-[#4B5563]">
          Baby Meal Planner adalah aplikasi perencanaan menu untuk bayi usia
          6-12 bulan yang dapat membantu Ibu dalam mengetahui status gizi bayi,
          merencanakan, dan membuat hidangan yang beragam, bergizi, seimbang,
          dan aman. Aplikasi ini mudah digunakan, Ibu hanya tinggal memasukan
          data bayi berupa berat badan (kg), tinggi badan (cm), umur (bulan),
          dan jenis kelamin. Setelah data dimasukan maka aplikasi akan
          menampilkan status gizi bayi. Status gizi bayi dapat digunakan untuk
          deteksi awal kondisi kesehatan bayi. Aplikasi ini juga memberikan
          rekomendasi jumlah bahan makanan yang diperlukan dalam sehari yang
          sesuai dengan kebutuhan energi dan zat gizi masing-masing bayi, Ibu
          hanya tinggal membaginya kedalam 3 kali waktu makan yaitu makan pagi,
          makan siang/ selingan, dan makan malam. Selain itu, tersedia juga
          contoh-contoh resep menu MP ASI yang kandungan energi dan zat gizinya
          serta konsistensinya sesuai untuk bayi usia 6-12 bulan.
        </p>

        <div className="px-6 mt-5 text-[#374151] font-bold">
          Kerjasama Antar Prodi
        </div>
        <div className="px-6 flex gap-5 ">
          <MajorCard />
          <MajorCard />
          <MajorCard />
        </div>
      </div>
    </div>
  );
}
