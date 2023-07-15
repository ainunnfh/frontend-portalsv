import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const HaloPage = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HaloPage;
