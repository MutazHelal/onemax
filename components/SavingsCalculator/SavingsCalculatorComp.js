import { useState, useEffect } from "react";

export default function SavingsCalculatorComp() {
  const minHomeValue = 240000;
  const maxHomeValue = 3000000;

  const buyerAgentCommissionPercentage = 2.5;
  const listingFeePercentage = 1;
  const hstPercentage = 13;

  const [homeValue, setHomeValue] = useState(700000);
  const [savingsValue, setSavingsValue] = useState(15256);

  function numberWithCommas(x) {
    return Number(x).toLocaleString();
  }

  const calculateSavings = (homeValue) => {
    let commission = (homeValue * buyerAgentCommissionPercentage) / 100;
    let oneMaxCommission = (homeValue * listingFeePercentage) / 100;
    let savings = commission - oneMaxCommission;
    savings += (savings * hstPercentage) / 100;

    setSavingsValue(savings.toFixed(2));
  };

  useEffect(() => {
    calculateSavings(homeValue);
  }, [homeValue]);

  return (
    <>
      <div className="sv-calc-widget w-full px-6 mx-auto lg:container xl:px-2">
        <div className="sv-calc-wrapper">
          <div className="sv-calc-intro-div">
            <div className="sv-calc-intro-div-inner">
              <h6 className="text-3xl font-bold sm:text-3xl text-dark-blue text-center">
                How much could you save selling with OneMax?
              </h6>
            </div>
          </div>
          <div className="sv-calc-form-area">
            <h6
              className="text-1xl font-bold text-dark-blue text-center"
              style={{ marginBottom: "5px" }}
            >
              Slide to select your homes value
            </h6>
            <h6 className="text-2xl text-dark-blue text-center">
              ${numberWithCommas(homeValue)}
            </h6>

            <div className="sv-calc-home-val-slider-wrapper">
              <div style={{ position: "absolute", left: "0px", top: "-8px" }}>
                <span>${numberWithCommas(minHomeValue)}</span>
              </div>

              <div style={{ position: "absolute", right: "0px", top: "-8px" }}>
                <span>${numberWithCommas(maxHomeValue)}</span>
              </div>

              <input
                className="range-slider"
                type="range"
                min={minHomeValue}
                max={maxHomeValue}
                value={homeValue}
                onChange={(e) => {
                  let val = Number(e.target.value);

                  if (isNaN(val)) {
                    return;
                  }

                  setHomeValue(val);
                  calculateSavings(val);
                }}
              />
            </div>

            <h6
              className="text-2xl text-dark-blue text-center"
              style={{ marginBottom: "10px" }}
            >
              Your commission savings
            </h6>

            <h6
              className="text-3xl font-bold sm:text-5xl text-dark-blue text-center"
              style={{ marginBottom: "10px" }}
            >
              ${numberWithCommas(savingsValue)}*
            </h6>

            <p className="pt-5 sm:text-s text-short-title text-center">
              *When compared to a commission of 5%, taking into account 2.5%
              buyer agent commission and our 1% listing fee payable when the
              home successfully sells, plus the applicable taxes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
