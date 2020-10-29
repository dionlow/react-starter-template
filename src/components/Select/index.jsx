import React, { useState } from "react"

import ArrowIcon from "../ArrowIcon"

import {
  dropdownContainer,
  arrow,
  dropdownHeader,
  dropdownList,
  dropdownItem,
} from "./styles.module.css"

const defaultOptions = ["Zendesk", "Intercom", "Gorglas"]

const Select = ({ onChangeFormValue, options = defaultOptions, field }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)
  const onOptionSelect = (option) => {
    setIsOpen(false)
    setSelectedOption(option)
    // mimics real event
    const artificialEvent = { target: { value: option } }
    onChangeFormValue(artificialEvent, field)
  }

  return (
    <div className={dropdownContainer}>
      <div
        role="button"
        tabIndex={0}
        className={dropdownHeader}
        onClick={toggling}
        onKeyPress={toggling}
      >
        {selectedOption ?? "Select your ticketing system"}
        <span
          role="button"
          tabIndex={0}
          className={arrow}
          onClick={toggling}
          onKeyPress={toggling}
        >
          <ArrowIcon down={!isOpen} />
        </span>
      </div>
      {isOpen && (
        <div className={dropdownList}>
          {options.map((option) => {
            const onSelect = () => onOptionSelect(option)
            return (
              <div
                role="button"
                tabIndex="0"
                key={`key-${option}`}
                onClick={onSelect}
                className={dropdownItem}
                onKeyPress={onSelect}
              >
                {option}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Select
