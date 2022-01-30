import React, { useState, useEffect } from 'react';

export function useFormWithValidation() {

  const [data, setData] = useState({});

  const [isInputsValid, setIsInputsValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormRegValid, setIsFormRegValid] = useState(false);
  const [isFormLoginValid, setIsFormLoginValid] = useState(false);

  function handleChangeData (e) {
    const {name, value} = e.target
    setData({...data, [name]: value});
    setIsInputsValid(e.target.closest("form").checkValidity());
  }

  const [checkboxData, setCheckboxData] = useState({
    mailing: false,
    agreement: false,
});

const handleChangeCheckbox = (e) => {
    const {name, checked} = e.target
    setCheckboxData({
        ...checkboxData,
        [name]: checked,
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
    if (isInputsValid && isPasswordValid && checkboxData.mailing && checkboxData.agreement) {
      setIsFormRegValid(true)
    } else {
      setIsFormRegValid(false)
    }
  }, [isInputsValid, isPasswordValid, checkboxData])

  useEffect(() => {
    if (isInputsValid) {
      setIsFormLoginValid(true)
    } else {
      setIsFormLoginValid(false)
    }
  }, [isInputsValid, isPasswordValid, checkboxData])
  return { handleChangeData, handleChangeCheckbox, isFormRegValid, isFormLoginValid, data, checkboxData };
}