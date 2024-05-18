import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : '#46c783',
                            fontSize: '20px'
                        }} >
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : '#46c783',
                            fontSize: '20px'
                        }} >
                            {
                                type === 'expense' ? `-${amount}` : `+${amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #262626;
    .history-item{
        background: #3D3D3C;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default History
