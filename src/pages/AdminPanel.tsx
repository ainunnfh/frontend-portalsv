import NavbarAdmin from "../components/NavbarAdmin";
import BannerAdmin from "../components/AdminPanel/BannerAdmin";
import OurStoryCard from "../components/AdminPanel/OurStoryCard";
import TopPicks from "../components/Dashboard/TopPicks";
import Major from "../components/Dashboard/Major";
import Footer from "../components/Footer";

const AdminPanel = () => {
  return (
    <>
      <NavbarAdmin />
      <BannerAdmin />
      <OurStoryCard />
      <TopPicks />
      <Major />
      <Footer />
      
    </>
  );
};

export default AdminPanel;
