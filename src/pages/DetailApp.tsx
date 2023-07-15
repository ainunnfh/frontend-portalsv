import Navbar from "../components/Navbar";
import BannerDetailApps from "../components/DetailApp/Banner";
import DeskripsiApp from "../components/DetailApp/DeskripsiApp";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import TOP_PICKS_DUMMY from "../constants/top-picks";

const DetailApp = () => {
  const params = useParams();

  const filtered = TOP_PICKS_DUMMY.find((item) => item.id === params.appId);

  if (!filtered) {
    return (
      <>
        <Navbar />
        <p>Not found</p>
      </>
    );
  }

  console.log(filtered);

  return (
    <>
      <Navbar />
      <BannerDetailApps title={filtered.title} prodi={filtered.prodi} imageHero={filtered.cover} />
      <DeskripsiApp />
      <Footer />
    </>
  );
};

export default DetailApp;
