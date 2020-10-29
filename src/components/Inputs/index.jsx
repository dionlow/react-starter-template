import React from "react"

import { FORM_FIELDS } from "../../constants"
import Select from "../Select"

import {
  inputsContainer,
  input,
  errorDiv,
  termsOfService,
} from "./styles.module.css"

const BusinessNameInput = ({ formState, onChangeFormValue }) => (
  <>
    <input
      className={input}
      placeholder="What is the name of your business?"
      value={formState[FORM_FIELDS.BUSINESS_NAME]?.value ?? ""}
      onChange={(e) => onChangeFormValue(e, FORM_FIELDS.BUSINESS_NAME)}
    />
    <span className={errorDiv}>
      {formState[FORM_FIELDS.BUSINESS_NAME]?.touched === true &&
        !formState[FORM_FIELDS.BUSINESS_NAME]?.value?.length && // TODO: add a validate function forms.
        "Business Name Required"}
    </span>
  </>
)

const BusinessURLInput = ({ formState, onChangeFormValue }) => (
  <>
    <input
      className={input}
      placeholder="What is you business website url?"
      value={formState[FORM_FIELDS.URL]?.value ?? ""}
      onChange={(e) => onChangeFormValue(e, FORM_FIELDS.URL)}
    />
    <span className={errorDiv}>
      {formState[FORM_FIELDS.URL]?.touched === true &&
        !formState[FORM_FIELDS.URL]?.value?.length && // TODO: add a validate function forms.
        "Business Website Required"}
    </span>
  </>
)

const EmailInput = ({ formState, onChangeFormValue }) => (
  <>
    <input
      className={input}
      placeholder="What is your email?"
      value={formState[FORM_FIELDS.EMAIL]?.value ?? ""}
      onChange={(e) => onChangeFormValue(e, FORM_FIELDS.EMAIL)}
    />
    <span className={errorDiv}>
      {formState[FORM_FIELDS.EMAIL]?.touched === true &&
        !formState[FORM_FIELDS.EMAIL]?.value?.length && // TODO: add a validate function forms.
        "Email Required"}
    </span>
  </>
)

const PasswordInput = ({ formState, onChangeFormValue }) => {
  return (
    <>
      <input
        type="password"
        className={input}
        placeholder="Create a password."
        value={formState[FORM_FIELDS.PASSWORD]?.value ?? ""}
        onChange={(e) => onChangeFormValue(e, FORM_FIELDS.PASSWORD)}
      />
      <span className={errorDiv}>
        {formState[FORM_FIELDS.PASSWORD]?.touched === true &&
          !(formState[FORM_FIELDS.PASSWORD]?.value?.length >= 8) && // TODO: add a validate function forms.
          "Password must be at least 8 characters long."}
      </span>
    </>
  )
}

const SelectProviderInput = ({ formState, onChangeFormValue }) => {
  const sharedInputProps = { formState, onChangeFormValue }
  return (
    <>
      <Select {...sharedInputProps} field={FORM_FIELDS.TICKETING_SYSTEM} />
      <span className={errorDiv}>
        {formState[FORM_FIELDS.TICKETING_SYSTEM]?.touched === true &&
          !formState[FORM_FIELDS.TICKETING_SYSTEM]?.value && // TODO: add a validate function forms.
          "Ticketing System Required"}
      </span>
    </>
  )
}

const TermCheckmarkInput = ({ formState, onChangeFormValue }) => {
  return (
    <div className={termsOfService}>
      <input
        type="checkbox"
        defaultChecked={!!formState[FORM_FIELDS.TICKETING_SYSTEM]?.value}
        onClick={(e) => onChangeFormValue(e, FORM_FIELDS.TERMS)}
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
