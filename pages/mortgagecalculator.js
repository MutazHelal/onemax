import Footer from "../components/Footer/Footer";
import GetYourDreamHouse from "../components/GetYourDreamHouse/GetYourDreamHouse";
import Header from "../components/Header/Header";
import MortgageCalculatorComp from "../components/MortgageCalculator/MortgageCalculatorComp";

export default function MortgageCalculator() {

  return (
    <>
      <Header />
      <MortgageCalculatorComp/>
      <GetYourDreamHouse />
      <Footer />
    </>
  );
}
