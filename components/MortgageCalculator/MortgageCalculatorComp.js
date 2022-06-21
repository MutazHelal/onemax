import { useState, useEffect } from 'react';

import Select from 'react-select';
import { PieChart } from 'react-minimal-pie-chart';

export default function MortgageCalculatorComp() {

  const [calculatorState, setCalculatorState] = useState({
    homeValue: 300000,
    downPaymentPercent: 10,
    interestRate: 4.00,
    loanTerm: 25,
    startDate: {
      month: 1,
      year: 2022
    },
    propertyTax: 2400,
    homeInsurance: 1000,
    monthlyCondoFee: 0
  });

  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState(undefined);
  const [loanPayOffDate, setLoanPayOffDate] = useState(new Date());
  const [totalInterestBiWeekly, setTotalInterestBiWeekly] = useState(0);
  const [loanPayOffDateBiWeekly, setLoanPayOffDateBiWeekly] = useState(new Date());
  const [showTable, setShowTable] = useState(false);

  const updateCalculatorState = (newState) => {
    setCalculatorState(newState);
    updateResults(newState);
  };

  const updateResults = (calculatorState) => {
    
    var downPayment = ((calculatorState.homeValue * calculatorState.downPaymentPercent) / 100);
    var loanAmount = calculatorState.homeValue - downPayment;
    setLoanAmount(loanAmount);
    setDownPayment(downPayment);

    let Ip  = loanAmount;
    let Pir = getMonthlyInterestRate(calculatorState.interestRate);
    let biWeeklyInterestRate = getMonthlyInterestRate(calculatorState.interestRate, "bi-weekly");
    let m   = calculatorState.loanTerm * 12;

    let monthlyPayment = (Ip*Pir)/(1-Math.pow(1+Pir, m*-1));

    let mp = monthlyPayment;

    monthlyPayment += (calculatorState.propertyTax / 12);
    monthlyPayment += (calculatorState.homeInsurance / 12);
    monthlyPayment += calculatorState.monthlyCondoFee;

    const d = new Date();
    d.setFullYear(calculatorState.startDate.year, calculatorState.startDate.month - 1, 1);

    let [amortizationSchedule1, totalInterest, totalMonths] = calculateAmortizationSchedule(Pir, loanAmount, mp, new Date(d));
    let [totalInterestBiWeekly, totalBiWeeks] = getBiWeeklyPaymentsDetails(biWeeklyInterestRate, loanAmount, mp / 2);

    setTotalInterestPaid(totalInterest);
    setMonthlyPayments(monthlyPayment);
    setAmortizationSchedule(amortizationSchedule1);

    const d2 = new Date();
    d2.setFullYear(calculatorState.startDate.year, calculatorState.startDate.month - 1, 1);
    var payOffDate = new Date(d2.setMonth(d2.getMonth() + totalMonths - 1));
    setLoanPayOffDate(payOffDate);

    const d3 = new Date();
    d3.setFullYear(calculatorState.startDate.year, calculatorState.startDate.month - 1, 1);
    var biWeeklyPayOffDate = new Date(d3.setDate(d3.getDate() + (totalBiWeeks * 7)));
    
    setTotalInterestBiWeekly(totalInterestBiWeekly);
    setLoanPayOffDateBiWeekly(biWeeklyPayOffDate);
  };

  const calculateAmortizationSchedule = (monthlyInterestRate, loanAmount, monthlyPayment, date) => {

    let table = [];
    let totalInterest = 0;
    let year = date.getFullYear();
    let totalMonths = 0;

    let monthResults = {
      i: 0, p: 0, b: 0,
    };

    while (loanAmount > 0) {

      let i = monthlyInterestRate * loanAmount;
      let p = (monthlyPayment) - i;

      if (p > loanAmount) {
        p = loanAmount;
      }

      let b = loanAmount - p;
      loanAmount = b;

      totalMonths++;

      date.setMonth(date.getMonth() + 1);

      monthResults.i += i;
      monthResults.p += p;
      monthResults.b += b;

      if (date.getFullYear() != year || loanAmount == 0) {

        table.push([
          year, monthResults.i, monthResults.p, loanAmount
        ]);

        year = date.getFullYear();

        totalInterest += monthResults.i;

        monthResults.i = 0;
        monthResults.p = 0;
        monthResults.b = 0;
      }
    }

    return [table, totalInterest, totalMonths];
  };

  const getBiWeeklyPaymentsDetails = (biWeeklyInterestRate, loanAmount, biWeeklyPayment) => {

    let totalBiWeeks = 0;

    let biWeekResults = {
      i: 0, p: 0, b: 0,
    };

    while (loanAmount > 0) {
      
      let i = (biWeeklyInterestRate * loanAmount);

      let p = (biWeeklyPayment) - i;

      if (p > loanAmount) {
        p = loanAmount;
      }

      let b = loanAmount - p;

      loanAmount = b;

      totalBiWeeks += 2;

      biWeekResults.i += i;
      biWeekResults.p += p;
    }

    return [biWeekResults.i, totalBiWeeks];
  };

  const getMonthlyInterestRate = (interestRate, frequency = "monthly") => {

    let powerB = null;

    if (frequency == "monthly")
      powerB = (1/12);
    else if (frequency == "bi-weekly")
      powerB = (14/365);

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

  const loanTermOptions = [
    { value: 15, label: "15"},
    { value: 20, label: "20"},
    { value: 25, label: "25"},
    { value: 30, label: "30"}
  ];

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    updateResults(calculatorState);
  }, []);

  function numberWithCommas(x) {
    return Number(x).toLocaleString();
  }

  var taxTotal = calculatorState.loanTerm * calculatorState.propertyTax;
  var insuranceCondoTotal = calculatorState.loanTerm * (calculatorState.homeInsurance + calculatorState.monthlyCondoFee);
  var totalOfAllPayments = (monthlyPayments * (calculatorState.loanTerm * 12));
  var loanPayOffDateStr = monthNames[loanPayOffDate.getMonth()] + ", " + loanPayOffDate.getFullYear();
  var biWeeklyLoanPayOffDateStr = monthNames[loanPayOffDateBiWeekly.getMonth()] + ", " + loanPayOffDateBiWeekly.getFullYear();

  var loanAmountPercent = ((loanAmount * 100) / totalOfAllPayments).toFixed(2);
  var downPaymentPercent = ((downPayment * 100) / totalOfAllPayments).toFixed(2);
  var totalInterestPaidPercent = ((totalInterestPaid * 100) / totalOfAllPayments).toFixed(2);
  var taxTotalPercent = ((taxTotal * 100) / totalOfAllPayments).toFixed(2);
  var insuranceCondoTotalPercent = ((insuranceCondoTotal * 100) / totalOfAllPayments).toFixed(2);

  return (
    <>
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
                        newState.interestRate = e.target.value.replaceAll(",", "");
                        updateCalculatorState(newState);
                      }} />
                    <span className="field-unit">%</span>
                  </div>
                </div>

                <input className="range-slider" type="range" min="0" max="30" step={0.1} value={calculatorState.interestRate} 
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
                    <Select
                        instanceId="long-value-select"
                        className="bbrr-0 btrr-0 w-100"
                        value={loanTermOptions.value}
                        options={loanTermOptions}
                        defaultValue={loanTermOptions[2]}
                        onChange={selectedOption => {
                          let newState = {...calculatorState}
                          newState.loanTerm = Number(selectedOption.value);
                          updateCalculatorState(newState);
                        }}
                      />
                    <span className="field-unit">years</span>
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label-wrapper">
                    <label>Start Date: </label>
                  </div>
                  <div className="field-input-wrapper">
                    <Select
                        instanceId="long-value-select"
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
                    <span className="field-unit">per year</span>
                  </div>
                </div>

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
                    <span className="field-unit">per year</span>
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
                  <h2 className="text-3xl font-bold text-dark-blue">${numberWithCommas((!isNaN(monthlyPayments)) ? monthlyPayments.toFixed(2) : "0")}</h2>
                  <span style={{fontSize: "14px"}}>Your estimated monthly payment</span>
                </div>

                <div>

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

                  <div>

                    <h2 style={{marginBottom: "15px"}} className="text-1xl font-bold text-dark-blue">Loan Breakdown</h2>

                    <div style={{display: "flex", justifyContent: "center", marginBottom: "30px", marginTop: "30px"}}>
                      <PieChart
                        resolveLabelOverlapping="shift"
                        style={{width: "40%", overflow: "visible"}}
                        center={[50, 50]}
                        label={(props) => { return props.dataEntry.title;}}
                        labelPosition={110}
                        lengthAngle={360}
                        data={[
                          { title: ((loanAmount != 0) ? 'Principal' : ''), value: loanAmount, color: '#E38627' },
                          { title: ((totalInterestPaid != 0) ? 'Interest' : ''), value: totalInterestPaid, color: '#C13C37' },
                          { title: ((taxTotal != 0) ? 'Tax' : ''), value: taxTotal, color: '#6A2135' },
                          { title: ((insuranceCondoTotal != 0) ? 'Insurance' : ''), value: insuranceCondoTotal, color: '#E38627' },
                          { title: ((downPayment != 0) ? 'Down Payment' : ''), value: downPayment, color: '#C13C37' },
                        ]}
                        labelStyle={{
                          fontSize: "8px",
                          fontColor: "FFFFFA",
                          fontWeight: "800",
                        }}
                      />
                    </div>
                  </div>

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
            <h2 style={{marginBottom: "15px"}} className='text-2xl font-bold text-dark-blue'>Yearly Amortization Schedule</h2>
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
                {amortizationSchedule != undefined &&
                  amortizationSchedule.map((row, i) => (
                    <tr key={i}>
                      <td>{row[0]}</td>
                      <td>{numberWithCommas(row[1].toFixed(2))}</td>
                      <td>{numberWithCommas(row[2].toFixed(2))}</td>
                      <td>{numberWithCommas(row[3].toFixed(2))}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className='mort-det-weekly-div'>
            <div className='mortgage-details-div'>
              <div className='mortgage-details-div-inner'>
                <h2 style={{marginBottom: "15px"}} className="text-1xl font-bold text-dark-blue">Mortgage Details</h2>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Loan Amount:</span>
                  </div>

                  <div>
                    <span>${numberWithCommas(loanAmount.toFixed(2))}</span>
                  </div>

                  <div>
                    <div className='mgd-progress-bar' style={{width: loanAmountPercent + "%"}}>
                      <span className='percentage-progress'>{loanAmountPercent}%</span>
                    </div>
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Down Payment:</span>
                  </div>

                  <div>
                    <span>${numberWithCommas(downPayment.toFixed(2))} ({calculatorState.downPaymentPercent.toFixed(2)}%)</span>
                  </div>
                  
                  <div>
                    <div className='mgd-progress-bar' style={{width: downPaymentPercent + "%"}}>
                      <span className='percentage-progress'>{downPaymentPercent}%</span>
                    </div>
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Total Interest Paid:</span>
                  </div>

                  <div>
                    <span>${numberWithCommas(totalInterestPaid.toFixed(2))}</span>
                  </div>
                  
                  <div>
                    <div className='mgd-progress-bar' style={{width: totalInterestPaidPercent  + "%"}}>
                      <span className='percentage-progress'>{totalInterestPaidPercent }%</span>
                    </div>
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Total Tax Paid:</span>
                  </div>

                  <div>
                    <span>${numberWithCommas(taxTotal.toFixed(2))}</span>
                  </div>
                  
                  <div>
                    <div className='mgd-progress-bar' style={{width: taxTotalPercent + "%"}}>
                      <span className='percentage-progress'>{taxTotalPercent}%</span>
                    </div>
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Total Home Insurance:</span>
                  </div>

                  <div>
                    <span>${numberWithCommas(insuranceCondoTotal.toFixed(2))}</span>
                  </div>
                  
                  <div>
                    <div className='mgd-progress-bar' style={{width: insuranceCondoTotalPercent + "%"}}>
                      <span className='percentage-progress'>{insuranceCondoTotalPercent }%</span>
                    </div>
                  </div>
                </div>

                <hr style={{marginBottom: "15px", marginTop: "15px"}}/>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Total of {calculatorState.loanTerm * 12} payments:</span>
                  </div>

                  <div>
                    <span style={{fontWeight: "bold"}}>${numberWithCommas((!isNaN(totalOfAllPayments)) ? totalOfAllPayments.toFixed(2) : "0")}</span>
                  </div>
                  
                  <div>
                    
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <span>Loan pay-off date:</span>
                  </div>

                  <div>
                    <span style={{fontWeight: "bold"}}>{loanPayOffDateStr}</span>
                  </div>
                  
                  <div>
                    
                  </div>
                </div>

              </div>
            </div>

            <div className='weekly-payments-div'>
              <div className='weekly-payments-div-inner'>
                <h2 style={{marginBottom: "15px"}} className="text-1xl font-bold text-dark-blue">Monthly Vs Bi-Weekly Payment</h2>

                <div className='mortgage-details-flex'>
                  <div>
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>${numberWithCommas((!isNaN(monthlyPayments)) ? monthlyPayments.toFixed(2) : "0")}</div>
                    <div>Monthly Payment</div>
                  </div>

                  <div>
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>${numberWithCommas((!isNaN(monthlyPayments)) ? (monthlyPayments / 2).toFixed(2) : "0")}</div>
                    <div>Bi-weekly Payment</div>
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>{loanPayOffDateStr}</div>
                    <div>Monthly Pay-off Date</div>
                  </div>

                  <div>
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>{biWeeklyLoanPayOffDateStr}</div>
                    <div>Bi-weekly Pay-off Date</div>
                  </div>
                </div>

                <div className='mortgage-details-flex'>
                  <div>
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>${numberWithCommas(totalInterestPaid.toFixed(2))}</div>
                    <div>Total Interest Paid</div>
                  </div>

                  <div>
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>${numberWithCommas(totalInterestBiWeekly.toFixed(2))}</div>
                    <div>Total Interest Paid</div>
                  </div>
                </div>

                <div style={{textAlign: "center", marginTop: "20px"}}>
                  Total Interest Savings: ${numberWithCommas((totalInterestPaid - totalInterestBiWeekly).toFixed(2))}
                </div>

              </div>
            </div>
        </div>

        </div>
      </div>
    </>
  );
}
