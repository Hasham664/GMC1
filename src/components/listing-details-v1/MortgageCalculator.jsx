import React, { useState } from "react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    // Calculate the monthly mortgage payment here based on user input
    // You can use the formula mentioned in the previous response or a library for this purpose
    // For simplicity, we'll set it to a fixed value here
    const calculatedMonthlyPayment = 1500; // Replace this with your actual calculation

    setMonthlyPayment(calculatedMonthlyPayment);
  };

  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <div>
        <label htmlFor="loanAmount">Loan Amount ($):</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate (%):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="loanTerm">Loan Term (years):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button onClick={calculateMortgage}>Calculate</button>
      {monthlyPayment !== null && (
        <div>
          <h3>Monthly Payment:</h3>
          <p>${monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
