import Footer from "../components/Footer/Footer";
import FirstFeature from "../components/FirstFeature/FirstFeature";
import Header from "../components/Header/Header";
import SpecsProperty from "../components/SpecsProperty/SpecsProperty";
import AboutSpecs from "../components/AboutSpecs/AboutSpecs";
import Suggestion from "../components/Suggestion/Suggestion";

import TouchArea from "../components/TouchArea/TouchArea";

export default function listingSpecs() {
  return (
    <>
      <Header />

      <SpecsProperty />

      <AboutSpecs />

      <TouchArea />

      <Suggestion />

      <FirstFeature />
      <Footer />
    </>
  );
}
