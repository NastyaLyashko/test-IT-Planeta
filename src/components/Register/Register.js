import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import './Register.css';

function Register ({ onChange, isFormValid, changeCheckbox }) {


    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit} className="form__container">
                <div className="form__header">
                    <h3 className="form__title">Регистрация</h3>
                    <Link to="/signin" className="form__title">Войти</Link> 
                </div>
                <Input onChange={onChange} label={'E-mail'} type={'email'} name={'email'} />
                <Input onChange={onChange} label={'Пароль'} type={'password'} name={'password'} />
                <Input onChange={onChange} label={'Повторите пароль'} type={'password'} name={'repeatPassword'} />
                <button type="submit" className={`${isFormValid? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${isFormValid ? "" : "disabled"}`}>Регистрация</button>
                <label className='form__checkbox'>
                    <input  type='checkbox'
                            name='mailing'
                            value='true'
                            className='form__checkbox-input'
                            onChange={changeCheckbox}
                            required />
                    <span className='form__checkbox-text'>Соглашаюсь на получение рассылки по электронной почте</span>
                </label>
                <label className='form__checkbox'>
                    <input  type='checkbox'
                            name='agreement'
                            value='true'
                            className='form__checkbox-input'
                            onChange={changeCheckbox}
                            required />
                    <span className='form__checkbox-text'>Соглашаюсь с <Link to="#" className='form__checkbox-link'>политикой обработки персональных данных</Link></span>
                </label>
            </form>
        </section>
    )
}

export default Register;