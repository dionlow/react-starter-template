import React from "react"
import { render, screen } from "@testing-library/react"
import Inputs from "./index"

const dummyError = "Business Name Required."

const dummyFormState = {
  BUSINESS_NAME: { value: "", error: dummyError, touched: true },
  URL: { value: "", error: null, touched: false },
  TICKETING_SYSTEM: { value: "", error: null, touched: false },
  EMAIL: { value: "", error: null, touched: false },
  PASSWORD: { value: "", error: null, touched: false },
  TERMS: { value: "", error: null, touched: false },
}

test("renders terms of service", () => {
  render(<Inputs formState={dummyFormState} onChangeFormValue={() => {}} />)
  const element = screen.getByText(/Terms of Service/i)
  expect(element).toBeInTheDocument()
})

test("renders select text", () => {
  render(<Inputs formState={dummyFormState} onChangeFormValue={() => {}} />)
  const element = screen.getByText(/Select your ticketing system./i)
  expect(element).toBeInTheDocument()
})

test("renders business name placeholder and error", () => {
  render(<Inputs formState={dummyFormState} onChangeFormValue={() => {}} />)
  const element = screen.getByPlaceholderText(
    /What is the name of your business?/i
  )
  const error = screen.getByText(dummyError)
  expect(element).toBeInTheDocument()
  expect(error).toBeInTheDocument()
})

test("renders url placeholder", () => {
  render(<Inputs formState={dummyFormState} onChangeFormValue={() => {}} />)
  const element = screen.getByPlaceholderText(
    /What is your business website url?/i
  )
  expect(element).toBeInTheDocument()
})

test("renders email placeholder", () => {
  render(<Inputs formState={dummyFormState} onChangeFormValue={() => {}} />)
  const element = screen.getByPlaceholderText(/What is your email?/i)
  expect(element).toBeInTheDocument()
})

test("renders password placeholder", () => {
  render(<Inputs formState={dummyFormState} onChangeFormValue={() => {}} />)
  const element = screen.getByPlaceholderText(/Create a password./i)
  expect(element).toBeInTheDocument()
})
