import React, { memo } from "react"
import { input, errorDiv } from "../styles.module.css"

const TextInput = ({
  formValue,
  formError,
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
        value={formValue}
        onChange={onHandleChange}
      />
      {/* WIP: DISABLED POP-UP  */}
      {/* <Popup isOpen text={"Please include '@' in the address"} /> */}
      <span className={errorDiv}>{formError}</span>
    </>
  )
}

export default memo(TextInput)
