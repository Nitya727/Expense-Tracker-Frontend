import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../context/globalContext'
import Button from '../Button/Button'
import { plus } from '../../utils/icons'

function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description} = inputState

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError(null)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        getIncomes()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit} >
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder='Salary Title'
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input 
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder='Salary Amount'
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter a date'
                    selected={date}
                    dateFormat= "dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
                <div className="selects input-control">
                    <select 
                        required 
                        value={category} 
                        name="category" 
                        id="category" 
                        onChange={handleInput('category')}
                    >
                        <option value=""  disabled >Select Option</option>
                        <option value="salary">Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="investments">Investments</option>
                        <option value="business">Business</option>
                        <option value="stocks">Stocks</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="bank">Bank Transfer</option>  
                        <option value="rents">Rents</option>  
                        <option value="other">Other</option>  
                    </select>
                </div>
                <div className="input-control">
                    <textarea 
                        name="description" 
                        value={description} 
                        placeholder='Add A Reference' 
                        id="description" 
                        cols="30" 
                        rows="4" 
                        onChange={handleInput('description')} 
                    />
                </div>
                <div className="submit-btn">
                    <Button
                        name={'Add Income'}
                        icon={plus}
                        bPad={'.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--color-accent'}
                        color={'#fff'}
                    />
                </div>
            </div>
        </FormStyled>
    )
}
const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #b1972b;
        background: transparent;
        background: #3D3D3C;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: white;
        &::placeholder{
            color: white;
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: white;
            &:focus, &:active{
                color: white;
                background: #3D3D3C;
            }
        }
    }
    select{
        margin-top: 15px;
        margin-bottom: 15px;
        background: #3D3D3C;
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border: 2px solid #b1972b;
            &:hover{
                background: #b1972b !important;
            }
        }
    }
`
export default Form
