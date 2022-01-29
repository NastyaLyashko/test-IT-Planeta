import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {

  const [data, setData] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [isInputsValid, setIsInputsValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  console.log('инпуты '+ isInputsValid)
  console.log('форма' + isFormValid) 
  console.log('пароли' + isPasswordValid) 

  function handleChangeData(e) {
    const {name, value} = e.target
    setData({
        ...data,
        [name]: value,
    });
    setIsInputsValid(e.target.closest("form").checkValidity());
  }

  const [checkboxData, setCheckboxData] = useState({
    mailing: false,
    agreement: false,
});

function handleChangeCheckbox(e) {
    const {name, checked} = e.target
    setCheckboxData({
        ...checkboxData,
        [name]: checked,
    });
}

  useEffect(() => {
    if ((data.password !== '') && (data.repeatPassword !== '') && (data.password === data.repeatPassword)) {
      setIsPasswordValid(true)
    } else {
      setIsPasswordValid(false)
    }
  }, [data])

  useEffect(() => {
    if (isInputsValid && isPasswordValid && checkboxData.mailing && checkboxData.agreement) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isInputsValid, isPasswordValid, checkboxData])



  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register onChange={handleChangeData} isFormValid={isFormValid} changeCheckbox={handleChangeCheckbox} />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
