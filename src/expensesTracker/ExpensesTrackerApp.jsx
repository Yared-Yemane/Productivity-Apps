import React from "react";
import "./ExpensesTrackerApp.css";
import TransactionAndSummery from "./TransactionAndSummery";
import AnimatedPage from "../AnimatedPage";

const ExpensesTrackerApp = () => {
  return (
    <AnimatedPage>
      <div className="exp-body">
        <div className="exp-title">
          <h4>Expense Tracker</h4>
        </div>

        <div className="exp-container">
          <TransactionAndSummery />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ExpensesTrackerApp;
