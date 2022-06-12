import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import GetYourDreamHouse from "../components/GetYourDreamHouse/GetYourDreamHouse";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import HighestRated from "../components/HighestRated/HighestRated";
import LatestProperty from "../components/LatestProperty/LatestProperty";
import MeetOurAgent from "../components/MeetOurAgent/MeetOurAgent";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import OurValue from "../components/OurValue/OurValue";
import Recomended from "../components/Recomended/Recomended";
import Testimonial from "../components/Testimonial/Testimonial";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";

export default function aboutus() {
  return (
    <>
      <Header />

      <WhoWeAre />

      <OurValue />

      <MeetOurTeam />

      <Faq />
      <Footer />
    </>
  );
}
