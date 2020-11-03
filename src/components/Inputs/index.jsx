import React from "react"

import { FORM_FIELDS } from "../../constants"
import Select from "../Select"
// import Popup from "../Popup"

import {
  inputsContainer,
  input,
  errorDiv,
  termsOfService,
} from "./styles.module.css"

const TextInput = ({
  formState,
  onChangeFormValue,
  field,
  placeholder,
  isPassword = false,
}) => {
  const onHandleChange = (event) => {
    onChangeFormValue(event, field)
  }

  return (
    <>
      <input
        type={isPassword ? "password" : undefined}
        className={input}
        placeholder={placeholder}
        value={formState[field]?.value ?? ""}
        onChange={onHandleChange}
      />
      {/* <Popup isOpen text={"Please include '@' in the address"} /> */}
      <span className={errorDiv}>
        {formState[field]?.touched === true && formState[field]?.error}
      </span>
    </>
  )
}

const BusinessNameInput = ({ formState, onChangeFormValue }) => {
  const inputProps = {
    formState,
    onChangeFormValue,
    placeholder: "What is the name of your business?",
    field: FORM_FIELDS.BUSINESS_NAME,
  }
  return <TextInput {...inputProps} />
}

const BusinessURLInput = ({ formState, onChangeFormValue }) => {
  const inputProps = {
    formState,
    onChangeFormValue,
    placeholder: "What is your business website url?",
    field: FORM_FIELDS.URL,
  }
  return <TextInput {...inputProps} />
}

const EmailInput = ({ formState, onChangeFormValue }) => {
  const inputProps = {
    formState,
    onChangeFormValue,
    placeholder: "What is your email?",
    field: FORM_FIELDS.EMAIL,
  }
  return <TextInput {...inputProps} />
}

const PasswordInput = ({ formState, onChangeFormValue }) => {
  const inputProps = {
    formState,
    onChangeFormValue,
    placeholder: "Create a password.",
    field: FORM_FIELDS.PASSWORD,
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
      <span className="checkmark" />I accept to the{" "}
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
