import Footer from "../components/Footer/Footer";
import GetYourDreamHouse from "../components/GetYourDreamHouse/GetYourDreamHouse";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import HighestRated from "../components/HighestRated/HighestRated";
import LatestProperty from "../components/LatestProperty/LatestProperty";
import MeetOurAgent from "../components/MeetOurAgent/MeetOurAgent";
import Recomended from "../components/Recomended/Recomended";
import Testimonial from "../components/Testimonial/Testimonial";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import SavingsCalculatorComp from "../components/SavingsCalculator/SavingsCalculatorComp";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SavingsCalculatorComp />
      <TrustedBy />
      <HighestRated />
      <LatestProperty />
      <MeetOurAgent />
      <Recomended />
      <Testimonial />
      <GetYourDreamHouse />
      <Footer />
    </>
  );
}
