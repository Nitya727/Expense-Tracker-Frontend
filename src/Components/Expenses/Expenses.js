import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

function Expenses() {
  const {addExpense, expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()
  
  useEffect(() => {
    getExpenses()
}, [])

  return (
    <ExpensesStyled>
        <InnnerLayout>
            <h1>Expenses</h1>
            <h2 className="total-expense">Total Expense: <span>₹{totalExpenses()}</span></h2>
            <div className="expense-content">
                <div className="form-container">
                  <ExpenseForm />
                </div>
                <div className="expenses">
                    {expenses.map((expense) => {
                        const {_id, title, amount, date, category, description, type} = expense;
                        return <IncomeItem
                          key={_id}
                          id={_id}
                          title={title} 
                          description={description}
                          amount={amount}
                          date={date}
                          type={type}
                          category={category}
                          indicatorColor= "var(--color-green)"
                          deleteItem={deleteExpense}
                        />
                    })}
                </div>
            </div>
        </InnnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
display: flex;
  overflow: auto;
  .expense-content{
    display: flex;
    gap: 2rem;
    .expenses{
      flex: 1;
    }
  }
  background: #262626;
  .total-expense{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3D3D3C;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }
`;

export default Expenses
