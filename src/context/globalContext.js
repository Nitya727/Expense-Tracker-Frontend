import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = "https://expense-tracker-backend-cxcb.onrender.com"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncomes()
    }

    const getIncomes = async () =>{
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()

    }
    
    const totalIncome = () => {
        let totalIncome = 0
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome
    }
    console.log('total', totalIncome())

    const addExpense = async (expense) =>{
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getExpenses()
    }

    const getExpenses = async () =>{
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()

    }
    
    const totalExpenses = () => {
        let totalExpense = 0
        expenses.forEach((expense) => {
            totalExpense += expense.amount
        })
        return totalExpense
    }
    console.log('total', totalExpenses())

    const balance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0, 4)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            balance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}