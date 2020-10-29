import { useState } from "react"
import { FORM_FIELDS } from "./constants"

const useForm = () => {
  const initialValue = {}
  const fields = Object.keys(FORM_FIELDS)

  fields.forEach((field) => {
    initialValue[field] = { value: "", touched: false }
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

      const updatedFormField = { value: updatedValue, touched: true }
      newFormState[field] = updatedFormField
      setFormState(newFormState)
    }
  }

  const onSubmit = () => {
    // TODO add validation logic.
    // TODO transform form state to API requirements
    // eslint-disable-next-line no-console
    console.log("SUBMITTING: ", { formState })
  }

  return {
    formState,
    onChangeFormValue,
    onSubmit,
  }
}

export default useForm
