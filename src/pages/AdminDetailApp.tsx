import NavbarAdmin from "../components/NavbarAdmin";
import DeskripsiApp from "../components/DetailApp/DeskripsiApp";
import Footer from "../components/Footer";
import { BANNER_APPS } from "../constants";
import BannerAdminDetailApps from "../components/AdminDetailApp/BannerAdmin";

const AdminDetailApp = () => {
  return (
    <>
      <NavbarAdmin />
      <BannerAdminDetailApps title={"Baby Meal Planner"} prodi={""} imageHero={BANNER_APPS} />
      <DeskripsiApp />
      <Footer />
    </>
  );
};

export default AdminDetailApp;
