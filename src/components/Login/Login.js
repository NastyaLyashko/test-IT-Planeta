import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { useFormWithValidation } from '../Validation/Validation';
import './Login.css';

function Login () {

    const formValidation = useFormWithValidation();

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
                <Input onChange={formValidation.handleChangeData}  label={'E-mail'} type={'email'} name={'email'} />
                <Input onChange={formValidation.handleChangeData}  label={'Пароль'} type={'password'} name={'password'} />
                <button type="submit" className={`${formValidation.isFormLoginValid? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${formValidation.isFormLoginValid ? "" : "disabled"}`}>Войти</button>
            </form>
        </section>
    )
}

export default Login;