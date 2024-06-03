import React, { useEffect, useState } from "react";
import "./TransactionAndSummery.css";
import AnimatedPage from "../AnimatedPage";

function TransactionAndSummery() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [history, setHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHistory = {
      title: e.target.title.value,
      amount:
        e.target.transactionType.value === "income"
          ? "+" + e.target.amount.value
          : -e.target.amount.value,
      transactionType: e.target.transactionType.value,

      color: e.target.transactionType.value === "income" ? "green" : "red",

      // transactionType: e.target.transactionType.value,
    };
    setHistory([...history, newHistory]);

    if (e.target.transactionType.value === "income") {
      setIncome(+income + +e.target.amount.value);
      setBalance(+balance + +e.target.amount.value);
      console.log(+income);
    } else {
      setTotalExpense(+totalExpense + +e.target.amount.value);
      setBalance(+balance - +e.target.amount.value);
    }
    // setBalance(+income - +totalExpense);
  };

  // useEffect(() => {
  //   history.map((item, index) =>
  //     document
  //       .getElementById("exp-history-item")
  //       .style.borderRightColor(item.color)
  //   );
  // }, [history]);

  return (
    <>
      <div className="exp-summery-and-history">
        <div className="exp-balance">
          <h5>YOUR BALANCE</h5>
          <p>
            <b>${balance}</b>
          </p>
        </div>
        <div className="exp-summery">
          <div className="exp-income">
            <h5>INCOME</h5>
            <p>$ {income}</p>
          </div>
          <div className="exp-expense">
            <h5>EXPENSE</h5>
            <p>$ {totalExpense}</p>
          </div>
        </div>
        <div className="exp-history">
          <h6>History</h6>
          <div className="exp-underline"></div>
          <div className="exp-history-container">
            {history
              .slice(0)
              .reverse()
              .map((item, index) => (
                <div
                  className="exp-history-item"
                  // id="exp-history-item"
                  key={index}
                  // style={{
                  //   borderRightColor: item.color,
                  //   borderStyle: solid,
                  //   borderBottomWidth: 2,
                  //   borderLeftWidth: 1,
                  //   borderRightWidth: 4,
                  //   borderTopWidth: 0,
                  //   borderRadius: 3,
                  //   borderColor: "#dddcdc",
                  //   backgroundColor: "#fff",
                  //   display: flex,
                  //   justifyContent: "space-around",
                  //   alignItems: "center",
                  //   height: 35,
                  //   marginTop: 10,
                  // }}
                >
                  <p>{item.title}</p>
                  <p>{item.amount}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="exp-transaction">
        <h6>Add new transaction</h6>
        <div className="exp-underline"></div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="exp-transaction-form"
        >
          <p>Transaction Type</p>
          <select
            name="transactionType"
            id="transaction-type"
            className="exp-drop-down"
            // placeholder="Select transaction type"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <p>Text</p>
          <input
            type="text"
            name="title"
            placeholder="Enter text . . ."
            required
          />
          <p>
            Amount <br /> [negative - expense, positive - income]
          </p>
          <input
            type="number"
            name="amount"
            min="0"
            step="0.00001"
            placeholder="Enter amount . . ."
            required
          />
          <br />
          <button type="submit">Add transaction</button>
        </form>
      </div>
    </>
  );
}

export default TransactionAndSummery;
