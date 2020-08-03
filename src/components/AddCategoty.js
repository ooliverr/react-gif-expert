import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategoty = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategoty.propTypes = {
    setCategory: PropTypes.func.isRequired
}