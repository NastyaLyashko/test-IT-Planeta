import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './Login.css';

function Login ({ onChange, isFormValid }) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit} className="form__container">
                <div className="form__header">
                    <h3 className="form__title">Войти</h3>
                    <Link to="/signup" className="form__title">Регистрация</Link> 
                </div>
                <Input onChange={onChange} label={'E-mail'} type={'email'} name={'email'} />
                <Input onChange={onChange} label={'Пароль'} type={'password'} name={'password'} />
                <button type="submit" className={`${isFormValid? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${isFormValid ? "" : "disabled"}`}>Войти</button>
            </form>
        </section>
    )
}

export default Login;