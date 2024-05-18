import React, { useEffect } from "react";
import styled from "styled-components";
import { InnnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/History";

function Dashboard() {
  const {
    totalIncome,
    totalExpenses,
    balance,
    getIncomes,
    getExpenses,
    incomes,
    expenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <>
      <DashboardStyled>
        <h1 className="title">Expense Tracker</h1>
        <InnnerLayout>
          <h1>All Transactions</h1>
          <div className="stats-con">
            <div className="chart-con">
              <Chart />
              <div className="amount-con">
                <div className="income">
                  <h2>Total Income</h2>
                  <p style={{ color: "#46c783" }}>
                    {/* <span style={{color: '#46c783'}}>₹</span> */}₹
                    {totalIncome()}
                  </p>
                </div>
                <div className="expense">
                  <h2>Total Expense</h2>
                  <p style={{ color: "red" }}>₹{totalExpenses()}</p>
                </div>
                <div className="balance">
                  <h2>Total Balance</h2>
                  <p style={{ color: "#3fd8ff" }}>₹{balance()}</p>
                </div>
              </div>
            </div>
            <div className="history-con">
              <History />
              <div className="salary-item">
                <h2 className="salary-title">
                  Min<span style={{ color: "#b1972b" }}>Income</span>Max
                </h2>
                <p className="mini">
                  {Math.min(...incomes.map((item) => item.amount))}
                </p>
                <p className="maxi">
                  {Math.max(...incomes.map((item) => item.amount))}
                </p>
              </div>
              <div className="salary-item">
                <h2 className="salary-title">
                  Min<span style={{ color: "#b1972b" }}>Expense</span>Max
                </h2>
                <p className="mini">
                  {Math.min(...expenses.map((item) => item.amount))}
                </p>
                <p className="maxi">
                  {Math.max(...expenses.map((item) => item.amount))}
                </p>
              </div>
            </div>
          </div>
        </InnnerLayout>
      </DashboardStyled>
    </>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    background: #262626;
    .chart-con {
      grid-column: 1/4;
      height: 300px;
      .amount-con {
        background: #262626;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
      }
      .income,
      .expense,
      .balance {
        background: #3d3d3c;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        p {
          font-size: 2rem;
          font-weight: 700;
        }
      }
      .balance {
        grid-column: 2 / 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 500px;
        p {
          opacity: 0.6;
          font-size: 2.3rem;
        }
      }
    }
  }
  .history-con {
    grid-column: 4 / -1;
    display: flex;
    flex-direction: column;
    background: #262626;
    h2 {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    span {
      margin-left: 50px;
      margin-right: 50px;
    }
    .salary-title {
      font-size: 1.2rem;
      span {
        font-size: 1.8rem;
      }
    }
    .salary-item {
      background: #3d3d3c;
      border: 2px solid #ffffff;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      padding: 1rem;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-top: -100px;
      padding-bottom: 0px;
      margin-top: 20px;
      p {
        font-weight: 600;
        font-size: 1.6rem;
        margin-top: -20px;
      }
      .mini {
        margin-right: 230px;
      }
      .maxi {
        margin-left: 230px;
        margin-top: -30px;
      }
    }
  }
  .title {
    background: #262626;
    padding-left: 270px;
    font-size: 50px;

  }
`;

export default Dashboard;
