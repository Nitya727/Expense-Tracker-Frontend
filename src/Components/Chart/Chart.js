import React from 'react'
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    ArcElement
)

function Chart() {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((income) => {
            const {date} = income
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                tension: .4
            },
            {
                label: 'Expense',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                tension: .4
            }
        ],
    }
    
  return (
    <ChartStyled>
        <Line data={data} />
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    border: 2px solid #b1972b;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    padding-bottom: -300px;
`

export default Chart
