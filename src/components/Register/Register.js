import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { useFormWithValidation } from '../Validation/Validation';
import './Register.css';

function Register () {

    const formValidation = useFormWithValidation();


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
                <Input onChange={formValidation.handleChangeData} label={'E-mail'} type={'email'} name={'email'} />
                <Input onChange={formValidation.handleChangeData} label={'Пароль'} type={'password'} name={'password'} />
                <Input onChange={formValidation.handleChangeData} label={'Повторите пароль'} type={'password'} name={'repeatPassword'} />
                <button type="submit" className={`${formValidation.isFormValid? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${formValidation.isFormValid ? "" : "disabled"}`}>Регистрация</button>
                <label className='form__checkbox'>
                    <input  type='checkbox'
                            name='mailing'
                            value='true'
                            className='form__checkbox-input'
                            onChange={formValidation.handleChangeCheckbox}
                            required />
                    <span className='form__checkbox-text'>Соглашаюсь на получение рассылки по электронной почте</span>
                </label>
                <label className='form__checkbox'>
                    <input  type='checkbox'
                            name='agreement'
                            value='true'
                            className='form__checkbox-input'
                            onChange={formValidation.handleChangeCheckbox}
                            required />
                    <span className='form__checkbox-text'>Соглашаюсь с <Link to="#" className='form__checkbox-link'>политикой обработки персональных данных</Link></span>
                </label>
            </form>
        </section>
    )
}

export default Register;