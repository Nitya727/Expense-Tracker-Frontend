import React from 'react'
import styled from 'styled-components'
import { bitcoin, book, business, calender, card, circle, clothing, comment, food, freelance, insurance, medical, money, piggy, rents, stocks, takeaway, trash, tv, users } from '../../utils/icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const incomeCategoryIcon = () =>{
        switch(category){
            case 'salary':
                return money
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks
            case 'stocks':
                return users
            case 'bitcoin':
                return bitcoin
            case 'rents':
                return rents
            case 'business':
                return business
            case 'bank':
                return card
            case 'other':
                return piggy
            default:
                return ''
        }
    }
    const expenseCategoryIcon = () => {
        switch(category){
            case 'education':
                return book
            case 'groceries':
                return food
            case 'health':
                return medical
            case 'subscriptions':
                return tv
            case 'takeaway':
                return takeaway
            case 'insurance':
                return insurance
            case 'rent':
                return rents
            case 'clothing':
                return clothing
            case 'travelling':
                return freelance
            case 'other':
                return circle
            default:
                return ''
        }
    }
    return (
        <IncomeItemStyled indicator = {indicatorColor} >
            <div className="icon">
                {type === 'expense' ? expenseCategoryIcon() : incomeCategoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p className='money' style={{color: '#46c783'}}>
                            <span style={{color: '#46c783'}}>₹</span>
                            {amount} 
                        </p>
                        <p className='date' style={{color: '#3fd8ff', fontSize: '20px'}}>{calender}{dateFormat(date)} </p>
                        <p>{comment}{description}</p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            // color={'red'}
                            // style = {{color: 'red'}}
                            // iColor = {'red'}
                            // hColor = {'var(--color-red)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`
    background: #3D3D3C;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    // .btn-con{
    //     color: red;
    // }
    .date{
        color: blue;
    }
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        border: 2px solid #21bab2;
        background: #3D3D3C;
        display: flex;
        align-items: center;
        color: #21bab2;
        justify-content: center;
        i{
            font-size: 2.6rem;
            color: #21bab2;
        }
    }
    .money{
        color: #46c783;
        font-size: 20px;
        font-weight: 700;
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem
