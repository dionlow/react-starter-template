import { useState } from "react"
import { FORM_FIELDS } from "../constants"
import { validate } from "./validation"

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
    const errors = []
    const newFormState = { ...formState }

    fields.forEach((field) => {
      const value = formState[field]?.value ?? ""
      const error = validate(field, value)
      if (error) {
        isValid = false
        errors.push(error)
      }

      const updatedFormField = { value, touched: true, error }
      newFormState[field] = updatedFormField
    })

    setFormState(newFormState)
    return { isValid, errors }
  }

  const onSubmit = () => {
    // TODO transform form state to API requirements, trim submitted values etc.

    const { isValid, errors } = onValidateAll()
    if (isValid) {
      // eslint-disable-next-line no-console
      console.log("VALIDATION SUCCESS")
      // eslint-disable-next-line no-console
      return console.log("SUBMITTING: ", { formState })
    }

    // eslint-disable-next-line no-console
    console.log("NOT VALID: Please fill out required fields.")
    // eslint-disable-next-line no-console
    return console.log("ERRORS: ", errors.join(" - "))
  }

  return {
    formState,
    onChangeFormValue,
    onSubmit,
  }
}

export default useForm
