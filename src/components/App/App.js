import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import Register from '../Register/Register';
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

  function handleChangeData(e) {
    const {name, value} = e.target
    setData({
        ...data,
        [name]: value,
    });
    setIsInputsValid(e.target.closest("form").checkValidity());
  }

  useEffect(() => {
    if ((data.password !== '') && (data.repeatPassword !== '') && (data.password === data.repeatPassword)) {
      setIsPasswordValid(true)
    } else {
      setIsPasswordValid(false)
    }
  }, [data])

  useEffect(() => {
    if (isInputsValid && isPasswordValid) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isInputsValid, isPasswordValid])



  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register onChange={handleChangeData} isFormValid={isFormValid} />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
