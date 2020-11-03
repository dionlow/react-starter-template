import React from "react"

import { FORM_FIELDS } from "../../constants"
import TextInput from "./TextInput"
import Select from "../Select"

import {
  inputsContainer,
  errorDiv,
  termsOfService,
  checkText,
} from "./styles.module.css"

const BusinessNameInput = ({ formState, onChangeFormValue }) => {
  const field = FORM_FIELDS.BUSINESS_NAME
  const inputProps = {
    field,
    onChangeFormValue,
    formValue: formState[field]?.value ?? "",
    formError: formState[field]?.touched === true && formState[field]?.error,
    placeholder: "What is the name of your business?",
  }
  return <TextInput {...inputProps} />
}

const BusinessURLInput = ({ formState, onChangeFormValue }) => {
  const field = FORM_FIELDS.URL
  const inputProps = {
    field,
    onChangeFormValue,
    formValue: formState[field]?.value ?? "",
    formError: formState[field]?.touched === true && formState[field]?.error,
    placeholder: "What is your business website url?",
  }
  return <TextInput {...inputProps} />
}

const EmailInput = ({ formState, onChangeFormValue }) => {
  const field = FORM_FIELDS.EMAIL
  const inputProps = {
    field,
    onChangeFormValue,
    formValue: formState[field]?.value ?? "",
    formError: formState[field]?.touched === true && formState[field]?.error,
    placeholder: "What is your email?",
  }
  return <TextInput {...inputProps} />
}

const PasswordInput = ({ formState, onChangeFormValue }) => {
  const field = FORM_FIELDS.PASSWORD
  const inputProps = {
    field,
    onChangeFormValue,
    formValue: formState[field]?.value ?? "",
    formError: formState[field]?.touched === true && formState[field]?.error,
    placeholder: "Create a password.",
    isPassword: true,
  }
  return <TextInput {...inputProps} />
}

const SelectProviderInput = ({ formState, onChangeFormValue }) => {
  const sharedInputProps = { formState, onChangeFormValue }
  return (
    <>
      <Select {...sharedInputProps} field={FORM_FIELDS.TICKETING_SYSTEM} />
      <span className={errorDiv}>
        {formState[FORM_FIELDS.TICKETING_SYSTEM]?.touched === true &&
          formState[FORM_FIELDS.TICKETING_SYSTEM]?.error}
      </span>
    </>
  )
}

const TermCheckmarkInput = ({ formState, onChangeFormValue }) => {
  const onHandleChange = (event) => {
    onChangeFormValue(event, FORM_FIELDS.TERMS)
  }

  return (
    <div className={termsOfService}>
      <input
        type="checkbox"
        defaultChecked={!!formState[FORM_FIELDS.TICKETING_SYSTEM]?.value}
        onClick={onHandleChange}
      />
      <span className={checkText}>I accept to the</span>
      <a
        href="https://www.termsandcondiitionssample.com/"
        target="_blank"
        rel="noreferrer"
      >
        Terms of Service
      </a>
    </div>
  )
}

const Inputs = ({ formState, onChangeFormValue }) => {
  const sharedInputProps = { formState, onChangeFormValue }

  return (
    <>
      <div className={inputsContainer}>
        <BusinessNameInput {...sharedInputProps} />
        <BusinessURLInput {...sharedInputProps} />
        <SelectProviderInput {...sharedInputProps} />
        <EmailInput {...sharedInputProps} />
        <PasswordInput {...sharedInputProps} />
      </div>
      <TermCheckmarkInput {...sharedInputProps} />
    </>
  )
}

export default Inputs
