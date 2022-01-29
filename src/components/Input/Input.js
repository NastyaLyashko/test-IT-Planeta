import React, { useState, useEffect } from 'react';
import './Input.css';

function Input({ label, type, name, onChange }) {

    const [isActive, setIsActive] = useState(false);

    const [value, setValue] = useState('');

    function handleChange (e) {
        setValue(e.target.value);
        onChange(e);
    }

    useEffect(() => {
        if (value !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [value])

    return (
        <div className={`${isActive ? "form__input-container_active" : ""} form__input-container`}>
            <label className={`${isActive ? "form__field_active" : ""} form__field`} htmlFor={name} >{label}</label>
            <input  value={value || ''}
                        onChange={handleChange}
                        type={type}
                        name={name}
                        className={`${isActive ? "form__input_active" : ""} form__input`}
                        id={name}
                        required 
                        minLength="2"
                        maxLength="20"/>
        </div>
    );
}

export default Input;
