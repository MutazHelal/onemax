import Footer from "../components/Footer/Footer";
import FirstFeature from "../components/FirstFeature/FirstFeature";
import Header from "../components/Header/Header";

import AgentProfileContent from "../components/AgentProfileContent/AgentProfileContent";
import Faq from "../components/Faq/Faq";

import Recomended from "../components/Recomended/Recomended";
import Testimonial from "../components/Testimonial/Testimonial";

export default function AgentProfile() {
  return (
    <>
      <Header />

      <AgentProfileContent />

      <Faq />
      <Recomended />
      <Testimonial />
      <FirstFeature />
      <Footer />
    </>
  );
}
