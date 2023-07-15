import Navbar from "../components/Navbar";
import Banner from "../components/Dashboard/Banner";
import ProgramStudiSection from "../components/Dashboard/ProgramStudiSection";
import TopPicks from "../components/Dashboard/TopPicks";
import Major from "../components/Dashboard/Major";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProgramStudiSection />
      <TopPicks />
      <Major />
      <Footer />
    </>
  );
};

export default Dashboard;
