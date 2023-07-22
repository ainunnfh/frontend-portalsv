import { useParams } from "react-router-dom"
import BannerDetailProdi from "../components/DetailProdi/BannerDetailProdi"
import OurApps from "../components/DetailProdi/OurApps"
import Navbar from "../components/Navbar"
import ICON_IPB from "../constants/top-picks"
import Footer from "../components/Footer"

const DetailProdi = () => {
    const params = useParams();

    const filtered = ICON_IPB.find((item) => item.id === params.prodiId)
  return (
    <div>
        <Navbar/>
        <BannerDetailProdi />
        <OurApps />
        <Footer/>
    </div>
  )
}

export default DetailProdi