import { TopPickCardProps } from "../components/Dashboard/TopPickCard";

export interface IAppDetail extends TopPickCardProps {
  description: string;
  prodi: string;
}

const TOP_PICKS_DUMMY: IAppDetail[] = [
  {
    id: "pmb",
    cover: "/images/card-cover.png",
    title: "PMB",
    totalLikes: 100,
    description: '',
    prodi: 'TEK'
  },
  {
    id: "baby-meal-planner",
    cover: "/images/image5.png",
    title: "Baby Meal Planner",
    totalLikes: 100,
    description: `Baby Meal Planner adalah aplikasi perencanaan menu untuk bayi usia 6-12 bulan yang dapat membantu Ibu dalam mengetahui status gizi bayi, merencanakan, dan membuat hidangan yang beragam, bergizi, seimbang, dan aman. Aplikasi ini mudah digunakan, Ibu hanya tinggal memasukan data bayi berupa berat badan (kg), tinggi badan (cm), umur (bulan), dan jenis kelamin. Setelah data dimasukan maka aplikasi akan menampilkan status gizi bayi. Status gizi bayi dapat digunakan untuk deteksi awal kondisi kesehatan bayi. Aplikasi ini juga memberikan rekomendasi jumlah bahan makanan yang diperlukan dalam sehari yang sesuai dengan kebutuhan energi dan zat gizi masing-masing bayi, Ibu hanya tinggal membaginya kedalam 3 kali waktu makan yaitu makan pagi, makan siang/ selingan, dan makan malam. Selain itu, tersedia juga contoh-contoh resep menu MP ASI yang kandungan energi dan zat gizinya serta konsistensinya sesuai untuk bayi usia 6-12 bulan`,
    prodi:'Manajemen Industri Jasa Makanan dan Gizi'
  },
];

export default TOP_PICKS_DUMMY;
