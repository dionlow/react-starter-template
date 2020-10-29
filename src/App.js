import React from "react"

import useForm from "./useForm"
import Inputs from "./components/Inputs"

import {
  container,
  formContainer,
  circleIcon,
  iconImage,
  headerText,
  signupButton,
} from "./styles.module.css"

const App = () => {
  const { formState, onChangeFormValue, onSubmit } = useForm()
  const inputProps = { formState, onChangeFormValue }

  return (
    <div className={container}>
      <div className={formContainer}>
        <div className={circleIcon}>
          <span className={iconImage} />
        </div>
        <div className={headerText}>Tell us about yourself</div>
        <Inputs {...inputProps} />
        <button
          type="button"
          className={signupButton}
          onClick={onSubmit}
          onKeyPress={onSubmit}
        >
          Sign-up
        </button>
      </div>
    </div>
  )
}

export default App
