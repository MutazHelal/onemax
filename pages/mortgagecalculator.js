import { useState, useEffect } from 'react';

import Footer from "../components/Footer/Footer";
import GetYourDreamHouse from "../components/GetYourDreamHouse/GetYourDreamHouse";
import Header from "../components/Header/Header";

import Select from 'react-select';

export default function MortgageCalculator() {

  const [calculatorState, setCalculatorState] = useState({
    homeValue: 300000,
    downPaymentPercent: 10,
    interestRate: 4.00,
    loanTerm: 20,
    startDate: {
      month: 1,
      year: 2022
    },
    propertyTax: 2400,
    pmiPercent: 1.0,
    homeInsurance: 1000,
    monthlyCondoFee: 0
  });

  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [monthlyPmi, setMonthlyPmi] = useState(0);
  const [monthlyPaymentsWithPmi, setMonthlyPaymentsWithPmi] = useState(0);
  const [pmiStopMonth, setPmiStopMonth] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [pmiEndDate, setPmiEndDate] = useState(new Date());
  const [showTable, setShowTable] = useState(false);

  const updateCalculatorState = (newState) => {
    if (newState.downPaymentPercent >= 20) {
      newState.pmiPercent = 0;
    }
    setCalculatorState(newState);
    updateResults();
  };

  const updateResults = () => {
    var loanAmount = calculatorState.homeValue - ((calculatorState.homeValue * calculatorState.downPaymentPercent) / 100);
    var pmi = ((loanAmount * calculatorState.pmiPercent) / 100) / 12;

    let Ip  = loanAmount;
    let Pir = getMonthlyInterestRate(calculatorState.interestRate);
    let m   = calculatorState.loanTerm * 12;

    let monthlyPayment = (Ip*Pir)/(1-Math.pow(1+Pir, m*-1));

    let mp = monthlyPayment;

    monthlyPayment += (calculatorState.propertyTax / 12);
    monthlyPayment += (calculatorState.homeInsurance / 12);
    monthlyPayment += pmi;
    monthlyPayment += calculatorState.monthlyCondoFee;

    let pmiStopMonth = getPmiStopMonth(calculatorState.homeValue, Pir, loanAmount, mp);
    let amortizationSchedule = calculateAmortizationSchedule(Pir, loanAmount, mp);

    setMonthlyPayments(monthlyPayment - pmi);
    setMonthlyPmi(pmi);
    setMonthlyPaymentsWithPmi(monthlyPayment);
    setPmiStopMonth(pmiStopMonth);
    setAmortizationSchedule(amortizationSchedule);

    const d = new Date();
    d.setFullYear(calculatorState.startDate.year, calculatorState.startDate.month - 1, 1);
    var newDate = new Date(d.setMonth(d.getMonth() + pmiStopMonth));
    setPmiEndDate(newDate);
  };

  const calculateAmortizationSchedule = (monthlyInterestRate, loanAmount, monthlyPayment) => {

    let table = [];

    let year = 1;
    while (loanAmount > 0) {

      let i = monthlyInterestRate * loanAmount * 12;
      let p = (monthlyPayment * 12) - i;
      if (p > loanAmount) {
        p = loanAmount;
      }
      let b = loanAmount - p;
      loanAmount = b;

      table.push([year, i, p, b]);

      year++;
    }

    return table;
  };

  const getPmiStopMonth = (homePrice, monthlyInterestRate, loanAmount, monthlyPayment) => {
    let month = 0;
    while (loanAmount > 0) {

      let i = monthlyInterestRate * loanAmount;
      let p = (monthlyPayment) - i;
      let b = loanAmount - p;
      loanAmount = b;

      if (loanAmount <= ((80 * homePrice) / 100)) {
        break;
      }

      month++;
    };

    return month;
  };

  const getMonthlyInterestRate = (interestRate) => {
    let powerB = (1/12);

    // formula for calculating periodic interest rate
    // ((1+(iR÷2))^2)^(1÷12)−1
    var iR = interestRate/100;
    var powerA = 1+(iR/2);
    return Math.pow(Math.pow(powerA,2),powerB)-1;
  };

  const options = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    updateResults();
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Header />
      
      <div className="mg-calc-widget w-full px-6 mx-auto lg:container xl:px-2">
        <div className="mg-calc-inner">

          <div className="mg-calc-centered">
            <div className="mg-calc-centered-inner">
              <h6 className="text-4xl font-bold sm:text-5xl text-dark-blue text-center">How Much House Can You Afford?</h6>
              <p className="pt-5 sm:text-xl text-short-title text-center">This mortgage calculator can be used to figure out monthly payments of a home mortgage loan,
                based on the homes sale price, the term of the loan desired, buyers
                down payment percentage,and the loans interest rate.</p>
            </div>
          </div>

          <div className="mg-calc-form-card-area">
            
            <div className="mg-calc-form-area">
              <form className="mg-calc-form">
                
                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Home Value: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <span className="field-unit">$</span>
                    <input className="bblr-0 btlr-0" type="text" value={numberWithCommas(calculatorState.homeValue)} 
                      onChange={e => {
                        
                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          console.log("returning");
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.homeValue = e.target.value.replaceAll(",", "");
                        updateCalculatorState(newState);
                      }} />
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Down Payment: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <span className="field-unit">$</span>
                    <input className="bblr-0 btlr-0" type="text" value={numberWithCommas((calculatorState.homeValue * calculatorState.downPaymentPercent) / 100)}
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }
    
                        let newState = {...calculatorState}
                        newState.downPaymentPercent = Number((Number(e.target.value.replaceAll(",", "")) * 100) / newState.homeValue);
                        updateCalculatorState(newState);
                      }} />
                  </div>
                </div>

                <input className="range-slider" type="range" min="0" max="100" value={calculatorState.downPaymentPercent}
                  onChange={e => {

                    if (isNaN(Number(e.target.value))) {
                      return;  
                    }

                    let newState = {...calculatorState}
                    newState.downPaymentPercent = Number(e.target.value);
                    updateCalculatorState(newState);
                  }} />

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Loan Amount: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <span className="field-unit">$</span>
                    <input className="bblr-0 btlr-0" type="text" disabled="disabled" value={numberWithCommas(calculatorState.homeValue - ((calculatorState.homeValue * calculatorState.downPaymentPercent) / 100))} />
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Interest Rate: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <input className="bbrr-0 btrr-0" type="text" value={numberWithCommas(calculatorState.interestRate)}
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.interestRate = Number(e.target.value.replaceAll(",", ""));
                        updateCalculatorState(newState);
                      }} />
                    <span className="field-unit">%</span>
                  </div>
                </div>

                <input className="range-slider" type="range" min="0" max="30" value={calculatorState.interestRate} 
                  onChange={e => {

                    if (isNaN(Number(e.target.value))) {
                      return;  
                    }

                    let newState = {...calculatorState}
                    newState.interestRate = Number(e.target.value);
                    updateCalculatorState(newState);
                  }} />

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Loan Term: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <input className="bbrr-0 btrr-0" type="text" value={calculatorState.loanTerm} 
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.loanTerm = Number(e.target.value.replaceAll(",", ""));
                        updateCalculatorState(newState);
                      }} />
                    <span className="field-unit">years</span>
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Start Date: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <Select
                        className="bbrr-0 btrr-0 w-100"
                        value={options.value}
                        options={options}
                        defaultValue={options[0]}
                        onChange={selectedOption => {
                          let newState = {...calculatorState}
                          newState.startDate.month = Number(selectedOption.value);
                          updateCalculatorState(newState);
                        }}
                      />
                    <input className="bblr-0 btlr-0" type="text" value={calculatorState.startDate.year}
                      onChange={e => {

                        if (isNaN(Number(e.target.value))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.startDate.year = Number(e.target.value);
                        updateCalculatorState(newState);
                      }} />
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Property Tax: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <input className="bbrr-0 btrr-0" type="text" value={numberWithCommas(calculatorState.propertyTax)} 
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.propertyTax = Number(e.target.value.replaceAll(",", ""));
                        updateCalculatorState(newState);
                      }} />
                    <span className="field-unit">$/years</span>
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>PMI: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <input className="bbrr-0 btrr-0" type="text" value={numberWithCommas(calculatorState.pmiPercent)}
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.pmiPercent = Number(e.target.value.replaceAll(",", ""));
                        updateCalculatorState(newState);
                      }} />
                    <span className="field-unit">%</span>
                  </div>
                </div>

                <input className="range-slider" type="range" min="0" max="10" value={calculatorState.pmiPercent}
                  onChange={e => {

                    if (isNaN(Number(e.target.value))) {
                      return;  
                    }

                    let newState = {...calculatorState}
                    newState.pmiPercent = Number(e.target.value);
                    updateCalculatorState(newState);
                  }} />

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Home Insurance: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <input className="bbrr-0 btrr-0" type="text" value={numberWithCommas(calculatorState.homeInsurance)} 
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.homeInsurance = Number(e.target.value.replaceAll(",", ""));
                        updateCalculatorState(newState);
                      }} />
                    <span className="field-unit">$/year</span>
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Monthly Condo Fee: </label>
                  </div>
                  <div className="field-input-wrapper">
                  <span className="field-unit">$</span>
                    <input className="bblr-0 btlr-0" type="text" value={numberWithCommas(calculatorState.monthlyCondoFee)} 
                      onChange={e => {

                        if (isNaN(Number(e.target.value.replaceAll(",", "")))) {
                          return;  
                        }

                        let newState = {...calculatorState}
                        newState.monthlyCondoFee = Number(e.target.value.replaceAll(",", ""));
                        updateCalculatorState(newState);
                      }} />
                  </div>
                </div>

              </form>
            </div>

            <div className="mg-calc-card-area">
              <div className="mg-calc-loan-card">
                
                <div>
                  <h2 className="text-3xl font-bold text-dark-blue">${numberWithCommas(monthlyPaymentsWithPmi.toFixed(2))}</h2>
                  <span style={{fontSize: "14px"}}>Your estimated monthly payment {(calculatorState.pmiPercent > 0) ? "with PMI" : ""}</span>
                </div>

                <div>
                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>PMI: </label>
                    </div>
                    <div>
                      <span>${numberWithCommas(monthlyPmi.toFixed(2))}</span>
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>Monthly Tax Paid: </label>
                    </div>
                    <div>
                      <span>${numberWithCommas((calculatorState.propertyTax / 12).toFixed(2))}</span>
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>Monthly Home Insurance: </label>
                    </div>
                    <div>
                      <span>${numberWithCommas((calculatorState.homeInsurance / 12).toFixed(2))}</span>
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>Monthly Condo Fee: </label>
                    </div>
                    <div>
                      <span>${numberWithCommas(calculatorState.monthlyCondoFee.toFixed(2))}</span>
                    </div>
                  </div>

                  <hr style={{marginBottom: "15px"}}/>

                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>PMI End Date: </label>
                    </div>
                    <div>
                      <span>{monthNames[pmiEndDate.getMonth()] + ", " + pmiEndDate.getFullYear()}</span>
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>Total PMI Payments: </label>
                    </div>
                    <div>
                      <span>{pmiStopMonth}</span>
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-wrapper">
                      <label>Monthly payments after {monthNames[pmiEndDate.getMonth()] + ", " + pmiEndDate.getFullYear()}: </label>
                    </div>
                    <div>
                      <span>${numberWithCommas(monthlyPayments.toFixed(2))}</span>
                    </div>
                  </div>

                  <hr style={{marginBottom: "15px"}}/>

                  <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <button className="loan-card-btn" 
                      onClick={e => {
                        setShowTable((!showTable));
                      }}>Show Amortization Table</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='amort-table-wrapper' style={{display: (showTable) ? "block" : "none"}}>
            <h2 style={{marginBottom: "15px"}} className='text-3xl font-bold text-dark-blue'>Yearly Amortization Schedule</h2>
            <table className="amortization-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Interest</th>
                  <th>Principal</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {amortizationSchedule.map((row, i) => (
                  <tr key={i}>
                    <td>{calculatorState.startDate.year + i}</td>
                    <td>{numberWithCommas(row[1].toFixed(2))}</td>
                    <td>{numberWithCommas(row[2].toFixed(2))}</td>
                    <td>{numberWithCommas(row[3].toFixed(2))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='mort-det-weekly-div'>
            <div className='mortgage-details-div'>

            </div>

            <div className='weekly-payments-div'>

            </div>
          </div>

        </div>
      </div>
      
      <GetYourDreamHouse />
      <Footer />
    </>
  );
}
