import { useState } from "react"
import { FORM_FIELDS } from "./constants"

const ERROR_STRINGS = {
  BUSINESS_REQUIRED: "Business Name Required",
  EMAIL_REQUIRED: "Email Required",
  VALID_EMAIL_REQUIRED: "Please enter a valid email address.",
  PASSWORD_REQUIRED: "Password Required",
  VALID_PASSWORD:
    "Password requires at least one digit, one lowercase letter, one uppercase letter, and one special character.",
  VALID_PASSWORD_LENGTH:
    "Password must be between 8 and 15 characters in length.",
  TICKETING_SYSTEM_REQUIRED: "Ticketing Systems Required",
  URL_REQUIRED: "URL Required",
  VALID_URL: "Please enter a valid URL",
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

/**
 * Returns error strings for given password or null.
 */
const onPasswordValidates = (pass) => {
  if (!pass || pass?.length === 0) return ERROR_STRINGS.PASSWORD_REQUIRED

  if (pass?.length < 8 || pass?.length > 32) {
    return ERROR_STRINGS.VALID_PASSWORD_LENGTH
  }

  if (!pass.match(PASSWORD_REGEX)) return ERROR_STRINGS.VALID_PASSWORD

  return null
}

// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function isURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ) // fragment locator
  return pattern.test(str)
}

// Returns error not valid or null if no error.
export const validate = (field, value) => {
  switch (field) {
    case FORM_FIELDS.BUSINESS_NAME:
      if (!value || value?.length === 0) return ERROR_STRINGS.BUSINESS_REQUIRED
      break
    case FORM_FIELDS.EMAIL:
      if (!value || value?.length === 0) return ERROR_STRINGS.EMAIL_REQUIRED
      if (value?.length && !EMAIL_REGEX.test(value))
        return ERROR_STRINGS.VALID_EMAIL_REQUIRED
      break
    case FORM_FIELDS.PASSWORD:
      return onPasswordValidates(value)
    case FORM_FIELDS.TICKETING_SYSTEM:
      if (!value) return ERROR_STRINGS.TICKETING_SYSTEM_REQUIRED
      break
    case FORM_FIELDS.URL:
      if (!value) return ERROR_STRINGS.URL_REQUIRED
      if (!isURL(value)) return ERROR_STRINGS.VALID_URL
      break
    default:
      break
  }
  return null
}

const useForm = () => {
  const initialValue = {}
  const fields = Object.keys(FORM_FIELDS)

  fields.forEach((field) => {
    initialValue[field] = { value: "", touched: false, error: null }
  })

  const [formState, setFormState] = useState(initialValue)

  const onChangeFormValue = (e, field) => {
    if (field in FORM_FIELDS) {
      const newFormState = { ...formState }

      // Manual check for checkbox field
      const updatedValue =
        field === FORM_FIELDS.TERMS
          ? !formState[field].value
          : e?.target?.value ?? ""

      const error = validate(field, e?.target?.value)
      const updatedFormField = { value: updatedValue, touched: true, error }

      newFormState[field] = updatedFormField
      setFormState(newFormState)
    }
  }

  const onValidateAll = () => {
    let isValid = true
    const newFormState = { ...formState }

    fields.forEach((field) => {
      const value = formState[field]?.value ?? ""
      const error = validate(field, value)
      if (error) isValid = false

      const updatedFormField = { value, touched: true, error }
      newFormState[field] = updatedFormField
    })

    setFormState(newFormState)

    return isValid
  }

  const onSubmit = () => {
    // TODO transform form state to API requirements

    const isValid = onValidateAll()
    if (isValid) {
      // eslint-disable-next-line no-console
      console.log("VALIDATION SUCCESS")
      // eslint-disable-next-line no-console
      return console.log("SUBMITTING: ", { formState })
    }

    // eslint-disable-next-line no-console
    return console.log("NOT VALID: Please fill out required fields")
  }

  return {
    formState,
    onChangeFormValue,
    onSubmit,
  }
}

export default useForm
